import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Box,
  Grid,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  LocalShipping,
  CreditCard,
  CheckCircle,
  Receipt,
} from "@mui/icons-material";

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  overflow: "hidden",
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
  textAlign: "center",
}));

const PaymentDetails = () => {
  return (
    <StyledCard>
      {/* Header with Payment Status */}
      <HeaderBox>
        <CheckCircle fontSize="large" />
        <Typography variant="h6" fontWeight={600}>
          Payment Successful
        </Typography>
        <Typography variant="body2">Thank you for your purchase!</Typography>
      </HeaderBox>

      <CardContent>
        {/* Payment Details */}
        <Typography variant="h6" gutterBottom>
          Payment Details
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          {/* Subtotal */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ bgcolor: "background.default", width: 30, height: 30 }}>
                <Receipt fontSize="small" color="primary" />
              </Avatar>
              <Typography variant="body1">Subtotal: ₹16,998</Typography>
            </Box>
          </Grid>

          {/* Delivery Charges */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ bgcolor: "background.default", width: 30, height: 30 }}>
                <LocalShipping fontSize="small" color="primary" />
              </Avatar>
              <Typography variant="body1">Delivery Charges: ₹50</Typography>
            </Box>
          </Grid>

          {/* Total Amount */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ bgcolor: "primary.main", width: 30, height: 30 }}>
                <Typography variant="body2" color="common.white">
                  ₹
                </Typography>
              </Avatar>
              <Typography variant="h6" fontWeight={600}>
                Total: ₹17,048
              </Typography>
            </Box>
          </Grid>

          {/* Payment Method */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ bgcolor: "background.default", width: 30, height: 30 }}>
                <CreditCard fontSize="small" color="primary" />
              </Avatar>
              <Typography variant="body2" color="text.secondary">
                Paid via Credit Card
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Call-to-Action Button */}
        <Box mt={3} textAlign="center">
          <Button
            variant="contained"
            startIcon={<Receipt />}
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Download Invoice
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default PaymentDetails;