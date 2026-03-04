import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Stack, Rating, Divider,
  Button, useTheme, Fade
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import filled heart

const HeroSection = ({ product }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // 1. Data array
  const productsArray = [
    { id: 1, title: 'Apple iPhone 14 Pro', price: '998.00', rating: 5, reviews: 32, orders: 154, description: 'Plastic cover, Super power', img: 'images/listviewpage/mobile.png' },
    { id: 2, title: 'Samsung Galaxy S23 Ultra', price: '998.00', rating: 4, reviews: 20, orders: 154, description: 'Metallic body, 8GB Ram, Large Memory ', img: 'images/listviewpage/mobile2.png' },
    { id: 3, title: 'Poco X5 Pro 5G', price: '998.00', rating: 3, reviews: 15, orders: 154, description: 'Metallic finish, 8GB Ram', img: 'images/listviewpage/tab.png' },
    { id: 4, title: 'Canon Camera EOS 2000', price: '998.00', rating: 2, reviews: 10, orders: 154, description: 'Electronics, Modern tech', img: 'images/listviewpage/laptop.png' }
  ];

  // Select which product to show
  const activeProduct = product || productsArray[0];

  // 3. States
  const [mainImg, setMainImg] = useState(activeProduct.img);
  const [isSaved, setIsSaved] = useState(false);

  // Update main image if the prop product changes
  useEffect(() => {
    setMainImg(activeProduct.img);
  }, [activeProduct]);

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: '6px',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4
      }}
    >
      {/* 1. LEFT: GALLERY SECTION */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '6px',
            height: 380,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            bgcolor: '#fff',
            overflow: 'hidden'
          }}
        >
          {/* Added key to component to re-trigger animation on src change */}
          <Box
            key={mainImg}
            component="img"
            src={mainImg}
            sx={{
              maxHeight: '100%',
              height: "240px",
              maxWidth: '100%',
              objectFit: 'contain',
              animation: 'fadeIn 0.5s ease-in-out',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'scale(0.95)' },
                '100%': { opacity: 1, transform: 'scale(1)' }
              }
            }}
          />
        </Box>
        {/* Thumbnails */}
        <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: 'space-between' }}>
          {productsArray.map((item) => (
            <Box
              key={item.id}
              component="img"
              src={item.img}
              onClick={() => setMainImg(item.img)}
              sx={{
                width: 70, height: 70, p: 0.5, cursor: 'pointer',
                border: '1px solid', borderRadius: '4px',
                borderColor: mainImg === item.img ? 'primary.main' : 'divider',
                transition: 'all 0.2s',
                '&:hover': { transform: 'scale(1.1)', borderColor: 'primary.main' },
                objectFit: 'contain',
                bgcolor: '#fff'
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* 2. MIDDLE: INFO SECTION */}
      <Box sx={{ flex: 1.5, minWidth: 0 }}>
        <Stack spacing={1.5}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <DoneIcon sx={{ color: '#00B517', fontSize: '20px' }} />
            <Typography sx={{ color: '#00B517', fontWeight: 500 }}>In stock</Typography>
          </Stack>

          <Typography variant="h5" sx={{ fontWeight: 600, lineHeight: 1.3, color: 'text.primary', textAlign: "left" }}>
            {activeProduct.title}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={3}>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Rating value={activeProduct.rating} readOnly size="small" sx={{ color: '#FF9017' }} />
              <Typography sx={{ color: '#FF9017', fontWeight: 100 }}>{activeProduct.rating}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ color: 'text.secondary' }}>
              <MessageIcon fontSize="small" />
              <Typography variant="body2">{activeProduct.reviews || 0} reviews</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ color: 'text.secondary' }}>
              <ShoppingBasketIcon fontSize="small" />
              <Typography variant="body2">{activeProduct.orders} sold</Typography>
            </Stack>
          </Stack>

          <Box sx={{ display: 'flex', bgcolor: isDark ? '#2c2c2c' : '#FFF0DF', p: 2, borderRadius: '4px' }}>
            <Box sx={{ flex: 1, borderRight: '3px solid', borderColor: 'divider', px: 2 }}>
              <Typography variant="h6" sx={{ color: '#FA3434', fontWeight: 700 }}>${activeProduct.price}</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>50-100 pcs</Typography>
            </Box>
            <Box sx={{ flex: 1, borderRight: '3px solid', borderColor: 'divider', px: 2 }}>
              <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700 }}>$90.00</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>100-700 pcs</Typography>
            </Box>
            <Box sx={{ flex: 1, px: 2 }}>
              <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700 }}>$78.00</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>700+ pcs</Typography>
            </Box>
          </Box>

          <Stack spacing={1.5} sx={{ mt: 1, textAlign: "left" }}>
            <Box sx={{ display: 'flex', pb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ width: 120, color: '#8B96A5' }}>Price: </Typography>
              <Typography sx={{ color: 'text.primary' }}>Negotiable</Typography>
            </Box>
            <Box sx={{ display: 'flex', pb: 1 }}>
              <Typography sx={{ width: 120, color: '#8B96A5' }}>Type:</Typography>
              <Typography sx={{ color: 'text.primary' }}>Classic Brand</Typography>
            </Box>
            <Box sx={{ display: 'flex', pb: 1 }}>
              <Typography sx={{ width: 120, color: '#8B96A5' }}>Material: </Typography>
              <Typography sx={{ color: 'text.primary' }}>{activeProduct.description.split(',')[0] || 'Plastic material'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', pb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ width: 120, color: '#8B96A5' }}>Design: </Typography>
              <Typography sx={{ color: 'text.primary' }}>Modern nice</Typography>
            </Box>
            <Box sx={{ display: 'flex', pb: 1 }}>
              <Typography sx={{ width: 120, color: '#8B96A5' }}>Customization: </Typography>
              <Typography sx={{ color: 'text.primary' }}>Customized logo and design custom packages</Typography>
            </Box>
            <Box sx={{ display: 'flex', pb: 1 }}>
              <Typography sx={{ width: 120, color: '#8B96A5' }}>Protection: </Typography>
              <Typography sx={{ color: 'text.primary' }}>Refund Policy</Typography>
            </Box>
            <Box sx={{ display: 'flex', pb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ width: 120, color: '#8B96A5' }}>Warranty: </Typography>
              <Typography sx={{ color: 'text.primary' }}>2 years full warranty </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      {/* 3. RIGHT: SUPPLIER SECTION */}
      <Box sx={{ flex: 0.8, minWidth: 250 }}>
        <Box sx={{ p: 2, borderRadius: '6px', border: '1px solid', borderColor: 'divider' }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Box sx={{ width: 48, height: 48, bgcolor: '#C6F3F1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#4CA7A7' }}>R</Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.primary', fontSize: "14px", display: 'block', textAlign: "left" }}>Supplier</Typography>
              <Typography variant="caption" sx={{ fontWeight: 400, fontSize: "14px", color: 'text.primary' }}>Guanjoi Trading LLC</Typography>
            </Box>
          </Stack>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box component="img" src="/images/navbar/flag.png" sx={{ width: 20 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Germany, Berlin</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <VerifiedUserIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Verified Seller</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <LanguageIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Worldwide shipping</Typography>
            </Stack>
          </Stack>
          <Stack spacing={1} sx={{ mt: 3 }}>
            <Button variant="contained" fullWidth sx={{ textTransform: 'none', py: 1, boxShadow: 'none' }}>Send inquiry</Button>
            <Button variant="outlined" fullWidth sx={{ textTransform: 'none', py: 1 }}>Seller's profile</Button>
          </Stack>
        </Box>

        {/* Heart shape changes to blue and filled when clicked */}
        <Button
          fullWidth
          startIcon={isSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          onClick={() => setIsSaved(!isSaved)}
          sx={{
            mt: 2,
            textTransform: 'none',
            color: 'primary.main',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            '&:focus': {
              outline: 'none',
            },
            '&:hover': {
              bgcolor: isSaved ? '#E3EFFF' : 'rgba(13, 110, 253, 0.04)',
              borderColor: '#DEE2E7',
            },
          }}
        >
          {isSaved ? "Saved" : "Save for later"}
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;