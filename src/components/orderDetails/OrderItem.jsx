import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Divider,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import { LocalShipping, ShoppingBag, Info } from "@mui/icons-material";

// Styled Components
const ItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start", // Align items to the top
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  transition: "box-shadow 0.3s",
  "&:hover": {
    boxShadow: theme.shadows[4],
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  marginRight: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  flexShrink: 0, // Prevent the image from shrinking
}));

const OrderItem = ({ product }) => {
  return (
    <ItemContainer>
      {/* Product Image */}
      <StyledAvatar src={product.image} variant="rounded" />

      {/* Product Details */}
      <Box flex={1}>
        <Grid container spacing={2}>
          {/* Product Name and Status */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" fontWeight={600}>
              {product.name}
            </Typography>
            <Chip
              label={product.status}
              size="small"
              color={
                product.status === "Delivered"
                  ? "success"
                  : product.status === "In Transit"
                  ? "warning"
                  : "default"
              }
              sx={{ mt: 1 }}
            />
          </Grid>

          {/* Price and Quantity */}
          <Grid item xs={12} md={3}>
            <Typography variant="body2" color="text.secondary">
              ₹{product.price} x {product.qty}
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 1 }}>
              Total: ₹{product.price * product.qty}
            </Typography>
          </Grid>

          {/* Actions */}
          <Grid item xs={12} md={3}>
            <Box
              display="flex"
              gap={1}
              flexWrap="wrap"
              justifyContent="flex-end" // Align buttons to the right
            >
              <Button
                variant="outlined"
                startIcon={<Info />}
                size="small"
                sx={{ textTransform: "none", borderRadius: 2 }}
              >
                Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ShoppingBag />}
                size="small"
                sx={{ textTransform: "none", borderRadius: 2 }}
              >
                Reorder
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Delivery Information */}
        <Box display="flex" alignItems="center" gap={1}>
          <LocalShipping fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            Estimated Delivery: {product.deliveryDate}
          </Typography>
        </Box>
      </Box>
    </ItemContainer>
  );
};

export default OrderItem;