import React, { useState, useRef } from 'react';
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
  cursor: 'grab',
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

const ProductInfo = styled(Box)(({ theme }) => ({
  padding: '4px 8px',
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.5)',
  color: theme.palette.common.white,
  borderRadius: '0 0 8px 8px',
  fontSize: '0.85rem',
}));

const products = [
  { id: 1, name: 'Product 1', price: '$19.99', imageUrl: 'https://via.https://i0.wp.com/jail.luxury/wp-content/uploads/2024/09/5555.png' }
  
];


function RecommandationCard() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = (e) => {
    e.preventDefault();
    isDragging.current = false;
    scrollContainerRef.current.style.cursor = 'grab';
  };

  return (
    <Root>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Recommended Products
      </Typography>
      <ScrollableContainer
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {products.map((product) => (
          <StyledCard key={product.id}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: '100%',
                height: '60%',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0',
              }}
            />
            <ProductInfo>
              <Typography variant="subtitle1" noWrap>
                {product.name}
              </Typography>
              <Typography variant="subtitle2">
                {product.price}
              </Typography>
            </ProductInfo>
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
