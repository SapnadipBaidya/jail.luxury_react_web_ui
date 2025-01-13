import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken") || "";
  });

  const [refreshToken, setRefreshToken] = useState(() => {
    return localStorage.getItem("refreshToken") || "";
  });

  const login = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  const logout = async () => {
    try {
      // Get the user object from localStorage
      const user = JSON.parse(localStorage.getItem("user"));
  
      // Make a request to the backend to handle server-side logout (optional)
      if (user) {
        await fetch("http://localhost:8080/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user }),
        });
      }
  
      // Clear client-side user data
      setUser(null);
      setAccessToken("");
      setRefreshToken("");
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
  
      // Redirect to logout URL
      window.open("http://localhost:8080/logout", "_self");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  
  const refreshAccessToken = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/auth/refresh", {
        withCredentials: true,
      });
      setAccessToken(data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logout(); // Log out if token refresh fails
    }
  };

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/success", {
        withCredentials: true,
      });
      setUser(data.user);
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleTokenFromUrl = async () => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    if (token) {
      setAccessToken(token);
      localStorage.setItem("accessToken", token);
      window.history.replaceState(null, null, "/"); // Clean up the URL
      await fetchUserData(); // Fetch user data after setting the token
    }
  };

  useEffect(() => {
    handleTokenFromUrl();
  }, []);

  useEffect(() => {
    // Automatically refresh the token before it expires
    const interval = setInterval(() => {
      refreshAccessToken();
    }, 1000 * 60 * 5); // Refresh every 5 minutes (adjust based on token expiration time)

    return () => clearInterval(interval);
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{ user, accessToken, login, logout, refreshAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);