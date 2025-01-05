import React from 'react';
import HeroSection from '../sections/HeroSection';
import CatagoryComponent from './../components/catagoryComponentContainer/CatagoryComponent';
import { styled } from '@mui/material/styles';
import BestSellerComponent from './../components/bestSellerContainer/bestSellerComponent';
import Footer from './Footer';


const HomeContainer = styled("div")(({ theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));



function HomePage() {
  return (
    <HomeContainer>
      <HeroSection/>
      <CatagoryComponent/>
      <BestSellerComponent/>
      <Footer/>
    </HomeContainer>
  );
}

export default HomePage;
