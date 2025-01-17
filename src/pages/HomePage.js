import React from 'react';
import HeroSection from '../sections/HeroSection';
import CatagoryComponent from './../components/catagoryComponentContainer/CatagoryComponent';
import { styled } from '@mui/material/styles';
import BestSellerComponent from './../components/bestSellerContainer/bestSellerComponent';
import Footer from './Footer';
import LocalVideoPlayer from './../components/videoPlayers/LocalVideoPlayer';


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
      <LocalVideoPlayer videoSrc="./JailLuxuryPromovid.mp4" desc={<><h1>WHY JAIL ?</h1>
        The name “Jail” is more than just a brand; it’s a nod to our roots. The
        original shop was located on Jail Road in Banka, and the name was born
        out of the simplicity of directions—“Jail Road, Jail Road.” Today, it
        stands as a symbol of our journey, from a small shop in Bihar to a
        luxury brand that resonates with customers around the world.</>}/>
    </HomeContainer>
  );
}

export default HomePage;
