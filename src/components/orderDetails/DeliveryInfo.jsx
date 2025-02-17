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
import { LocationOn, LocalShipping, Edit, CheckCircle } from "@mui/icons-material";

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

const DeliveryInfo = () => {
  return (
    <StyledCard>
      {/* Header with Delivery Status */}
      <HeaderBox>
        <LocalShipping fontSize="large" />
        <Typography variant="h6" fontWeight={600}>
          On the Way
        </Typography>
        <Typography variant="body2">Your order is out for delivery</Typography>
      </HeaderBox>

      <CardContent>
        {/* Delivery Details */}
        <Typography variant="h6" gutterBottom>
          Delivery Information
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          {/* Address */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ bgcolor: "background.default", width: 30, height: 30 }}>
                <LocationOn fontSize="small" color="primary" />
              </Avatar>
              <Box>
                <Typography variant="body1">John Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Main Street, City, 560001
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Estimated Delivery Date */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ bgcolor: "background.default", width: 30, height: 30 }}>
                <CheckCircle fontSize="small" color="primary" />
              </Avatar>
              <Typography variant="body2" color="text.secondary">
                Estimated Delivery: Feb 25, 2025
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Call-to-Action Buttons */}
        <Box mt={3} display="flex" gap={2} flexWrap="wrap">
          <Button
            variant="outlined"
            startIcon={<Edit />}
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Edit Address
          </Button>
          <Button
            variant="contained"
            startIcon={<LocalShipping />}
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Track Delivery
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default DeliveryInfo;