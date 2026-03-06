import React from 'react';
import { Box, Typography } from '@mui/material'; // Added Typography import since it's used in your JSX
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const sampleData = [
  { id: 1, title: 'Apple iPhone 14 Pro', price: '998.00', rating: 5, orders: 154, description: 'Plastic cover, Super power', img: '/images/listviewpage/mobile.png' },
  { id: 2, title: 'Samsung Galaxy S23 Ultra', price: '998.00', rating: 4, orders: 154, description: 'Metallic body, 8GB Ram, Large Memory ', img: '/images/listviewpage/mobile2.png' },
  { id: 3, title: 'Poco X5 Pro 5G', price: '998.00', rating: 3, orders: 154, description: 'Metallic finish, 8GB Ram', img: '/images/listviewpage/tab.png' },
  { id: 4, title: 'Canon Camera EOS 2000', price: '998.00', rating: 2, orders: 154, description: 'Electronics, Modern tech', img: '/images/listviewpage/laptop.png' },
  { id: 5, title: 'Huawei Watch GT 3', price: '998.00', rating: 4, orders: 154, description: 'Smartphones Accessory', img: '/images/listviewpage/watch.png' },
  { id: 6, title: 'Lenovo Legion Headset', price: '998.00', rating: 4.5, orders: 154, description: 'Modern tech, Gaming', img: '/images/listviewpage/headphone.png' }
];

const ProductList = ({ activeFilters }) => {
  const navigate = useNavigate();

  // LOGIC: Filter the list
  const filteredProducts = sampleData.filter((product) => {
    if (activeFilters.length === 0) return true; // Show all if no filters

    return activeFilters.some((filter) => {
      const isRatingFilter = filter.includes("star");
      if (isRatingFilter) {
        const starValue = parseInt(filter);
        return Math.floor(product.rating) === starValue;
      }
      
      const searchStr = filter.toLowerCase();
      return (
        product.title.toLowerCase().includes(searchStr) || 
        product.description.toLowerCase().includes(searchStr)
      );
    });
  });

  const handleProductClick = (id) => {
    // Navigates to the detail page using the product ID
    navigate(`/detail/${id}`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {filteredProducts.map(item => (
        <Box 
          key={item.id} 
          onClick={() => handleProductClick(item.id)}
          sx={{ cursor: 'pointer' }} // Makes it clear the item is clickable
        >
          <ProductCard product={item} />
        </Box>
      ))}
      
      {filteredProducts.length === 0 && (
        <Typography sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
          No products match the selected filters.
        </Typography>
      )}
    </Box>
  );
};

export default ProductList;