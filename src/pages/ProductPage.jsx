import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import ProductImage from "../components/productDetailComponent/ProductImage";
import ProductDetails from "../components/productDetailComponent/ProductDetails";
import { useAuth } from "../contexts/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { findProductByProductId } from "../store/actions/productActions";

import ProductDetailsTabComponent from "../components/productDetailsTabComponent/ProductDetailsTabComponent";
import RecommandationCard from "../components/recommandationComponent/RecommandationCard";

const ProductPage = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.idStorageReducer.productId);
  const productDetailId = useSelector(
    (state) => state.idStorageReducer.productDetailId
  );
  const productData = useSelector((state) => state.productReducer?.data);
  console.log("productData ", productData);
  useEffect(() => {
    dispatch(
      findProductByProductId({
        product_id: productId,
        userId: user?.id,
        productDetailId,
      })
    );
  }, []);

  return (
    <>
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
            <ProductDetails
              price={productData?.price}
              description={productData?.description}
              colorArr={productData?.allColors}
              sizeArr={productData?.allSizes}
              defaultProductColorId={productData?.defaultProductColorId}
              defaultProductSizeId={productData?.defaultProductSizeId}
            />
          </Grid>
        </Grid>
      </Box>
      <ProductDetailsTabComponent />
      <RecommandationCard />
    </>
  );
};

export default ProductPage;
