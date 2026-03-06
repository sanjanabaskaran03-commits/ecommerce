import React from 'react';
import {
  Box, Typography, Stack, useTheme, Button
} from '@mui/material';
import { useCart } from '../../context/CartContext'; // Adjust path to your context
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LayoutContainer from '../../components/common/LayoutContainer';


const SavedForLater = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart();
  
  const isDark = theme.palette.mode === 'dark';
  const borderColor = theme.palette.divider;

  // Added 'qty' and ensure prices are numbers for calculations
  const productsArray = [
    { id: 4, title: 'Poco X5 Pro 5G', price: 99.50, img: '/images/homepage/categories/tab.png' },
    { id: 10, title: 'Wallet', price: 99.50, img: '/images/listviewpage/mobile3.png' },
    { id: 20, title: 'Smart watch', price: 99.50, img: '/images/homepage/deals/watch.png' },
    { id: 30, title: 'Headphone', price: 99.50, img: '/images/listviewpage/laptop.png' },
  ];

  const handleCartAction = (item) => {
    const isAdded = cartItems.some(cartItem => cartItem.id === item.id);
    if (isAdded) {
      navigate('/cart');
    } else {
      addToCart(item);
    }
  };

  return (
    <LayoutContainer>

    <Box
      sx={{
        p: 3,
        borderRadius: '6px',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: borderColor,
        mt: 3
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'text.primary', textAlign: 'left' }}>
        Saved for later
      </Typography>

      <Stack 
        direction="row" 
        flexWrap="wrap" 
        gap={3} 
        sx={{ justifyContent: 'space-between' }}
      >
        {productsArray.map((item) => {
          // Check if this specific item is in the cart
          const isAdded = cartItems.some(cartItem => cartItem.id === item.id);

          return (
            <Stack 
              key={item.id} 
              direction="column" 
              spacing={1} 
              sx={{ flex: '1 1 220px', maxWidth: 240 }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: '100%',
                  height: 200,
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: borderColor,
                  p: 1.5,
                  objectFit: 'contain',
                  bgcolor: isDark ? '#fff' : 'transparent',
                }}
              />
              <Box sx={{ textAlign: 'left' }}>
                <Typography sx={{ fontWeight: 600, color: 'text.primary', fontSize: "16px", mt: 1 }}>
                  ${Number(item.price).toFixed(2)}
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#8B96A5', 
                    fontSize: "14px", 
                    lineHeight: 1.2, 
                    height: '34px', 
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    mb: 1
                  }}
                >
                  {item.title}
                </Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={isAdded ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
                  onClick={() => handleCartAction(item)}
                  sx={{
                    textTransform: 'none',
                    borderColor: 'divider',
                    color: 'primary.main',
                    fontWeight: 600,
                    '&:focus': { outline: 'none' },
                    '&:hover': {
                      bgcolor: 'rgba(13, 110, 253, 0.04)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  {isAdded ? "Go to cart" : "Move to cart"}
                </Button>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
    </LayoutContainer>
  );
};

export default SavedForLater;