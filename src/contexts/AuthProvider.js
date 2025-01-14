import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  });

  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken") || "";
  });

  const [isLoading, setIsLoading] = useState(false);

  const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });

  const login = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  const logout = async () => {
    try {
      await apiClient.post("/logout");
      clearAuthData();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const clearAuthData = () => {
    setUser(null);
    setAccessToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  const refreshAccessToken = async () => {
    try {
      const { data } = await apiClient.get("/auth/refresh");
      updateAccessToken(data.accessToken);
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logout(); // Log out if token refresh fails
    }
  };

  const fetchUserData = async () => {
    if (!accessToken) return;

    try {
      setIsLoading(true);

      const { data } = await apiClient.get("/success", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Failed to fetch user data:", error);

      if (error.response?.status === 401) {
        await refreshAccessToken();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleTokenFromUrl = async () => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");

    if (token) {
      updateAccessToken(token);
      window.history.replaceState(null, null, "/"); // Clean up URL
      await fetchUserData();
    }
  };

  const updateAccessToken = (token) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
  };

  useEffect(() => {
    handleTokenFromUrl();
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetchUserData();

      const interval = setInterval(() => {
        refreshAccessToken();
      }, 1000 * 60 * 30); // Refresh every 30 minutes

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ user, accessToken, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);