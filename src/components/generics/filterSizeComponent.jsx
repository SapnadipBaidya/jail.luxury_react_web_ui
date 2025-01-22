import { Checkbox, FormControlLabel, styled, Typography } from "@mui/material";
import React from "react";


const FilterTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: theme.typography.pxToRem(16),
  }));

const CheckboxWrapper =   styled(Checkbox)(({ theme }) => ({
    color: theme.palette.ascentColor.main,
    "&.Mui-checked": { color: theme.palette.ascentColor.main },
    

  }));

  
function FilterSizeComponent({ sizeArr,sizeLoading ,selectedFilters,handleCheckboxChange}) {
    console.log("sizeArr",sizeArr)
  return (
    <>
      <FilterTitle>Size</FilterTitle>
      { !sizeLoading ? sizeArr?.map((size) => (
        <FormControlLabel
          key={"size"+size?.pk_size_id}
          control={
            <CheckboxWrapper
              checked={selectedFilters?.size?.includes(size?.pk_size_id)}
              onChange={() => handleCheckboxChange("size", size?.pk_size_id)}
            />
          }
          label={size?.size_name}
        />
      )):<>loading</>}
    </>
  );
}

export default FilterSizeComponent;
