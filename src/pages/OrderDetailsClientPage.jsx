import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import OrderSummary from "../components/orderDetails/OrderSummary";
import PaymentDetails from "../components/orderDetails/PaymentDetails";
import DeliveryInfo from "../components/orderDetails/DeliveryInfo";

// Styled Components
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const PageHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    qty: 1,
    image: "https://via.placeholder.com/80",
    status: "Delivered",
    deliveryDate: "Feb 25, 2025",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 14999,
    qty: 1,
    image: "https://via.placeholder.com/80",
    status: "In Transit",
    deliveryDate: "Feb 28, 2025",
  },
];

const OrderDetailsClientPage = () => {
  return (
    <StyledContainer maxWidth="md">
      {/* Page Header */}
      <PageHeader>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Order Details
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Order ID: #123456
        </Typography>
      </PageHeader>

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Left Column: Order Summary and Delivery Info */}
        <Grid item xs={12} md={8}>
          <OrderSummary products={products} />
          <Box mt={3}>
            <DeliveryInfo />
          </Box>
        </Grid>

        {/* Right Column: Payment Details */}
        <Grid item xs={12} md={4}>
          <PaymentDetails />
        </Grid>
      </Grid>

      {/* Footer */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Need help? Contact our{" "}
          <Typography
            component="span"
            variant="body2"
            color="primary"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            customer support
          </Typography>
          .
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          View our{" "}
          <Typography
            component="span"
            variant="body2"
            color="primary"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            return policy
          </Typography>
          .
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default OrderDetailsClientPage;