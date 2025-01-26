import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, Typography, Avatar, Grid, Rating } from "@mui/material";

// Styled Components
const ReviewContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
}));

const ReviewCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200], // Grey-colored card
  width: "100%",
  maxWidth: 600,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  backgroundColor: theme.palette.grey[400], // Grey tint for avatar
}));

const UserInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: theme.spacing(2),
}));

const ReviewText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.grey[700], // Darker grey for text
}));

const RatingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(2),
}));

const ReviewComponent = () => {
  return (
    <ReviewContainer>
      <ReviewCard>
        <Grid container alignItems="center">
          <Grid item>
            <UserAvatar alt="User">U</UserAvatar>
          </Grid>
          <Grid item>
            <UserInfo>
              <Typography variant="subtitle1" fontWeight="bold">
                John Doe
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Verified Buyer
              </Typography>
            </UserInfo>
          </Grid>
        </Grid>

        <ReviewText variant="body2">
          "This product exceeded my expectations! The quality is amazing, and the customer
          service was top-notch. Highly recommended!"
        </ReviewText>

        <RatingBox>
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
          <Typography variant="caption" color="textSecondary">
            2 days ago
          </Typography>
        </RatingBox>
      </ReviewCard>
    </ReviewContainer>
  );
};

export default ReviewComponent;