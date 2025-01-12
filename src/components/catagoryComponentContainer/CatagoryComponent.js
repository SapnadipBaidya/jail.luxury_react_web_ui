import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CircleComponent from "./CircleComponent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";

// Styled Components
const CardContainer = styled(Box)(({ theme, mode }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "30vh",
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  // Use the image as the background
  backgroundImage:
    mode == "dark"
      ? "url('./webps/darkmodeBackgroundImg.webp')"
      : "url('./webps/lightmodeBackgroundImg.webp')",
  backgroundSize: "cover", // Make the background cover the container
  backgroundRepeat: "no-repeat", // Prevent the image from repeating
  backgroundPosition: "center", // Center the image
}));

const CircleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
  overflowX: "auto", // Enable horizontal scrolling
  scrollbarWidth: "none", // Hide scrollbar in most browsers
  "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Webkit-based browsers
}));

function CatagoryComponent() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  // Get categories from Redux state
  const category = useSelector((state) => state.categoryReducer);


  const [startIndex, setStartIndex] = useState(0); // Track visible cards

  const totalCards = category?.data?.length || 0; // Total number of CircleComponents
  const displayCount = isTablet ? 3 : 5; // Adjust displayed count based on screen size

  // Memoize Circle Components
  const circleComponents = useMemo(
    () =>
      Array.from({ length: totalCards }, (_, index) => (
        <CircleComponent
          key={category?.data?.[index]?.catagory_id}
          data={category?.data?.[index]}
        />
      )),
    [category?.data, totalCards]
  );

  // Handlers for previous/next navigation
  const handlePrev = () =>
    setStartIndex((prev) => Math.max(prev - displayCount, 0));

  const handleNext = () =>
    setStartIndex((prev) =>
      Math.min(prev + displayCount, totalCards - displayCount)
    );

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        style={{ marginTop: "4vh", marginBottom: "4vh" }}
      >
        SHOP BY CATEGORY
      </Typography>
      <CardContainer mode={theme.palette.mode}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            position: "relative",
            justifyContent: "center",
          }}
        >
          {/* Previous Button */}
          {!isTablet && (
            <IconButton onClick={handlePrev} disabled={startIndex === 0}>
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
    </>
  );
}

export default React.memo(CatagoryComponent); // Optimize re-renders with React.memo
