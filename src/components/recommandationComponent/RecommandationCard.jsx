import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { 
  Card, 
  CardActions, 
  Button, 
  Typography, 
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
  height: '43vh',
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  flex: '0 0 auto',
  width: '100%',
  height: '30vh',
  maxWidth: 250,
  borderRadius: "10px",
  boxShadow: theme.shadows[2],
  overflow: 'hidden',
  position: 'relative',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
  '&:hover .hover-content': {
    transform: 'translateY(0)',
  },
}));

const HoverContent = styled(CardActions)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  transition: 'transform 0.4s ease',
  transform: 'translateY(100%)',
}));

const ScrollableContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  overflowX: 'auto',
  padding: theme.spacing(1, 0),
  width: '100%',
  flexWrap: 'nowrap',
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
  }
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(3),
}));

const products = [
  { id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$49.99', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$59.99', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 4', price: '$59.99', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 4', price: '$59.99', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Product 4', price: '$59.99', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Product 4', price: '$59.99', image: 'https://via.placeholder.com/150' }
];

function RecommandationCard() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Root>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Recommanded Products
      </Typography>
      <ScrollableContainer>
        {products.map((product) => (
          <StyledCard key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0',
              }}
            />
            <HoverContent className="hover-content">
              <Button
                variant="contained"
                fullWidth
                size="small"
                onClick={() => setSelectedProduct(product)}
              >
                View Product
              </Button>
            </HoverContent>
          </StyledCard>
        ))}
      </ScrollableContainer>

      {selectedProduct && (
        <Modal open={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
          <ModalContent>
            <IconButton
              onClick={() => setSelectedProduct(null)}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }}
            />
            <Typography variant="h5" gutterBottom>
              {selectedProduct.name}
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

export default RecommandationCard;
