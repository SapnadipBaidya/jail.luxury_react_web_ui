import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Pagination,
  Button,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Select,
  MenuItem,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { fetchCategoryById } from '../store/actions/categoryActions';

const ProductWrapper = styled(Box)(({ theme, radius = "8vh" }) => ({
  display: 'flex',
  justifyContent: 'center', // Center children horizontally
  alignItems: 'center',
  minHeight: radius,
  minWidth: radius,
  maxHeight: radius,
  maxWidth: radius,
  overflow: 'hidden', // Optional, to ensure no content overflows
  textDecoration: 'none',
  backgroundColor: theme.palette.primary.main, // Optional: Add a background color for visibility
}));

const StyledCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
  },
});

const products = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: `$${(Math.random() * 100).toFixed(2)}`,
  image: 'https://via.placeholder.com/150',
}));

function ItemsPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchCategoryById(0)
  }, [])
  
 

  const startIndex = (page - 1) * itemsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Filter Sidebar and Product Grid */}
      <Box display="flex" sx={{ paddingLeft: '10vw', paddingRight: '10vw', backgroundColor: '#f5f5f5', height: '105vh' }}>
        {/* Filter Sidebar */}
        <Box
          sx={{
            width: '20%',
            padding: 2,
            borderRight: '1px solid #ccc',
            backgroundColor: '#ffffff',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>

          <Typography variant="subtitle1">Gender</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Male" />
            <FormControlLabel control={<Checkbox />} label="Female" />
          </FormGroup>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Size
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="S" />
            <FormControlLabel control={<Checkbox />} label="M" />
            <FormControlLabel control={<Checkbox />} label="L" />
            <FormControlLabel control={<Checkbox />} label="XL" />
          </FormGroup>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Color
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {['#D32F2F', '#1976D2', '#388E3C', '#FBC02D', '#7B1FA2', '#FF5722'].map((color) => (
              <Box
                key={color}
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: color,
                  borderRadius: '50%',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              />
            ))}
          </Box>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Price
          </Typography>
          <Slider defaultValue={[0, 100]} valueLabelDisplay="auto" min={0} max={1000} />

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Rating
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="4★ and above" />
            <FormControlLabel control={<Checkbox />} label="3★ and above" />
            <FormControlLabel control={<Checkbox />} label="2★ and above" />
            <FormControlLabel control={<Checkbox />} label="1★ and above" />
          </FormGroup>
        </Box>

        {/* Product Grid */}
        <Box sx={{ width: '80%', padding: 2 }}>
          <Box display="flex" justifyContent="space-between" marginBottom={2}>
            <Typography variant="h6">Sort By</Typography>
            <Select value="popularity" variant="outlined">
              <MenuItem value="popularity">Popularity</MenuItem>
              <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="highToLow">Price: High to Low</MenuItem>
            </Select>
          </Box>

          <Grid container spacing={3}>
            {selectedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <StyledCard>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '90px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1">{product.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {product.price}
                    </Typography>
                    <Button variant="outlined" fullWidth>
                      Wishlist
                    </Button>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Box mt={3} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(products.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ItemsPage;