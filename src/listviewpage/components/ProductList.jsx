import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import Apple from '/images/listviewpage/mobile.png'
import Samsung from '/images/listviewpage/mobile2.png' 
import Poco from '/images/listviewpage/tab.png'
import Canon from '/images/listviewpage/laptop.png' 
import Huawei from '/images/listviewpage/watch.png' 
import Lenovo from '/images/listviewpage/headphone.png'  

const sampleData = [
  { id: 1, title: 'Apple iPhone 14 Pro', price: '998.00', rating: 5, orders: 154, description: 'Plastic cover, Super power', img:  Apple},
  { id: 2, title: 'Samsung Galaxy S23 Ultra', price: '998.00', rating: 4, orders: 154, description: 'Metallic body, 8GB Ram, Large Memory ', img: Samsung},
  { id: 3, title: 'Poco X5 Pro 5G', price: '998.00', rating: 3, orders: 154, description: 'Metallic finish, 8GB Ram', img: Poco },
  { id: 4, title: 'Canon Camera EOS 2000', price: '998.00', rating: 2, orders: 154, description: 'Electronics, Modern tech', img: Canon },
  { id: 5, title: 'Huawei Watch GT 3', price: '998.00', rating: 4, orders: 154, description: 'Smartphones Accessory', img: Huawei },
  { id: 6, title: 'Lenovo  Headset', price: '998.00', rating: 4.5, orders: 154, description: 'Modern tech, Gaming', img: Lenovo }
];

const ProductList = ({ activeFilters = [] }) => {
  const navigate = useNavigate();

  // ADVANCED LOGIC: Separate filters by type
  const filteredProducts = sampleData.filter((product) => {
    if (activeFilters.length === 0) return true;

    // Split filters into Ratings and Keywords (Brands/Features/Categories)
    const ratingFilters = activeFilters.filter(f => f.includes("star")).map(f => parseInt(f));
    const textFilters = activeFilters.filter(f => !f.includes("star")).map(f => f.toLowerCase());

    // 1. Check Rating Match (If rating filters exist, product must match one of them)
    const matchesRating = ratingFilters.length > 0 
      ? ratingFilters.some(r => Math.floor(product.rating) === r)
      : true;

    // 2. Check Text Match (Product must match ALL selected text filters to narrow down)
    const matchesText = textFilters.length > 0
      ? textFilters.every(filter => 
          product.title.toLowerCase().includes(filter) || 
          product.description.toLowerCase().includes(filter)
        )
      : true;

    return matchesRating && matchesText;
  });

  const handleProductClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(item => (
          <Box 
            key={item.id} 
            onClick={() => handleProductClick(item.id)}
            sx={{ cursor: 'pointer' }}
          >
            <ProductCard product={item} />
          </Box>
        ))
      ) : (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h6" color="text.primary">
            No items found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your filters to find what you're looking for.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProductList;