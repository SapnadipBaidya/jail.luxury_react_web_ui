import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from react-router-dom
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: '#FFFFFF',
  padding: '2rem 2rem 3rem',
  width: '100%',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  textTransform: 'uppercase',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#FFFFFF',
  textDecoration: 'none',
  display: 'block',
  marginBottom: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialIcons = styled(IconButton)(({ theme }) => ({
  color: '#FFFFFF',
  padding: 0,
  marginBottom: theme.spacing(1),
  marginRight: theme.spacing(1.5),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={4} justifyContent="center">
        {/* Help Section */}
        <Grid item xs={12} sm={3}>
          <SectionTitle variant="h6">Help</SectionTitle>
          <FooterLink to="/termcondition">Terms and Conditions</FooterLink>
          <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
          <FooterLink to="/returnrefund">Returns and Refunds Policy</FooterLink>
          <FooterLink to="/shippingpolicy">Shipping Policy</FooterLink>
          <FooterLink to="/cancellationpolicy">Cancellation Policy</FooterLink>
        </Grid>

        {/* Company Section */}
        <Grid item xs={12} sm={2}>
          <SectionTitle variant="h6">Company</SectionTitle>
          <FooterLink to="/aboutus">About Us</FooterLink>
          <FooterLink to="/contactus">Contact Us</FooterLink>
        </Grid>

        {/* Shop Products Section */}
        <Grid item xs={12} sm={3}>
          <SectionTitle variant="h6">Shop Products</SectionTitle>
          <FooterLink to="/shop/bag">Bag</FooterLink>
          <FooterLink to="/shop/belt">Belt</FooterLink>
          <FooterLink to="/shop/duffle-bag">Duffle Bag</FooterLink>
          <FooterLink to="/shop/gloves">Gloves</FooterLink>
          <FooterLink to="/shop/jacket">Jacket</FooterLink>
          <FooterLink to="/shop/shoes">Shoes</FooterLink>
          <FooterLink to="/shop/trolley">Trolley</FooterLink>
          <FooterLink to="/shop/wallet">Wallet</FooterLink>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={2}>
          <SectionTitle variant="h6">Social Media</SectionTitle>
          <Box>
            <SocialIcons href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </SocialIcons>
            <SocialIcons href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </SocialIcons>
            <SocialIcons href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com" target="_blank">
              <LinkedInIcon />
            </SocialIcons>
            <SocialIcons href="https://pinterest.com" target="_blank">
              <PinterestIcon />
            </SocialIcons>
          </Box>
        </Grid>

        {/* Location Section */}
        <Grid item xs={12} sm={2}>
          <SectionTitle variant="h6">Location</SectionTitle>
          <Typography variant="body2">3633 Prabhash Complex | Mukundopur</Typography>
          <Typography variant="body2">Bhagwanpur – 24 South Pargana</Typography>
          <Typography variant="body2">Kolkata 700150</Typography>
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