import React from 'react';
import { styled } from '@mui/system';
import { Button, useTheme } from '@mui/material';

function GenericBtns({ type , btnText , defaultText="default"}) {
  const theme = useTheme();

  const renderButtonByType = () => {
    switch (type) {
      case 'primary':
        return (
          <StyledButton variant="contained" color="primary">
            {btnText}
          </StyledButton>
        );
      case 'secondary':
        return (
          <StyledButton variant="outlined" color="secondary">
            {btnText}
          </StyledButton>
        );
      case 'error':
        return (
          <StyledButton variant="text" color="error">
           {btnText}
          </StyledButton>
        );
      default:
        return (
          <StyledButton variant="contained" color="primary">
            Default
          </StyledButton>
        );
    }
  };

  return <ButtonContainer>{renderButtonByType()}</ButtonContainer>;
}

export default GenericBtns;

// Styled Components
const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontSize: theme.typography.pxToRem(14),
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: 'none', // Disable uppercase transformation
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  transition: 'all 0.3s ease',

  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'scale(1.05)',
  },

  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },

  '&.MuiButton-outlined': {
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  },

  '&.MuiButton-text': {
    color: theme.palette.error.main,
  },
}));