import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

// ✅ Styled MUI Button
const ProfileButton = styled(Button)(({ theme }) => ({
  "--button_radius": "0.75em",
  "--button_color": theme.custom.btnBgColor,
  "--button_outline_color": theme.custom.btnBorder,
  fontSize: theme.typography.pxToRem(14),
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  borderRadius: "var(--button_radius)",
  background: "var(--button_outline_color)",
  padding: "0",
  position: "relative",
  overflow: "hidden",
  "& .button_top": {
    display: "block",
    boxSizing: "border-box",
    border: "2px solid var(--button_outline_color)",
    borderRadius: "var(--button_radius)",
    padding: `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(40)}`,
    background: "var(--button_color)",
    color: theme.custom.primaryButtonFontColor,
    transform: "translateY(-0.2em)",
    transition: "transform 0.1s ease",
    width: "100%",
    textAlign: "center",
    height:theme.typography.pxToRem(50),
    marginTop:theme.typography.pxToRem(3)
  },
  "&:hover .button_top": {
    transform: "translateY(-0.40em)",

  },
  "&:active .button_top": {
    transform: "translateY(0)",
  },
  maxHeight:theme.typography.pxToRem(80)
}));

const ProfileBtn = ({text,executableFunction}) => {
  return (
    <ProfileButton  onClick={executableFunction} >
      <span className="button_top">{text}</span>
    </ProfileButton>
  );
};

export default ProfileBtn;
