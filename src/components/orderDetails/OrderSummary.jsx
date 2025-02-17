import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import OrderItem from "./OrderItem";
import { Receipt, LocalShipping } from "@mui/icons-material";

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  overflow: "hidden",
  marginBottom: theme.spacing(3),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
  textAlign: "center",
}));

const OrderSummary = ({ products }) => {
  // Calculate total price
  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );

  return (
    <StyledCard>
      {/* Header with Order Status */}
      <HeaderBox>
        <Typography variant="h6" fontWeight={600}>
          Order Placed
        </Typography>
        <Typography variant="body2">Thank you for your purchase!</Typography>
      </HeaderBox>

      <CardContent>
        {/* Order Items */}
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {products.map((product) => (
          <React.Fragment key={product.id}>
            <OrderItem product={product} />
            <Divider sx={{ my: 2 }} />
          </React.Fragment>
        ))}

        {/* Total Price Section */}
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight={600}>
                Total Price:
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="body1" fontWeight={600}>
                ₹{totalPrice}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Call-to-Action Buttons */}
        <Box mt={3} display="flex" gap={2} flexWrap="wrap">
          <Button
            variant="outlined"
            startIcon={<Receipt />}
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Download Invoice
          </Button>
          <Button
            variant="contained"
            startIcon={<LocalShipping />}
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Track Order
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default OrderSummary;