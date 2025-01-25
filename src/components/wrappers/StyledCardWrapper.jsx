import { Button, Card, CardContent, Typography, Box, Fade, Slide } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WishListButton from "../buttons/wishListBtn.jsx";
import DeleteBtn from "../buttons/deleteBtn.jsx";
import CartBtn from "../buttons/cartBtn.jsx";

// ✅ Fully Responsive Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(0),
  boxShadow: theme.shadows[4],
  borderRadius: theme.typography.pxToRem(10),
  transition: "transform 0.3s ease",
  border: "solid 2px red",
  // ✅ Desktop/iPad Pro
  minWidth: theme.typography.pxToRem(200),
  maxWidth: theme.typography.pxToRem(200),
  minHeight: theme.typography.pxToRem(330),
  maxHeight: theme.typography.pxToRem(340),
  "&:hover": {
    transform: "scale(1.1)",
  },

  // ✅ Tablet View
  [theme.breakpoints.down("lg")]: {
    minWidth: theme.typography.pxToRem(220),
    maxWidth: theme.typography.pxToRem(260),
    minHeight: theme.typography.pxToRem(350),
    maxHeight: theme.typography.pxToRem(350),
    padding: theme.spacing(1),
  },

  // ✅ Mobile View
  [theme.breakpoints.down("sm")]: {
    minWidth: theme.typography.pxToRem(150),
    maxWidth: theme.typography.pxToRem(170),
    minHeight: theme.typography.pxToRem(200),
    maxHeight: theme.typography.pxToRem(280),
    padding: theme.spacing(0.5),
  },


}));

// ✅ Product Image Styles
const ProductImage = styled("img")(({ theme }) => ({
  minWidth: theme.typography.pxToRem(100),
  maxWidth: theme.typography.pxToRem(170),
  minHeight: theme.typography.pxToRem(160),
  maxHeight: theme.typography.pxToRem(240),
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[300],
     margin:"1vh",

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

// ✅ Button Wrapper
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

// ✅ Product Name & Price Container
const TypographyContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
});

// ✅ Product Name
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.pxToRem(16),
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

// ✅ Product Price
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
  const mainImgUrl = item?.gallery_details?.gallery?.images[0];
  const navigate = useNavigate(); // For redirection

  // ✅ Add Animation Effects
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // ✅ Component Appears with Fade-in Effect
    return () => setShow(false); // ✅ Component Disappears with Slide-out Effect
  }, []);

  return (
    <Slide direction="up" in={show} mountOnEnter unmountOnExit>
      <StyledCard>
        <Fade in={show} timeout={500}>
          <ProductImage
            src={mainImgUrl}
            alt={"Product Image"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate("/Product");
            }}
          />
        </Fade>

        <CardContent style={{ textAlign: "center", width: "100%" }}>
          <TypographyContainer>
            <StyledTypography variant="body1" color="primary">
              {item?.product_details?.product_name}
            </StyledTypography>
            <PriceTypography variant="subtitle1">
              ₹{item?.product_details?.product_price_inr}
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
}
)

export default StyledCardWrapper;