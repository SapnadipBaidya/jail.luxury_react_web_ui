import React from 'react';
import { Typography,Box } from '@mui/material';
import BestSellerCard from './bestSellerCard';

function BestSellerComponent() {
    const [value, setValue] = React.useState(0);
  return (
    <div>
    <Typography>OUR BEST SELLERS</Typography>
       
      <BestSellerCard/>
      <BestSellerCard/>
    </div>
  );
}

export default BestSellerComponent;


