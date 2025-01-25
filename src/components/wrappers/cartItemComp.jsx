import React from "react";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/system";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// Styled Components
const CardContainer = styled("tr")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.paper, // Light gray background
  borderRadius: "16px",
  padding: "15px",
  width: theme.typography.pxToRem(1000),
  border: "1px solid black",
  marginBottom:"5vh"
}));

const ImagePlaceholder = styled(Box)({
  width: "80px",
  height: "80px",
  borderRadius: "12px",
  backgroundColor: "#ccc",
  border: "1px solid black",
});

const SizeBox = styled(Box)({
  minWidth: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  borderRadius: "8px",
  fontWeight: "bold",
});


const CartItemComp = () => {
  return (
    <CardContainer>
      <td>
        <Box display="flex" flexDirection="column" alignItems="center" >
          <ImagePlaceholder />
          <Typography fontWeight="bold">Wallet</Typography>
        </Box>
      </td>
      <td>
        <SizeBox>S</SizeBox>
      </td>
      <td>
      <SizeBox>200</SizeBox>
      </td>
      <td>
      <SizeBox>2</SizeBox>
      </td>
      <td>
      <SizeBox>1000</SizeBox>
      </td>
      <td>
        <IconButton>
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </td>
    </CardContainer>
  );
};

export default CartItemComp;
