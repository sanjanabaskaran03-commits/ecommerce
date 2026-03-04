import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const regions = [
  { name: 'Arabic Emirates', url: 'shopname.ae', img: '/images/homepage/regions/uae.png' },
  { name: 'Australia', url: 'shopname.ae', img: '/images/homepage/regions/australia.png' },
  { name: 'United States', url: 'shopname.ae', img: '/images/homepage/regions/us.png' },
  { name: 'Russia', url: 'shopname.ru', img: '/images/homepage/regions/russia.png' },
  { name: 'Italy', url: 'shopname.it', img: '/images/homepage/regions/italy.png' },
  { name: 'Denmark', url: 'denmark.com.dk', img: '/images/homepage/regions/denmark.png' },
  { name: 'France', url: 'shopname.com.fr', img: '/images/homepage/regions/france.png' },
  { name: 'Arabic Emirates', url: 'shopname.ae', img: '/images/homepage/regions/uae.png' },
  { name: 'China', url: 'shopname.ae', img: '/images/homepage/regions/china.png' }, // Fixed typo in path
  { name: 'Great Britain', url: 'shopname.co.uk', img: '/images/homepage/regions/britain.png' },
];

const SuppliersByRegion = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '85%', margin: '0 auto', py: 6 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 4,
          textAlign: 'left',
          color: 'text.primary',
        }}
      >
        Suppliers by region
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: 2,
          columnGap: 1,
          justifyContent: 'space-between',
        }}
      >
        {regions.map((region, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              // FIXED: Changed from 'center' to 'flex-start' to move flag up
              alignItems: 'flex-start', 
              width: {
                xs: '100%',     
                sm: '48%',      
                md: '19%',      
              },
              mb: 1,
            }}
          >
            {/* FLAG IMAGE */}
            <Box
              component="img"
              src={region.img} 
              alt={region.name}
              sx={{
                width: 28,
                height: 20,
                borderRadius: '2px',
                objectFit: 'cover',
                mr: 1.5,
                // ADDED: Small margin top to align perfectly with the first line of text
                mt: 0.3, 
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 0 2px rgba(255,255,255,0.3)' 
                  : '0 0 2px rgba(0,0,0,0.1)',
              }}
            />

            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'text.primary',
                  lineHeight: 1.2,
                  textAlign: "left"
                }}
              >
                {region.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '13px', // Slightly smaller for better hierarchy
                  color: 'text.secondary',
                  display: 'block',
                  textAlign: "left",
                  mt: 0.2 // Tiny gap between name and URL
                }}
              >
                {region.url}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SuppliersByRegion;