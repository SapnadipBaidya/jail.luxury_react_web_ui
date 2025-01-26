import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import ProductImage from "../components/productDetailComponent/ProductImage";
import ProductDetails from "../components/productDetailComponent/ProductDetails";

import { useDispatch, useSelector } from "react-redux";import { findProductByProductId } from "../store/actions/productActions";

import RecommandationCard from "../components/recommandationComponent/RecommandationCard";

const ProductPage = () => {
  const [productDetails,setProductDetails]=useState({
    itemMRP:"",
    itemColor:"",
    itemSize:"",
    itemProductDetailsId:""
  });

  function chooseProduct(item){
    console.log(first)
  }
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.idStorageReducer.productId);
  const productData = useSelector((state) => state.productReducer); 
  console.log("productData",productData?.data?.processedData);
  useEffect(() => {

      dispatch(findProductByProductId({
        "product_id": productId
    }));
      
    }, []);

  return (
    <><Box
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
          <ProductDetails colorArr={productData?.data?.processedData.allColorsIdOfProduct} sizeArr={productData?.data?.processedData?.allSizesIdOfProduct}/>
          
        </Grid>
      </Grid>
    </Box>
    <RecommandationCard />
    
   
    
    </>
  );
}

export default ProductPage;