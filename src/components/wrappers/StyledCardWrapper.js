import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// ✅ Fully Responsive Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(0),
  boxShadow: theme.shadows[4],
  borderRadius: theme.typography.pxToRem(10),
  transition: 'transform 0.3s ease',
  border: "solid 2px red",

  // ✅ Desktop/iPad Pro
  minWidth: theme.typography.pxToRem(300),
  maxWidth: theme.typography.pxToRem(300),
  minHeight: theme.typography.pxToRem(400),
  maxHeight: theme.typography.pxToRem(400),

  // ✅ Tablet View
  [theme.breakpoints.down('lg')]: {
    minWidth: theme.typography.pxToRem(220),
    maxWidth: theme.typography.pxToRem(260),
    minHeight: theme.typography.pxToRem(350),
    maxHeight: theme.typography.pxToRem(350),
    padding: theme.spacing(1),
  },

  // ✅ Mobile View
  [theme.breakpoints.down('sm')]: {
    minWidth: theme.typography.pxToRem(150),
    maxWidth: theme.typography.pxToRem(170),
    minHeight: theme.typography.pxToRem(200),
    maxHeight: theme.typography.pxToRem(250),
    padding: theme.spacing(0.5),
  },

  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// ✅ Product Image Styles
const ProductImage = styled('img')(({ theme }) => ({
  minWidth: theme.typography.pxToRem(220),
  maxWidth: theme.typography.pxToRem(220),
  minHeight: theme.typography.pxToRem(220),
  maxHeight: theme.typography.pxToRem(220),
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[300],

  [theme.breakpoints.down('lg')]: {
    minWidth: theme.typography.pxToRem(180),
    maxWidth: theme.typography.pxToRem(180),
    minHeight: theme.typography.pxToRem(180),
    maxHeight: theme.typography.pxToRem(180),
  },

  [theme.breakpoints.down('sm')]: {
    minWidth: theme.typography.pxToRem(130),
    maxWidth: theme.typography.pxToRem(130),
    minHeight: theme.typography.pxToRem(130),
    maxHeight: theme.typography.pxToRem(130),
  },
}));

// ✅ Button Wrapper
const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  width: '100%',
  marginTop: theme.spacing(1),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

// ✅ Button Styles
const ButtonComp = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  width: '100%',
  padding: theme.typography.pxToRem(8), // Converted to pxToRem
  fontSize: theme.typography.pxToRem(16), // Default font size

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.typography.pxToRem(14),
    minWidth: theme.typography.pxToRem(80),
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(12),
    padding: theme.typography.pxToRem(6),
    minWidth: theme.typography.pxToRem(70),
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
  fontSize: theme.typography.pxToRem(18), // Default size

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.typography.pxToRem(16),
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

// ✅ Product Price
const PriceTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.typography.pxToRem(14),
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(12),
  },
}));

function StyledCardWrapper() {
  return (
    <StyledCard>
      <ProductImage src={"product.image"} alt={"Product Image"} />
      <CardContent style={{ textAlign: 'center', width: '100%' }}>
        <TypographyContainer>
          <StyledTypography variant="body1" color="primary">
            {"Product name"}
          </StyledTypography>
          <PriceTypography variant="subtitle1">
            {"Product price"}
          </PriceTypography>
        </TypographyContainer>
        <ButtonContainer>
          <ButtonComp variant="outlined" fullWidth color="primary">
            <AddShoppingCartIcon />
          </ButtonComp>
          <ButtonComp variant="outlined" color="error" fullWidth>
            <DeleteForeverIcon />
          </ButtonComp>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
}

export default StyledCardWrapper;