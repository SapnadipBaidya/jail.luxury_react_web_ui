import React from "react";
import { styled } from "@mui/material/styles";
import { Box, useMediaQuery, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Styled container for the video and text
const VideoContainer = styled(Box)(({ theme, isMobile , mode}) => ({
  width: "90%",
  height: "100%",
  display: "flex",
  flexDirection: isMobile ? "column" : "row", // Stack in column for mobile
  alignItems: "center",
  justifyContent: isMobile ? "center" : "space-evenly",
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  padding: theme.spacing(2),
  gap: theme.spacing(2),

  // Use the image as the background
  backgroundImage: mode == "dark" ? "url('./webps/darkmodeBackgroundImg.webp')":"url('./webps/lightmodeBackgroundImg.webp')",
  backgroundSize: "cover", // Make the background cover the container
  backgroundRepeat: "no-repeat", // Prevent the image from repeating
  backgroundPosition: "center", // Center the image
}));

// Styled container for the description
const VideoDescContainer = styled(Typography)(({ theme }) => ({
  maxWidth: "90%", // Limit the width of the text container
  wordWrap: "break-word", // Ensures long words or text are wrapped
  textAlign: "justify", // Optional: Justifies the text for a clean layout
  width: "100%", // Ensures full width on mobile
  color:theme.palette.secondary.main
}));

const LocalVideoPlayer = ({ videoSrc }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
console.log("mode",theme.palette.mode)
  return (
    <VideoContainer isMobile={isMobile} mode={theme.palette.mode}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline // Necessary for iOS to allow autoplay
        style={{
          width: isMobile ? "100%" : "20%", // Adjusts video size based on screen size
          height: isMobile ? "auto" : "100%", // Maintain aspect ratio
          objectFit: "cover", // Maintain aspect ratio and cover the container
          borderRadius:"1vh"
        }}
      />
      <div style={{ display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

     
      <VideoDescContainer>
      <h1>WHY JAIL ?</h1>
        The name “Jail” is more than just a brand; it’s a nod to our roots. The
        original shop was located on Jail Road in Banka, and the name was born
        out of the simplicity of directions—“Jail Road, Jail Road.” Today, it
        stands as a symbol of our journey, from a small shop in Bihar to a
        luxury brand that resonates with customers around the world.

        
      </VideoDescContainer>
      </div>
      
    </VideoContainer>
  );
};

export default LocalVideoPlayer;
