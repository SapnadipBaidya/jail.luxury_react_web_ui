import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  maxWidth: 500,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: 'center',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function HeroSection() {
  return (
    <Root>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Welcome to Hero Section
          </Typography>
          <Typography variant="body2">
            Build beautiful UIs faster with Material-UI.
          </Typography>
        </CardContent>
        <CardActions>
          <StyledButton variant="contained">Get Started</StyledButton>
          <StyledButton variant="outlined">Learn More</StyledButton>
        </CardActions>
      </StyledCard>
    </Root>
  );
}

export default HeroSection;