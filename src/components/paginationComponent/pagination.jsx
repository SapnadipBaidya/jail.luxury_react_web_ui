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
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.down("md")]: {
    minHeight: "8vh",
    flexDirection: "column",
  },
}));

export default function PaginationComponent({ page, setPage, count = 10 }) {
  // ✅ Handle Page Change from Pagination Clicks
  const handleChange = (event, value) => {
    setPage(value);
  };

  // ✅ Handle Page Change from Input Field
  const handleInputChange = (event) => {
    let value = event.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    value = value ? Math.min(Math.max(parseInt(value, 10), 1), count) : 1; // Limit range (1 to count)
    setPage(value);
  };

  return (
    <StyledPaginationContainer>
      <Stack spacing={2} direction="row" alignItems="center">
        {/* ✅ Page Input Box with MUI Styling */}
        <TextField
          type="number"
          variant="outlined"
          size="small"
          value={page}
          onChange={handleInputChange}
          label="Page"
          inputProps={{ min: 1, max: count }}
          sx={{ width: "80px", textAlign: "center" }} // ✅ Proper width & alignment
        />

        {/* ✅ Pagination Component */}
        <Pagination
          count={count}
          page={Number(page) || 1} // Default to 1 if empty
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </StyledPaginationContainer>
  );
}