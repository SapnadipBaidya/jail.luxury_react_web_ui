import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { 
  Card, 
  CardActions, 
  CardContent, 
  Button, 
  Typography, 
  Grid, 
  Box, 
  Modal, 
  IconButton 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Styled components
const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  padding: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  flex: '0 0 auto',
  width: '100%',
  maxWidth: 300,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const ScrollableContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  overflowX: 'auto',
  padding: theme.spacing(2, 0),
  width: '100%',
  flexWrap: 'nowrap',
  '&::-webkit-scrollbar': {
    height: 6,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
  },
  [theme.breakpoints.up('md')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(4),
    overflowX: 'hidden',
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
}));

// Product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is an amazing product that you’ll love!',
    price: '$19.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'A high-quality item at an affordable price.',
    price: '$29.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'A premium product for discerning customers.',
    price: '$49.99',
    image: 'https://via.placeholder.com/150',
  },
];

function HeroSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Root>
      {/* Hero Section */}
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Welcome to Hero Section
          </Typography>
          <Typography variant="body2">
            Explore our exclusive range of products!
          </Typography>
        </CardContent>
      </StyledCard>

      ``
      <Typography variant="h6" sx={{ margin: 2 }}>
        Our Products
      </Typography>
      <ScrollableContainer>
        {products.map((product) => (
          <StyledCard key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0',
              }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                {product.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleViewProduct(product)}
              >
                View Product
              </Button>
            </CardActions>
          </StyledCard>
        ))}
      </ScrollableContainer>

      
      {selectedProduct && (
        <Modal open={!!selectedProduct} onClose={handleCloseModal}>
          <ModalContent>
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
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
          </ModalContent>
        </Modal>
      )}
    </Root>
  );
}

export default HeroSection;
