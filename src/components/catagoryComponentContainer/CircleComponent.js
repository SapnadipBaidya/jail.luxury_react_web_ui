import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findItemsByCatagoryId } from '../../store/actions/itemActions';

// Wrapper for the entire circle and text
const CircleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  padding: "0.5vh",
  height:"25vh"
}));

// Text under the circle
const CircleText = styled(Typography)(({ theme }) => ({
  padding: "1vh",
}));

// Circle container to hold the image
const CircleContainer = styled(Box)(({ theme, radius = "13vh" }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "35%", // Makes it circular
  width: radius,
  height: radius,
  overflow: "hidden", // Ensures no overflow outside the circle
  textDecoration: "none",
  marginLeft: "2vw",
  marginRight: "2vw",
  backgroundColor: theme.palette.primary.main, // Optional: Set a background color
  position: "relative", // For positioning the spinner
  transition: "all 0.3s ease-in-out", // Smooth transition effect
  "&:hover": {
    transform: "scale(1.2)", // Grows slightly on hover
    boxShadow: `0 0 1vw ${theme.palette.secondary.main}`, // Adds a smooth shadow
  },
}));

// Image styling to ensure it perfectly covers the circle
const Image = styled('img')(({ theme }) => ({
  width: "100%", // Fill the circle container
  height: "100%", // Fill the circle container
  objectFit: "cover", // Ensure the image covers the area
  display: "block", // Ensures no inline space for images
}));

// Spinner container
const Spinner = styled(Box)(({ theme, radius = "13vh" }) => ({
  position: "absolute",
  width: radius,
  height: radius,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

function CircleComponent({ data }) {
  const [isLoaded, setIsLoaded] = useState(false); // Track if the image has loaded
  const dispatch = useDispatch();
  
  const handleImageLoad = () => {
    setIsLoaded(true); // Set loaded state to true when the image finishes loading
  };

  return (
    <CircleWrapper>
      <CircleContainer radius="12.5vh" key={"/items"} component={Link} to={"/items"}>
        {!isLoaded && (
          <Spinner radius="20vh">
            {/* iOS-like spinner */}
            <CircularProgress size={40} />
          </Spinner>
        )}
        <Image
          src={data?.catagory_logo}
          alt={data?.catagory_name + " Image "}
          onLoad={handleImageLoad} // Triggered when the image loads
          style={{ display: isLoaded ? "block" : "none" }} // Hide the image until it's loaded
          onClick={(e)=>dispatch(findItemsByCatagoryId(data?.catagory_id))}
        />
      </CircleContainer>
      <CircleText>{data?.catagory_name}</CircleText>
    </CircleWrapper>
  );
}

export default CircleComponent;