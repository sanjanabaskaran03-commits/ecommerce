import React from 'react';
import { Box, Typography, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Create a motion version of the MUI Box
const MotionBox = motion(Box);

const CategoryCard = ({ title, price, img }) => {
  const theme = useTheme();

  return (
    <MotionBox
      // ANIMATION PROPERTIES
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }} // Very subtle lift
      
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '100%',
        minHeight: '127px',
        borderRight: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: '0.3s',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'action.hover',
        },
      }}
    >
      <Stack spacing={0.5} sx={{ textAlign: 'left' }}>
        <Typography 
          variant="body1" 
          sx={{ fontWeight: 500, color: 'text.primary', fontSize: '14px' }}
        >
          {title}
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ color: "#8B96A5", fontSize: '12px' }}
        >
          From <br />
          USD {price}
        </Typography>
      </Stack>

      <Box
        component={motion.img} // Adding motion to the image specifically
        whileHover={{ scale: 1.1, rotate: 2 }} // Image specific animation
        transition={{ type: "spring", stiffness: 300 }}
        src={img}
        alt={title}
        sx={{
          width: '80px',
          height: '80px',
          objectFit: 'contain',
          alignSelf: 'flex-end',
        }}
      />
    </MotionBox>
  );
};

export default CategoryCard;