import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import CategoryCard from './CategoryCard';

const CategorySection = ({ title, bannerImg, items }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 ,mt:3}}>
      <Paper variant="outlined" sx={{ width: '87%', display: 'flex', borderRadius: '8px', overflow: 'hidden' }}>
        
        <Box sx={{
          width: '280px',
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          p: 3,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, maxWidth: '160px',textAlign:"left",color: '#000' }}>
            {title}
          </Typography>
          <Button variant="contained" sx={{ bgcolor: '#fff', color: '#000', width: 'fit-content', textTransform: 'none' }}>
            Source now
          </Button>
        </Box>

        <Box sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
        }}>
          {items.map((item, index) => (
            <CategoryCard 
              key={index} 
              title={item.title} 
              price={item.price} 
              img={item.img} 
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default CategorySection;