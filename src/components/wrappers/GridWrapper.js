import { Grid, useMediaQuery, useTheme, Slide } from "@mui/material";
import React from "react";
import StyledCardWrapper from "./StyledCardWrapper";
import { styled } from "@mui/material/styles";
import FilterWrapper from "./FilterWrapper";
import SortFilterComponent from "./sortFilterComponent";

const GridWrapperComponent = styled("div")(({ theme }) => ({
  minWidth: "70vw",
  height: "80vh", // ✅ Defined height to enable scrolling
  border: "solid 1px red",
  overflowY: "auto", // ✅ Enable vertical scrolling
  overflowX: "hidden", // ✅ Prevent horizontal scrolling
  padding: "1rem", // ✅ Prevents content clipping
  display:"flex",

    // ✅ Tablet Responsiveness
    [theme.breakpoints.down("md")]: {
        minWidth: "99vw", 
        maxWidth: "99vw",
        minHeight:"84.5vh",
        maxHeight: "84.5vh",
        padding: "0.5rem",
        justifyContent:"space-evenly",
      },
}));

function GridWrapper({ itemsArr, setShowFilters, showFilters }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md")); // ✅ Detects mobile/tablet view

  return (
    <div>
      {/* ✅ Desktop: SortFilterComponent at the top, GridWrapper always visible */}
      {!isMobileOrTablet && (
        <>
          <SortFilterComponent setShowFilters={setShowFilters} showFilters={showFilters} />
          <GridWrapperComponent>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              {itemsArr?.data?.map((item, index) => (
                <Grid item xs={6} sm={6} md={4} lg={4} xl={3} key={index}>
                  <StyledCardWrapper />
                </Grid>
              ))}
            </Grid>
          </GridWrapperComponent>
        </>
      )}

      {/* ✅ Mobile/Tablet: Show FilterWrapper or GridWrapper based on `showFilters` */}
      {isMobileOrTablet && (
        <>
           {showFilters && <div>
              <FilterWrapper />
            </div>}

     
            {!showFilters && <GridWrapperComponent>
              <Grid container spacing={3} justifyContent="center" alignItems="center">
                {itemsArr?.data?.map((item, index) => (
                  <Grid item xs={6} sm={6} md={4} lg={4} xl={3} key={index}>
                    <StyledCardWrapper />
                  </Grid>
                ))}
              </Grid>
            </GridWrapperComponent>}
       

          {/* ✅ SortFilterComponent is always visible at the bottom in mobile/tablet */}
          <SortFilterComponent setShowFilters={setShowFilters} showFilters={showFilters} />
        </>
      )}
    </div>
  );
}

export default GridWrapper;