/* eslint-disable react/display-name */
import PropTypes from "prop-types"; // ✅ Import PropTypes
import { Card, CardContent, Typography, Box, Fade, Slide } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WishListButton from "../buttons/wishListBtn.jsx";
import DeleteBtn from "../buttons/deleteBtn.jsx";
import CartBtn from "../buttons/cartBtn.jsx";
import { useDispatch } from "react-redux";
import { storeProductIdGlobally, storeProductDetailsIdGlobally } from "../../store/actions/itemActions.js";

// ✅ Fully Responsive Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(0),
  boxShadow: theme.shadows[4],
  borderRadius: theme.typography.pxToRem(10),
  transition: "transform 0.3s ease",
  border: "solid 2px red",
  minWidth: theme.typography.pxToRem(200),
  maxWidth: theme.typography.pxToRem(200),
  minHeight: theme.typography.pxToRem(330),
  maxHeight: theme.typography.pxToRem(340),
  "&:hover": {
    transform: "scale(1.1)",
  },

  [theme.breakpoints.down("lg")]: {
    minWidth: theme.typography.pxToRem(220),
    maxWidth: theme.typography.pxToRem(260),
    minHeight: theme.typography.pxToRem(350),
    maxHeight: theme.typography.pxToRem(350),
    padding: theme.spacing(1),
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: theme.typography.pxToRem(150),
    maxWidth: theme.typography.pxToRem(170),
    minHeight: theme.typography.pxToRem(200),
    maxHeight: theme.typography.pxToRem(280),
    padding: theme.spacing(0.5),
  },
}));

const ProductImage = styled("img")(({ theme }) => ({
  minWidth: theme.typography.pxToRem(100),
  maxWidth: theme.typography.pxToRem(170),
  minHeight: theme.typography.pxToRem(160),
  maxHeight: theme.typography.pxToRem(240),
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[300],
  margin: "1vh",

  [theme.breakpoints.down("lg")]: {
    minWidth: theme.typography.pxToRem(180),
    maxWidth: theme.typography.pxToRem(200),
    minHeight: theme.typography.pxToRem(190),
    maxHeight: theme.typography.pxToRem(200),
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: theme.typography.pxToRem(130),
    maxWidth: theme.typography.pxToRem(130),
    minHeight: theme.typography.pxToRem(130),
    maxHeight: theme.typography.pxToRem(130),
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
  width: "100%",
  marginTop: theme.spacing(1),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

const TypographyContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.pxToRem(16),
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

const PriceTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  color: theme.palette.text.secondary,

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.pxToRem(14),
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(12),
  },
}));

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

        <CardContent style={{ textAlign: "center", width: "100%" }}>
          <TypographyContainer>
            <StyledTypography variant="body1" color="primary">
              {item?.product_details?.product_name || "No Name"}
            </StyledTypography>
            <PriceTypography variant="subtitle1">
              ₹{item?.product_details?.product_price_inr || "N/A"}
            </PriceTypography>
          </TypographyContainer>

          <ButtonContainer>
            {type === "Product" ? (
              <WishListButton item={item} />
            ) : (
              <>
                <CartBtn />
                <DeleteBtn item={item} />
              </>
            )}
          </ButtonContainer>
        </CardContent>
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
