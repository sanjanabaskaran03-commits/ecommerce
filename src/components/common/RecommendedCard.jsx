import React from 'react';
import { Paper, Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const RecommendedCard = ({ img, price, description }) => {
  const theme = useTheme();

  return (
    <MotionPaper
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
          boxShadow: theme.shadows[4],
          borderColor: '#8a8888'
        }
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 180,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2
        }}
      >
        <Box
          component={motion.img}
          whileHover={{ scale: 1.08 }}
          src={img}
          sx={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          color: 'text.primary',
          textAlign: "left"
        }}
      >
        ${price}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mt: 0.5,
          lineHeight: 1.4,
          textAlign: "left"
        }}
      >
        {description}
      </Typography>
    </MotionPaper>
  );
};

export default RecommendedCard;