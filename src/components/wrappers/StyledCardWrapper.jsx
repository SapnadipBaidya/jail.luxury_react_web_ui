/* eslint-disable react/display-name */
import PropTypes from "prop-types"; // ✅ Import PropTypes
import { Card, CardContent, Typography, Box, Fade, Slide, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WishListButton from "../buttons/wishListBtn.jsx";
import CartBtn from "../buttons/cartBtn.jsx";
import { useDispatch } from "react-redux";
import { storeProductIdGlobally, storeProductDetailsIdGlobally } from "../../store/actions/itemActions.js";

// ✅ Card Container (Enhanced with Hover & Shadows)
const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 4px 8px rgba(164, 180, 112, 0.1)",
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important",
  maxWidth:theme.typography.pxToRem(250),
  maxHeight:theme.typography.pxToRem(350),
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
  "&:hover": {
    transform: "scale(1.02) !important",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 13px 47px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
  },
}));

// ✅ Product Image with Hover Lift Effect
const ProductImage = styled("img")(({ theme }) => ({
  width: theme.typography.pxToRem(200),
  height: theme.typography.pxToRem(200),
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffcaa6",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "rgba(255, 202, 166, 0.5) 0px 10px 30px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },
}));

// ✅ Text Styling
const TextContainer = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const ProductTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1.1rem",
  lineHeight: "1.4",
});

const ProductPrice = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
}));

// ✅ Footer Buttons
const CardFooter = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "10px",
  borderTop: "1px solid #ddd",
});


const StyledCardWrapper = React.memo(({ type, item }) => {
  const mainImgUrl = item?.gallery_details?.gallery?.images?.[0] || "/placeholder.jpg";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, []);

  return (
    <Slide direction="up" in={show} mountOnEnter unmountOnExit>
      <StyledCard>
        <Fade in={show} timeout={500}>
          <ProductImage
            src={mainImgUrl}
            alt="Product Image"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(storeProductIdGlobally(item?.product_details?.product_id)); 
              dispatch(storeProductDetailsIdGlobally(item?.product_details?.products_details_id));
              navigate("/Product");
            }}
          />
        </Fade>

        <TextContainer>
          <ProductTitle variant="body1">{item?.product_details?.product_name || "No Name"}</ProductTitle>
          <ProductPrice variant="subtitle1">₹{item?.product_details?.product_price_inr || "N/A"}</ProductPrice>
        </TextContainer>

        {/* Footer Buttons */}
        <CardFooter>

          {type === "Product" ? <WishListButton item={item} /> : <CartBtn />}

        </CardFooter>
      </StyledCard>
    </Slide>
  );
});

StyledCardWrapper.propTypes = {
  type: PropTypes.string.isRequired, // Required string type
  item: PropTypes.shape({
    gallery_details: PropTypes.shape({
      gallery: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
    product_details: PropTypes.shape({
      product_id: PropTypes.number,
      products_details_id: PropTypes.number,
      product_name: PropTypes.string,
      product_price_inr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default StyledCardWrapper;
