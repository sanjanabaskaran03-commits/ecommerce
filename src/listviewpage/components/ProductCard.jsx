import React, { useState } from 'react';
import { Box, Card, Typography, Stack, Button, IconButton, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion'; // 1. Added missing import

// 2. Use motion.create for custom/MUI components
const MotionCard = motion.create(Card);

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  if (!product) return null;

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400); 
  };

  return (
    <MotionCard // 3. Changed from Card to MotionCard
      variant="outlined"
      // 4. Framer Motion Props for smoother animation
      whileHover={{ y: -5 }} 
      animate={animate ? { scale: 1.02, rotate: 0.5 } : { scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      sx={{ 
        mb: 2, p: 2, 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, md: 3 }, 
        borderRadius: '6px',
        bgcolor: 'background.paper',
        borderColor: 'divider',
        boxShadow: 'none',
        position: 'relative',
        zIndex: animate ? 2 : 1,
      }}
    >
      {/* IMAGE SECTION */}
      <Box 
        sx={{ 
          width: { xs: '100%', sm: 180 }, height: 180, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          transition: 'transform 0.4s ease',
          transform: animate ? 'rotate(-5deg) scale(1.1)' : 'rotate(0deg)'
        }}
      >
        <Box 
          component="img" 
          src={product.img} 
          sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
        />
      </Box>
      
      {/* CONTENT SECTION */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ width: '100%' }}>
          <Typography 
            sx={{ fontWeight: 500, color: 'text.primary', fontSize: '16px', lineHeight: 1.4, cursor: 'pointer', '&:hover': { color: '#0D6EFD' } }}
          >
            {product.title}
          </Typography>

          {/* --- WISHLIST BUTTON --- */}
          <IconButton 
            size="small" 
            onClick={handleWishlistClick}
            sx={{ 
              border: isWishlisted ? 'none' : '1px solid',
              borderColor: isDark ? '#30363D' : '#DEE2E7', 
              borderRadius: '6px',
              color: isWishlisted ? '#fff' : '#0D6EFD',
              bgcolor: isWishlisted ? '#0D6EFD' : 'transparent',
              ml: 1,
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: isWishlisted ? '#0056b3' : 'rgba(13, 110, 253, 0.08)',
              }
            }}
          >
            {isWishlisted ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
          </IconButton>
        </Stack>

        {/* PRICE & RATING */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
          <Typography sx={{ fontWeight: 600, fontSize: '20px', color: 'text.primary' }}>${product.price}</Typography>
          {product.oldPrice && (
            <Typography sx={{ textDecoration: 'line-through', color: 'text.secondary', fontSize: '16px' }}>${product.oldPrice}</Typography>
          )}
        </Stack>
        
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
          <Rating value={Number(product.rating)} readOnly precision={0.1} size="small" sx={{ color: '#FF9017' }} />
          <Typography variant="body2" sx={{ color: '#FF9017' }}>{product.rating}</Typography>
          <Typography variant="body2" sx={{ color: 'divider' }}>•</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.orders} orders</Typography>
          <Typography variant="body2" sx={{ color: 'divider' }}>•</Typography>
          <Typography variant="body2" sx={{ color: '#00B517' }}>Free Shipping</Typography>
        </Stack>

        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary', 
            mt: 1, mb: 1, 
            width: {md: "480px"}, 
            textAlign: 'left', 
            display: '-webkit-box', 
            WebkitLineClamp: 2, 
            WebkitBoxOrient: 'vertical', 
            overflow: 'hidden' 
          }}
        >
          {product.description}
        </Typography>

        <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600, p: 0, color: '#0D6EFD', fontSize: '16px', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
          View details
        </Button>
      </Box>
    </MotionCard>
  );
};

export default ProductCard;