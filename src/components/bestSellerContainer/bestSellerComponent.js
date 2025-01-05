import React from "react";
import { Typography, Box, Card, useMediaQuery } from "@mui/material";
import BestSellerCard from "./bestSellerCard";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// Styled container for the Best Seller cards
const BestSellerContainer = styled(Card)(({ theme, isTablet }) => ({
  display: "flex",
  flexDirection: isTablet ? "column" : "row", // Stack vertically on tablets
  justifyContent: "space-between",
  alignItems: "center",
  border: "solid 2px red",
  width: "45vw",
  padding: theme.spacing(2), // Add some padding for spacing
  gap: theme.spacing(2), // Add spacing between cards
}));

function BestSellerComponent() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg")); // Check if the screen is tablet size or smaller

  return (
    <div
      style={{
        border: "solid 2px red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "1vh",
        width: "60vw",
      }}
    >
      <Typography style={{ padding: "2vh" }}>OUR BEST SELLERS</Typography>
      <BestSellerContainer isTablet={isTablet}>
        <BestSellerCard
          title="LADIES"
        />
        <BestSellerCard
          title="GENTLEMEN"
        />
      </BestSellerContainer>
    </div>
  );
}

export default BestSellerComponent;
