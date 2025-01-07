import React from 'react';
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';



const BestSellerComp = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
    border:"solid 2px red",
    height:"45vh",
    width:"90vh"
  }));


function BestSellerCard({title}) {
  return (
    <BestSellerComp  key={"/items"}
    variant="body1"
    component={Link}
    to={"/items"}>
     <h2>{title}</h2>

    </BestSellerComp>
  );
}

export default BestSellerCard;
