import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  padding: '2rem',
  marginTop: '2rem',
  width: '100%',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#FFFFFF',
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialIcons = styled(IconButton)(({ theme }) => ({
  color: '#FFFFFF',
  marginRight: theme.spacing(1),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={4} justifyContent="center">
        {/* Need Help Section */}
        <Grid item xs={12} sm={4}>
          <SectionTitle variant="h6">Need Help</SectionTitle>
          <Box>
            <FooterLink href="#">Terms and Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Returns and Refunds Policy</FooterLink>
            <FooterLink href="#">Shipping Policy</FooterLink>
            <FooterLink href="#">Cancellation Policy</FooterLink>
          </Box>
          <Box mt={2}>
            <SocialIcons>
              <FacebookIcon />
            </SocialIcons>
            <SocialIcons>
              <InstagramIcon />
            </SocialIcons>
            <SocialIcons>
              <TwitterIcon />
            </SocialIcons>
            <SocialIcons>
              <LinkedInIcon />
            </SocialIcons>
            <SocialIcons>
              <PinterestIcon />
            </SocialIcons>
          </Box>
        </Grid>

        {/* Company Section */}
        <Grid item xs={12} sm={4}>
          <SectionTitle variant="h6">Company</SectionTitle>
          <Box>
            <FooterLink href="#">About Jail</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Franchise</FooterLink>
            <FooterLink href="#">Blogs</FooterLink>
          </Box>
        </Grid>

        {/* Location Section */}
        <Grid item xs={12} sm={4}>
          <SectionTitle variant="h6">Location</SectionTitle>
          <Typography variant="body2">support@jail.luxury</Typography>
          <Typography variant="body2">3633 Prabhash Complex | Mukundopur</Typography>
          <Typography variant="body2">Bhagwanpur – 24 South Pargana / Kolkata 700150</Typography>
          <Typography variant="body2">India</Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2">
          Copyright © 2025 Jail Luxury. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
