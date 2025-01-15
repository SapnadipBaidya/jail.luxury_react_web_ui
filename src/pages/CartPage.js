import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import axios from 'axios';

function CartPage() {


  const fetchSecureData = async (accessToken) => {
    try {
      const response = await axios.get("http://localhost:8080/secure-data", {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the access token
        },
      });
  
      console.log("Secure data:", response.data);
    } catch (error) {
      console.error("Error accessing secure data:", error.response?.data || error.message);
    }
  };

  const { user, login, logout, accessToken, refreshAccessToken } = useAuth();

  fetchSecureData(accessToken)
  return (
    <div>
      {user?<>cart page</>:<>Please Login</>}
      
    </div>
  );
}

export default CartPage;
