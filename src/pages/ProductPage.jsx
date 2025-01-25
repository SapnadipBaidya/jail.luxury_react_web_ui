import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ProductImage from "../components/productDetailComponent/ProductImage";
import ProductDetails from "../components/productDetailComponent/ProductDetails";

import { useDispatch } from "react-redux";
import { findProductByProductId } from "../store/actions/productActions";
import { data } from "react-router-dom";

const ProductPage = () => {
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    const dumyData = {
      
  };
      dispatch(findProductByProductId());
      
    }, []);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, sm: 4 },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <ProductImage />
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} md={6}>
          <ProductDetails />
          
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductPage;