import React from "react";
import GenericBtns from "../buttons/GenericBtns";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Typography, Card } from "@mui/material";
import { useAuth } from "../../contexts/AuthProvider";

const NavLink = styled(Typography)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    fontWeight: "bold",
  },
}));

const ProfilePopupComponentContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
}));
function ProfilePopupComponent() {
  const { user, login, logout, accessToken, refreshAccessToken } = useAuth();
  const HandleLogin = () => {
    login()
  }

  const HandleLogout =() => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }
  return (
    <ProfilePopupComponentContainer>

      {
        user?  <GenericBtns type="error" btnText="Logout"  executableFunction={HandleLogout}/>: <GenericBtns type="secondary" btnText="Login / SignUp" executableFunction={HandleLogin}/>
      }
      <NavLink variant="body1" component={Link} to={"/orders"}> <GenericBtns type="primary" btnText="Orders" /></NavLink>
      <NavLink variant="body1" component={Link} to={"/usercontact"}> <GenericBtns type="primary" btnText="Profile" /></NavLink>
      
    </ProfilePopupComponentContainer>
  );
}

export default ProfilePopupComponent;
