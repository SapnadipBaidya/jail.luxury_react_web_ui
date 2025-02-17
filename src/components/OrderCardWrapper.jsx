import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
  Divider,
  useTheme,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  LocalShipping,
  AssignmentReturn,
  VerifiedUser,
  Payment,
} from "@mui/icons-material";

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  boxShadow: theme.shadows[2],
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  
  transition: "transform 0.2s, box-shadow 0.2s",
  margin:"5vh 5vw 5vh 5vw",
  
}));

const OrderCardWrapper = ({ order }) => {
  const theme = useTheme();

  // Dynamic button color based on action type
  const getButtonColor = (action) => {
    switch (action) {
      case "CANCEL":
        return "error";
      case "RATE AND REVIEW":
        return "primary";
      case "EXCHANGE / RETURN":
        return "warning";
      default:
        return "primary";
    }
  };

  return (
    <StyledCard>
      <CardContent>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip
            label={order.status}
            color={
              order.status === "DELIVERED"
                ? "success"
                : order.status === "IN TRANSIT"
                ? "info"
                : "default"
            }
            size="small"
            sx={{ fontWeight: 600 }}
          />
          <Box display="flex" alignItems="center" gap={1}>
            <LocalShipping fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              Delivered by {order.deliveryDate}
            </Typography>
          </Box>
        </Box>

        {/* Product Details Section */}
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <Avatar
            src={order.product.image}
            alt={order.product.name}
            variant="rounded"
            sx={{
              width: 104,
              height: 104,
              border: `1px solid ${theme.palette.divider}`,
            }}
          />
          <Box>
            <Typography color="text.primary" fontWeight={500}>
              {order.product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Size: {order.product.size}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quantity: {order.product.quantity}
            </Typography>
          </Box>
        </Box>

        {/* Warranty Section */}
        {order.warranty && (
          <Box display="flex" alignItems="center" gap={1} mt={2}>
            <VerifiedUser fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              Warranty till {order.warranty}
            </Typography>
          </Box>
        )}

        {/* Exchange/Return Section */}
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <AssignmentReturn fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            Exchange/Return window: {order.exchangeWindow}
          </Typography>
        </Box>

        {/* Payment Method Section */}
        {order.paymentMethod && (
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <Payment fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              Payment Method: {order.paymentMethod}
            </Typography>
          </Box>
        )}

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Action Buttons Section */}
        <Box display="flex" gap={1} mt={2} flexWrap="wrap">
          {order.actions.map((action, index) => (
            <Button
              key={index}
              variant="contained"
              size="small"
              color={getButtonColor(action)}
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                fontWeight: 500,
              }}
            >
              {action}
            </Button>
          ))}
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default OrderCardWrapper;