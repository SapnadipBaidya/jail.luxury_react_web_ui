import React, { useState } from 'react';
import { Box, Menu, MenuItem, styled } from '@mui/material';
import GenericBtns from '../buttons/GenericBtns';
import FilterListIcon from '@mui/icons-material/FilterList';

const SortFilterWrapper = styled('div')(({ theme }) => ({
  minWidth: "70vw",
  height: "7vh",
  border: "solid 2px red",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border:"solid 2px green"

}));

function SortFilterComponent({setShowFilters,showFilters}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortBy, setSortBy] = useState("Sort By");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    if (value) {
      setSortBy(value); // Update the selected sorting option
    }
    setAnchorEl(null);
  };


  const handleFilterClick =()=>{
    setShowFilters(!showFilters)
  }

  return (
    <SortFilterWrapper>
     
        <GenericBtns type="primary" btnText={<FilterListIcon/>} executableFunction={handleFilterClick} minWidth="3vw" />
        <GenericBtns type="secondary" btnText={sortBy} executableFunction={handleClick} minWidth="10vw" />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose(null)}
          PaperProps={{
            sx: {
              width: "10vw", // ✅ Set width explicitly
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center", // ✅ Aligns to the right of the button
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center", // ✅ Prevents the menu from shifting left
          }}
        >
          <MenuItem onClick={() => handleClose("Sort By")}>
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={() => handleClose("Price: Low to High")}>Price: Low to High</MenuItem>
          <MenuItem onClick={() => handleClose("Price: High to Low")}>Price: High to Low</MenuItem>
          <MenuItem onClick={() => handleClose("Newest Arrivals")}>Newest Arrivals</MenuItem>
          <MenuItem onClick={() => handleClose("Best Rated")}>Best Rated</MenuItem>
        </Menu>
     
    </SortFilterWrapper>
  );
}

export default SortFilterComponent;