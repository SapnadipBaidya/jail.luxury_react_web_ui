import React, { useState } from "react";
import { 
  Box, Typography, FormControlLabel, Checkbox, RadioGroup, 
  Radio, Slider, Button, useMediaQuery, useTheme 
} from "@mui/material";
import { styled } from "@mui/material/styles";

const FilterWrapperComponent = styled(Box)(({ theme }) => ({
  minWidth: theme.typography.pxToRem(350), 
  maxWidth: theme.typography.pxToRem(350),
  minHeight: "85vh", 
  maxHeight: "85vh",
  border: `solid ${theme.typography.pxToRem(2)} red`,
  overflowY: "auto", 
  overflowX: "hidden",
  padding: theme.spacing(2),
  border: `solid ${theme.typography.pxToRem(2)} blue`,

  // ✅ Tablet Responsiveness
  [theme.breakpoints.down("md")]: {
    minWidth: "99vw", 
    maxWidth: "99vw",
    minHeight: "85vh", 
    maxHeight: "85vh",
    padding: theme.spacing(1),
  },
}));

const FilterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
  textTransform: "uppercase",
  fontSize: theme.typography.pxToRem(16),
  borderBottom: `${theme.typography.pxToRem(1)} solid black`,
  display: "inline-block",
}));

const ColorBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  marginTop: "8px",
});

const ColorCircle = styled(Box)(({ selected, color, theme }) => ({
  width: selected ? theme.typography.pxToRem(28) : theme.typography.pxToRem(20),
  height: selected ? theme.typography.pxToRem(28) : theme.typography.pxToRem(20),
  borderRadius: "50%",
  backgroundColor: color,
  border: `2px solid ${selected ? "black" : "#ccc"}`,
  cursor: "pointer",
  transition: "0.2s ease-in-out",
}));

const FilterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

function FilterWrapper({ onApplyFilters, onClearFilters }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedFilters, setSelectedFilters] = useState({
    gender: "",
    size: [],
    color: [],
    price: [0, 1000000],
    rating: "",
  });

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleRadioChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleColorSelection = (color) => {
    setSelectedFilters((prev) => ({
      ...prev,
      color: prev.color.includes(color) ? prev.color.filter((c) => c !== color) : [...prev.color, color],
    }));
  };

  const handlePriceChange = (_, newValue) => {
    setSelectedFilters((prev) => ({ ...prev, price: newValue }));
  };

  return (
    <FilterWrapperComponent>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Filters <Button size="small" onClick={onClearFilters}>Clear Filters</Button>
      </Typography>

      {/* Gender Filter (Radio Buttons) */}
      <FilterSection>
        <FilterTitle>Gender</FilterTitle>
        <RadioGroup
          value={selectedFilters.gender}
          onChange={(e) => handleRadioChange("gender", e.target.value)}
        >
          {["Male", "Female"].map((gender) => (
            <FormControlLabel key={gender} value={gender} control={<Radio />} label={gender} />
          ))}
        </RadioGroup>
      </FilterSection>

      {/* Size Filter (Checkbox - Multiple Selections) */}
      <FilterSection>
        <FilterTitle>Size</FilterTitle>
        {["S", "M", "L", "XL"].map((size) => (
          <FormControlLabel
            key={size}
            control={
              <Checkbox
                checked={selectedFilters.size.includes(size)}
                onChange={() => handleCheckboxChange("size", size)}
              />
            }
            label={size}
          />
        ))}
      </FilterSection>

      {/* Color Filter */}
      <FilterSection>
        <FilterTitle>Color</FilterTitle>
        <ColorBox>
          {["#000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFA500", "#800080", "#FFC0CB"].map((color) => (
            <ColorCircle
              key={color}
              color={color}
              selected={selectedFilters.color.includes(color)}
              onClick={() => handleColorSelection(color)}
            />
          ))}
        </ColorBox>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection>
        <FilterTitle>Price</FilterTitle>
        <Slider
          value={selectedFilters.price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000000}
        />
        <Typography>₹{selectedFilters.price[0]} - ₹{selectedFilters.price[1]}</Typography>
      </FilterSection>

      {/* Rating Filter (Radio Buttons) */}
      <FilterSection>
        <FilterTitle>Rating</FilterTitle>
        <RadioGroup
          value={selectedFilters.rating}
          onChange={(e) => handleRadioChange("rating", e.target.value)}
        >
          {[4, 3, 2, 1].map((rating) => (
            <FormControlLabel key={rating} value={rating} control={<Radio />} label={`${rating}★ and above`} />
          ))}
        </RadioGroup>
      </FilterSection>

      <Button variant="contained" fullWidth onClick={() => onApplyFilters(selectedFilters)}>
        Apply Filters
      </Button>
    </FilterWrapperComponent>
  );
}

export default FilterWrapper;