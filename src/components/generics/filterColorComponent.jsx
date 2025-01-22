import { Card, Checkbox, Chip, FormControlLabel, styled, Typography } from '@mui/material'
import React from 'react'




const FilterTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: theme.typography.pxToRem(16),
  }));

const FilterColorWrapper =   styled("div")(({ theme }) => ({
    color: theme.palette.ascentColor.main,
    "&.Mui-checked": { color: theme.palette.ascentColor.main },
    display:"flex",
    flexDirection:"column"
  }));

 
 const CheckboxWrapper =   styled(Checkbox)(({ theme }) => ({
     color: theme.palette.ascentColor.main,
     "&.Mui-checked": { color: theme.palette.ascentColor.main },
   })); 



function FilterColorComponent({colorArr ,colorLoading ,selectedFilters, handleCheckboxChange}) {
  return (
    <>
    <FilterTitle>Colours</FilterTitle>
    <FilterColorWrapper>
      {!colorLoading ? colorArr?.map(color => <FormControlLabel
                  key={"color"+color?.pk_color_id}
                  control={
                    <CheckboxWrapper
                      checked={selectedFilters?.color?.includes(color?.pk_color_id)}
                      onChange={() => handleCheckboxChange("color", color?.pk_color_id)}
                    />
                  }
                  label={<><Chip key={"hi"}  sx={{backgroundColor:`${color?.color_hex}`}}/> {color?.color_name}</>}
                />):<>loading</>}
       
           


    </FilterColorWrapper>
    </>
  )
}

export default FilterColorComponent