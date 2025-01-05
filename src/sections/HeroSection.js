import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Modal, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh', // Adjust height for a larger view
  width: '100vw',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const ImageWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'opacity 0.5s ease-in-out, transform 2s ease-in-out',
  opacity: 0,
  transform: 'scale(1.3)', // Slight zoom-out effect for inactive images
  '&.active': {
    opacity: 1,
    transform: 'scale(1)', // Normal scale for active image
  },
});

const Image = styled('img')(({ theme }) =>({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain', // Maintains natural aspect ratio
  borderRadius: '0.5vh', // Rounded corners for a sleek look
  boxShadow: `0 0 20vh 1vh ${theme.palette.secondary.main}`, // Subtle shadow for depth
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  width: '90%',
  maxWidth: 500,
}));

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'An amazing product you’ll love!',
    price: '$19.99',
    image: 'https://i.etsystatic.com/23404246/r/il/f97bdc/3328937792/il_570xN.3328937792_bwcq.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'A high-quality item at an affordable price.',
    price: '$29.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd7wWa2lGU6jjTCLs9XqZGiW9EDa_16fAAw&s',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'A premium product for discerning customers.',
    price: '$49.99',
    image: 'https://wallpapers.com/images/hd/joker-portrait-4k-ultra-hd-tpwswk8yfmmfencg.jpg',
  },
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleViewProduct = (product) => setSelectedProduct(product);

  const handleCloseModal = () => setSelectedProduct(null);

  return (
    <Root>
      {products.map((product, index) => (
        <ImageWrapper
          key={product.id}
          className={index === currentIndex ? 'active' : ''}
        >
          <Image
            src={product.image}
            alt={product.name}
            onClick={() => handleViewProduct(product)}
          />
        </ImageWrapper>
      ))}

      <Modal open={!!selectedProduct} onClose={handleCloseModal}>
        <ModalContent>
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }}
              />
              <Typography variant="h5" gutterBottom>
                {selectedProduct.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {selectedProduct.description}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                {selectedProduct.price}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                <Button variant="contained" fullWidth>
                  Buy Now
                </Button>
                <Button variant="outlined" fullWidth>
                  Add to Cart
                </Button>
              </Box>
            </>
          )}
        </ModalContent>
      </Modal>
    </Root>
  );
}

export default HeroSection;
