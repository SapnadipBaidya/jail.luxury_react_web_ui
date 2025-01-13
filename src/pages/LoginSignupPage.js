import {React,useEffect} from "react";
import { useAuth } from "../contexts/AuthProvider";

const LoginSignupPage = () => {
  const { user, login, logout, accessToken, refreshAccessToken } = useAuth();
useEffect(() => {
  login()


}, [])

  return (
    <></>
  );
};

export default LoginSignupPage;