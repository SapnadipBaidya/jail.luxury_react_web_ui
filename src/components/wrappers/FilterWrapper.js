import React, { useState } from "react";
import { 
  Box, Typography, FormControlLabel, Checkbox, RadioGroup, 
  Radio, Slider, Button, useMediaQuery, useTheme 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GenericBtns from "../buttons/GenericBtns";

const FilterWrapperComponent = styled(Box)(({ theme }) => ({
  minWidth: theme.typography.pxToRem(350), 
  maxWidth: theme.typography.pxToRem(350),
  minHeight: "87vh", 
  maxHeight: "87vh",
  border: `solid ${theme.typography.pxToRem(2)} red`,
  overflow: "hidden", 
  padding: theme.spacing(2),
  border: `solid ${theme.typography.pxToRem(2)} blue`,
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    minWidth: "99vw", 
    maxWidth: "99vw",
    minHeight: "85vh", 
    maxHeight: "85vh",
    padding: theme.spacing(1),
  },
}));

const FilterHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: theme.spacing(2),
  borderBottom: `solid ${theme.typography.pxToRem(1)} ${theme.palette.secondary.main}`,
}));

const FilterContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(1),

  "&::-webkit-scrollbar": { width: theme.typography.pxToRem(6) },
  "&::-webkit-scrollbar-track": { background: "transparent" },
  "&::-webkit-scrollbar-thumb": { background: "rgba(0, 0, 0, 0.3)", borderRadius: theme.typography.pxToRem(10) },
  "&::-webkit-scrollbar-thumb:hover": { background: "rgba(0, 0, 0, 0.5)" },
}));

const FilterFooter = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  borderTop: `solid ${theme.typography.pxToRem(1)} ${theme.palette.secondary.main}`,
}));

const FilterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: theme.typography.pxToRem(16),
}));

const FilterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

function FilterWrapper({ onApplyFilters, onClearFilters }) {
  const theme = useTheme();

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

  const handlePriceChange = (_, newValue) => {
    setSelectedFilters((prev) => ({ ...prev, price: newValue }));
  };

  return (
    <FilterWrapperComponent>
      
      {/* ✅ Fixed Header */}
      <FilterHeader>
        <FilterTitle>Filters</FilterTitle>
        <GenericBtns type="secondary" btnText={"Clear Filters"} executableFunction={onClearFilters} minWidth="5vw" />
      </FilterHeader>

      {/* ✅ Scrollable Filters Section */}
      <FilterContent>
        {/* Gender Filter (Radio Buttons) */}
        <FilterSection>
          <FilterTitle>Gender</FilterTitle>
          <RadioGroup
            value={selectedFilters.gender}
            onChange={(e) => handleRadioChange("gender", e.target.value)}
          >
            {["Male", "Female"].map((gender) => (
              <FormControlLabel 
                key={gender} 
                value={gender} 
                control={<Radio sx={{
                  color: theme.palette.ascentColor.main,
                  '&.Mui-checked': { color: theme.palette.ascentColor.main }
                }} />} 
                label={gender} 
              />
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
                  sx={{
                    color: theme.palette.ascentColor.main,
                    '&.Mui-checked': { color: theme.palette.ascentColor.main }
                  }}
                />
              }
              label={size}
            />
          ))}
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
            sx={{
              color: theme.palette.ascentColor.main,
              maxWidth: "92%",
            }}
          />
          <Typography>₹{selectedFilters.price[0]} - ₹{selectedFilters.price[1]}</Typography>
        </FilterSection>
      </FilterContent>

      {/* ✅ Fixed Footer */}
      <FilterFooter>
        <Button variant="contained" fullWidth onClick={() => onApplyFilters(selectedFilters)}>
          Apply Filters
        </Button>
      </FilterFooter>

    </FilterWrapperComponent>
  );
}

export default FilterWrapper;