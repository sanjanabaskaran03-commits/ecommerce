import React from 'react';
import { Paper, Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Create a motion version of the MUI Paper component
const MotionPaper = motion(Paper);

const RecommendedCard = ({ img, price, description }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <MotionPaper
      // ANIMATION CONFIGURATION
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ 
        y: -5, 
        transition: { duration: 0.2 } 
      }}
      
      variant="outlined"
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '6px',
        bgcolor: 'background.paper',
        transition: '0.3s',
        cursor: 'pointer',
        '&:hover': { 
          boxShadow: theme.shadows[4], // Increased shadow for a better hover effect
          borderColor: '#8a8888'// Subtle border highlight
        }
      }}
    >
      <Box 
        sx={{ 
          width: "185px",
          height: '180px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          mb: 2 
        }}
      >
        <Box 
          component={motion.img} // Animated image
          whileHover={{ scale: 1.08 }}
          src={img} 
          sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
        />
      </Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary', textAlign: "left" }}>
        ${price}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, lineHeight: 1.4, textAlign: "left", width: "140px" }}>
        {description}
      </Typography>
    </MotionPaper>
  );
};

export default RecommendedCard;