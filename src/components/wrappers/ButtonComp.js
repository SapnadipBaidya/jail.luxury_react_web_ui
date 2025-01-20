import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";

// ✅ Wrapper Component
const ButtonWrapper = ({ children, variant = "contained", color = "primary", onClick, disabled = false, ...props }) => {
  const theme = useTheme(); // ✅ Use MUI Theme

  // ✅ Styled Button Component
  const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing(1)};
    width: 100%;
    font-size: ${theme.typography.pxToRem(16)}; // Default font size
    min-height: ${theme.typography.pxToRem(50)};
    max-height: ${theme.typography.pxToRem(55)};

    @media (max-width: ${theme.breakpoints.values.lg}px) {
      font-size: ${theme.typography.pxToRem(14)};
      min-width: ${theme.typography.pxToRem(30)};
      max-width: ${theme.typography.pxToRem(40)};
      min-height: ${theme.typography.pxToRem(25)};
      max-height: ${theme.typography.pxToRem(30)};
      padding: ${theme.spacing(2)};
    }
  `;

  return (
    <StyledButton variant={variant} color={color} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default ButtonWrapper;