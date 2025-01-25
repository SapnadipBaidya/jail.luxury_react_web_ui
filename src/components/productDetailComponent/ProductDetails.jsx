import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Available sizes
const sizes = ["S", "M", "L", "XL"];

// Available colors
const colors = [
  { name: "Black", code: "#000" },
  { name: "Maroon", code: "#800000" },
];

const StyledContainer = styled(Box)``;

const StyledTitle = styled(Typography)({
  fontWeight: "bold",
});

const StyledRating = styled(Typography)({
  marginBottom: "8px",
});

const StyledPrice = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.background.paper,
  display: "inline-block",
  padding: "4px 8px",
  borderRadius: "4px",
}));

const StyledDescriptionTitle = styled(Typography)({
  marginTop: "16px",
  marginBottom: "8px",
  fontWeight: "bold",
});

const StyledDescription = styled(Typography)({
  marginBottom: "24px",
});

const StyledSectionTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "8px",
});

const StyledColorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  marginBottom: "24px",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const ColorCircle = styled(Box)(({ bgcolor, selected }) => ({
  width: "32px",
  height: "32px",
  backgroundColor: bgcolor,
  borderRadius: "50%",
  cursor: "pointer",
  border: selected ? "2px solid black" : "2px solid transparent",
  transition: "border 0.2s ease-in-out",
}));

const StyledSizeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  marginBottom: "16px",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const SizeButton = styled(Button)(({ selected }) => ({
  borderRadius: "8px",
  minWidth: "50px",
  backgroundColor: selected ? "#333" : "transparent",
  color: selected ? "#fff" : "#000",
  border: selected ? "2px solid black" : "1px solid #ccc",
  transition: "background 0.2s ease-in-out",
}));

const QuantityContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const QuantityButton = styled(Button)({
  minWidth: "32px",
  borderRadius: "50%",
  padding: "0",
  textAlign: "center",
});

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(colors[0].code);
  

  return (
    <StyledContainer>
      <StyledTitle variant="h4">Wallet</StyledTitle>
      <StyledRating variant="body2" color="text.secondary">
        4.3 ★ 122 Ratings
      </StyledRating>
      <StyledPrice variant="h6">MRP 2999</StyledPrice>

      <StyledDescriptionTitle variant="body1">Description</StyledDescriptionTitle>
      <StyledDescription variant="body2">
        Dive into the world of sleek storage with this finely crafted leather
        wallet. This accessory's premium Italian leather offers a smooth touch
        and a sturdy feel. Its classic black shade and clean design make it the
        ideal wallet for casual and formal settings.
      </StyledDescription>

      <StyledSectionTitle variant="body1">Color</StyledSectionTitle>
      <StyledColorContainer>
        {colors.map((color) => (
          <ColorCircle
            key={color.code}
            bgcolor={color.code}
            selected={selectedColor === color.code}
            onClick={() => setSelectedColor(color.code)}
          />
        ))}
      </StyledColorContainer>

      <StyledSectionTitle variant="body1">Size</StyledSectionTitle>
      <StyledSizeContainer>
        {sizes.map((size) => (
          <SizeButton
            key={size}
            variant="outlined"
            selected={selectedSize === size}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </SizeButton>
        ))}
      </StyledSizeContainer>

      <Typography variant="caption" color="text.secondary">
        Size & Fit Guide
        <br />
        Height of model: 189 cm / 6'2", Size: 41
      </Typography>

      {/* Add to Cart & Quantity Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3, flexDirection: { xs: "column", sm: "row" } }}>
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: "50%",
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <Button variant="contained" color="primary" sx={{ flex: 1, py: 1.5, width: { xs: "100%", sm: "auto" } }}>
          Add to Cart
        </Button>
        
      </Box>
    </StyledContainer>
  );
};

export default ProductDetails;