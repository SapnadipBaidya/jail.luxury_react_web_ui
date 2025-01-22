import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import StyledCardWrapper from "./StyledCardWrapper";
import { styled } from "@mui/material/styles";
import FilterWrapper from "./FilterWrapper";
import PaginationComponent from "../paginationComponent/pagination";

const GridWrapperComponent = styled("div")(({ theme }) => ({
  minWidth: "70vw",
  minHeight: "10vh", // ✅ Ensure it takes full height of parent
  maxHeight: "80vh",
  border: "solid 1px red",
  overflowY: "auto", // ✅ Enable vertical scrolling
  overflowX: "hidden",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-between",

  [theme.breakpoints.down("md")]: {
    minWidth: "99vw",
    maxWidth: "99vw",
    minHeight: "84.5vh",
    maxHeight: "84.5vh",
    padding: "0.5rem",
    justifyContent: "space-evenly",
  },
}));

function GridWrapper({ itemsArr, type, setShowFilters, showFilters, page, setPage }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const data = Array.isArray(itemsArr?.data) ? itemsArr.data : [];

  return (
    <GridWrapperComponent>
      <Grid container spacing={3} justifyContent="space-between" alignItems="stretch">
          {data.map((item, index) => (
            <Grid 
              item 
              xs={5} 
              sm={6} 
              md={4} 
              lg={3} 
              xl={3} 
              key={index} 
              style={{ display: "flex", flexGrow: 1 }} // ✅ Ensures equal spacing
            >
              <StyledCardWrapper type={type} item={item} />
            </Grid>
          ))}
        </Grid>

      {/* Pagination Component always at bottom */}
    </GridWrapperComponent>
  );
}

export default GridWrapper;