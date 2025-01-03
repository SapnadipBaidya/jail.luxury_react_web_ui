import React from "react";
import GenericBtns from "../buttons/GenericBtns";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Typography, Card } from "@mui/material";

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
  return (
    <ProfilePopupComponentContainer>
      <NavLink variant="body1" component={Link} to={"/login-signup"}>
        <GenericBtns type="secondary" btnText="Login / SignUp" />
      </NavLink>
      <NavLink variant="body1" component={Link} to={"/track-orders"}> <GenericBtns type="primary" btnText="Orders" /></NavLink>
      <NavLink variant="body1" component={Link} to={"/track-orders"}> <GenericBtns type="primary" btnText="Tracking" /></NavLink>
     
      
    </ProfilePopupComponentContainer>
  );
}

export default ProfilePopupComponent;
