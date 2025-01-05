import React from 'react';
import { styled } from "@mui/material/styles";
import {Box , Typography } from "@mui/material";
import { Link } from 'react-router-dom';




const CircleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly", // Center children horizontally
  alignItems: "center", // Center children vertically
flexDirection:"column",
paddingTop:"0.5vh"
}));

const CircleText = styled(Typography)(({ theme }) => ({
padding:"1vh"
})); 

const CircleContainer = styled(Box)(({ theme , radius="8vh"}) => ({
  display: "flex",
  justifyContent: "center", // Center children horizontally
  alignItems: "center", // Center children vertically
  borderRadius: "50%", // Ensure the element is circular
  minHeight: radius, 
  minWidth: radius, 
  overflow: "hidden", // Optional, to ensure no content overflows
  textDecoration:"none",
  marginLeft:"2vw",
  marginRight:"2vw",
  backgroundColor: theme.palette.primary.main, // Optional: Add a background color for visibility
}));


function CircleComponent({data}) {
  return (
    <CircleWrapper>
    <CircleContainer radius="13vh" key={"/items"} variant="body1" component={Link} to={"/items"}>
      {data}
    </CircleContainer>
    <CircleText>hi</CircleText>
    
    </CircleWrapper>
  );
}

export default CircleComponent;
