import React from 'react';
import ProductCard from './../components/productCardContainer/ProductCard';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


const ProductWrapper = styled(Box)(({ theme , radius="8vh"}) => ({
    display: "flex",
    justifyContent: "center", // Center children horizontally
    alignItems: "center", 
    minHeight: radius, 
    minWidth: radius, 
    maxHeight: radius, 
    maxWidth: radius,
    overflow: "hidden", // Optional, to ensure no content overflows
    textDecoration:"none",
    backgroundColor: theme.palette.primary.main, // Optional: Add a background color for visibility
  }));

function ItemsPage() {
  return (
    <div>
        <ProductWrapper radius="20vh" key={"/product"} variant="body1" component={Link} to={"/product"}>     <ProductCard/></ProductWrapper>
 
    </div>
  );
}

export default ItemsPage;
