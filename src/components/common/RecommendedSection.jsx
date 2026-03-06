import React from 'react';
import { Box, Typography } from '@mui/material';
import RecommendedCard from './RecommendedCard';

const RecommendedSection = ({ title, items }) => {
  return (
    <Box sx={{ width: '100%', my: 4 }}>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: 'text.primary',
          textAlign: 'left'
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)'
          },
          gap: 2,
          width: '100%'
        }}
      >
        {items.map((item, index) => (
          <RecommendedCard key={index} {...item} />
        ))}
      </Box>

    </Box>
  );
};

export default RecommendedSection;