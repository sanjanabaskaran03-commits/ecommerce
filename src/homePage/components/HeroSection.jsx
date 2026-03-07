import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, Stack, List, ListItem,
  ListItemText, Button, Paper, IconButton, Container
} from '@mui/material';
import { Person } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Banner from "/images/homepage/herosection/Banner.png"
import Banner1 from "/images/homepage/herosection/Banner1.webp"
import Banner2 from "/images/homepage/herosection/Banner2.avif"
import Banner5 from "/images/homepage/herosection/Banner5.webp"

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isDark = theme.palette.mode === 'dark';

  const slides = [
    {
      title: "Electronic items",
      subtitle: "Latest trending",
      img: Banner,
      buttonText: "Learn more"
    },
    {
      title: "Clothing & Wear",
      subtitle: "Classic summer",
      img: Banner1,
      buttonText: "Shop now"
    },
    {
      title: "Sports & Outdoor",
      subtitle: "New equipment",
      img: Banner2,
      buttonText: "Explore"
    },
    {
      title: "Home Interiors",
      subtitle: "Modern design",
      img: Banner5,
      buttonText: "View collection"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const categories = [
    "Mobiles", "Clothes and wear", "Home interiors", "Computer and tech",
    "Tools, equipments", "Sports and outdoor", "Animal and pets",
    "Machinery tools", "More category"
  ];

  const handleCategoryClick = (category) => {
    if (category === "Mobiles") {
      navigate('/shop');
    } else {
      console.log(`${category} clicked`);
    }
  };

  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
          px: 2
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            width: "100%",
            p: { xs: 0, md: 2 }, 
            borderRadius: "8px",
            bgcolor: "background.paper",
            borderColor: isDark ? "divider" : "#DEE2E7",
            boxShadow: "none",
            overflow: "hidden"
          }}
        >
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            gap: { xs: 0, md: 2 }, 
            flexDirection: { xs: 'column', md: 'row' } 
          }}>

            <Box 
              sx={{ 
                width: { xs: '100%', md: '200px' }, 
                flexShrink: 0,
                borderBottom: { xs: `1px solid ${isDark ? '#333' : '#E0E7EE'}`, md: 'none' },
                overflowX: { xs: 'auto', md: 'visible' },
                whiteSpace: { xs: 'nowrap', md: 'normal' },
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              <List 
                component="nav" 
                sx={{ 
                  p: { xs: 1, md: 0 },
                  display: { xs: 'flex', md: 'block' }, 
                  flexDirection: { xs: 'row', md: 'column' },
                }}
              >
                {categories.map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => handleCategoryClick(item)}
                    sx={{
                      borderRadius: '6px',
                      mb: { xs: 0, md: 0.8 },
                      mr: { xs: 1, md: 0 },
                      py: 0.8,
                      px: { xs: 2, md: 1.5 },
                      width: { xs: 'auto', md: '100%' },
                      cursor: 'pointer',
                      bgcolor: { 
                        xs: isDark ? 'rgba(255,255,255,0.05)' : '#EFF2F4', 
                        md: 'transparent' 
                      },
                      border: {
                        xs: `1px solid ${isDark ? '#444' : '#DEE2E7'}`,
                        md: 'none'
                      },
                      '&:hover': {
                        bgcolor: isDark ? 'rgba(255,255,255,0.08)' : '#E5F1FF'
                      }
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: isDark ? '#e0e0e0' : '#0D6EFD', 
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box
              sx={{
                height: { xs: '200px', sm: '300px', md: '430px' },
                flexGrow: 1,
                maxWidth: { md: '670px' },
                position: 'relative',
                overflow: 'hidden',
                borderRadius: { xs: 0, md: '4px' },
                bgcolor: isDark ? '#1e1e1e' : '#f8f9fa'
              }}
            >
              <Box
                component="img"
                key={activeSlide}
                src={slides[activeSlide].img}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'fadeIn 0.8s ease-in-out',
                  '@keyframes fadeIn': { '0%': { opacity: 0.5 }, '100%': { opacity: 1 } }
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 2, p: { xs: 2, md: 5 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ color: '#1c1c1c', mb: 1, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                  {slides[activeSlide].subtitle}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: '#1c1c1c', mb: 2, fontSize: { xs: '1.5rem', md: '2.5rem' }, lineHeight: 1.2 }}>
                  {slides[activeSlide].title}
                </Typography>
                <Button variant="contained" sx={{ bgcolor: "#fff", color: "#1c1c1c", width: 'fit-content', textTransform: 'none' }}>
                  {slides[activeSlide].buttonText}
                </Button>
              </Box>
            </Box>

            <Box sx={{ width: { md: '250px' }, display: { xs: 'none', md: 'block' }, flexShrink: 0 }}>
              <Stack spacing={1.5}>
                <Box sx={{ bgcolor: isDark ? '#1f2a38' : '#E3F0FF', p: 2, borderRadius: '8px' }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                    <IconButton sx={{ bgcolor: '#0D6EFD', color: '#fff' }}><Person /></IconButton>
                    <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>Hi, user <br /> let's get started</Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Button variant="contained" fullWidth sx={{ textTransform: 'none', bgcolor: '#0D6EFD' }}>Join now</Button>
                    <Button variant="outlined" fullWidth sx={{ textTransform: 'none', bgcolor: '#fff' }}>Log in</Button>
                  </Stack>
                </Box>
                <Box sx={{ bgcolor: '#F38332', p: 2, borderRadius: '8px', color: '#fff' }}>
                  <Typography sx={{ fontSize: '16px' }}>Get US $10 off with a new supplier</Typography>
                </Box>
                <Box sx={{ bgcolor: '#55BDC3', p: 2, borderRadius: '8px', color: '#fff' }}>
                  <Typography sx={{ fontSize: '16px' }}>Send quotes with supplier preferences</Typography>
                </Box>
              </Stack>
            </Box>

          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default HeroSection;