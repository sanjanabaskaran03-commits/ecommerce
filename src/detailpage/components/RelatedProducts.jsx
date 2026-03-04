import React from 'react';
import {
  Box, Typography, Stack, useTheme
} from '@mui/material';

const RelatedProducts = () => {
  const theme = useTheme();
  
  // Define missing variables
  const isDark = theme.palette.mode === 'dark';
  const borderColor = theme.palette.divider;

  const productsArray = [
    { id: 1, title: 'Wallet', price: '$32.00-$40.00', img: '/images/homepage/recommended_items/wallet.png' },
    { id: 2, title: 'Smart watch', price: '$32.00-$40.00', img: '/images/homepage/deals/watch.png' },
    { id: 3, title: 'Headphone', price: '$32.00-$40.00', img: '/images/homepage/recommended_items/headphone.png' },
    { id: 4, title: 'Poco X5 Pro 5G', price: '$32.00-$40.00', img: '/images/homepage/categories/tab.png' },
    { id: 5, title: 'Canon Camera', price: '$32.00-$40.00', img: '/images/homepage/deals/camera.png' },
    { id: 6, title: "Huawei Watch ", price: '$32.00-$40.00', img: '/images/homepage/deals/phone.png' }
  ];

  return (
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
        Related products
      </Typography>

      {/* Main Container for items */}
      <Stack 
        direction="row" 
        flexWrap="wrap" 
        gap={3} 
        sx={{ justifyContent: 'space-between' }}
      >
        {productsArray.map((item) => (
          <Stack 
            key={item.id} 
            direction="row"
            flexDirection='column' 
            spacing={2} 
            alignItems="center"
            justifyContent="flex-start"
            sx={{  flex: '1 1 auto'}}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: 120,
                height: 120,
                borderRadius: '4px',
                border: '1px solid',
                borderColor: borderColor,
                p: 0.5,
                objectFit: 'contain',
                bgcolor: isDark ? 'white' : 'transparent' ,
              }}
            />
            <Box>
              <Typography sx={{ color: 'text.primary', fontWeight: 400, lineHeight: 1.2, fontSize: "14px", textAlign: 'left' ,mt:2}}>
                {item.title} {/* Changed from item.name to item.title to match your data */}
              </Typography>
              <Typography sx={{ color: '#8B96A5', mt: 0.5, display: 'block', textAlign: "left", fontSize: "14px" }}>
                {item.price}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default RelatedProducts;