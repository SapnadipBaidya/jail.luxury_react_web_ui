import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CircleComponent from "./CircleComponent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const CircleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
  overflowX: "auto", // Enable horizontal scrolling
  scrollbarWidth: "none", // Hide scrollbar in most browsers
  "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Webkit-based browsers
//   width: "100%",
}));

function CatagoryComponent() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const [startIndex, setStartIndex] = useState(0); // Track visible cards
  const totalCards = 20; // Total number of CircleComponents
  const displayCount = isTablet ? 3 : 5; // Adjust displayed count based on screen size

  const circleComponents = Array.from({ length: totalCards }, (_, index) => (
    <CircleComponent key={index} data={index} />
  ));

  // Handlers for previous/next navigation
  const handlePrev = () => setStartIndex((prev) => Math.max(prev - displayCount, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + displayCount, totalCards - displayCount));

  return (
    <CardContainer>
      <Typography variant="h5" gutterBottom>
        SHOP BY CATEGORY
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", width: "100%", position: "relative" , justifyContent:"center" }}>
        {/* Previous Button */}
        {!isTablet && (
          <IconButton
            onClick={handlePrev}
            disabled={startIndex === 0}
            
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}

        {/* Circle Components */}
        <CircleWrapper>
          {isTablet
            ? circleComponents // Scrollable on tablet
            : circleComponents.slice(startIndex, startIndex + displayCount)}
        </CircleWrapper>

        {/* Next Button */}
        {!isTablet && (
          <IconButton
            onClick={handleNext}
            disabled={startIndex + displayCount >= totalCards}
            
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>
    </CardContainer>
  );
}

export default CatagoryComponent;
