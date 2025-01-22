import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Card, TextField, styled } from "@mui/material";

const StyledPaginationContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "6vh",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  flexDirection: "row",
  boxShadow: "none", // ✅ Removed box shadow
  backgroundColor: theme.palette.background.default,
  borderRadius: "1vw",
  border:`solid 0.1vh ${theme.palette.primary.main}`,

  [theme.breakpoints.down("md")]: {
    minHeight: "8vh",
    flexDirection: "column",
  },
}));

export default function PaginationComponent({ page, setPage, count = 10 }) {
  const [inputValue, setInputValue] = React.useState(page);

  // ✅ Handle Page Change from Pagination Clicks
  const handleChange = (event, value) => {
    event.stopPropagation(); // Prevent event bubbling
    setPage(value);
    setInputValue(value); // Sync input field with selected page
  };

  // ✅ Update input field but don't change the page immediately
  const handleInputChange = (event) => {
    event.stopPropagation(); // Prevent event leakage
    let value = event.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setInputValue(value); // Update state but don't trigger page change
  };

  // ✅ Change page only when Enter is pressed
  const handleKeyDown = (event) => {
    event.stopPropagation(); // Prevent unintended parent events
    if (event.key === "Enter") {
      let value = inputValue ? Math.min(Math.max(parseInt(inputValue, 10), 1), count) : 1;
      setPage(value);
    }
  };

  return (
    <StyledPaginationContainer>
      <Stack spacing={2} direction="row" alignItems="center">
        {/* ✅ Page Input Box with MUI Styling */}
        <TextField
          type="number"
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // ✅ Update page only on Enter press
          label="Page"
          inputProps={{ min: 1, max: count }}
          sx={{ minWidth: "6vw", maxWidth: "12vw", textAlign: "center" }}
        />

        {/* ✅ Pagination Component with Max 4 Buttons */}
        <Pagination
          count={count}
          page={Number(page) || 1}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          siblingCount={0} // ✅ Shows at most 1 page next to the active page
          boundaryCount={1} // ✅ Shows at most 1 page at the start & end
        />
      </Stack>
    </StyledPaginationContainer>
  );
}