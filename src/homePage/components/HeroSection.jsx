import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, Stack, List, ListItem,
  ListItemText, Button, Paper, IconButton
} from '@mui/material';
import { Person } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isDark = theme.palette.mode === 'dark';

  const slides = [
    {
      title: "Electronic items",
      subtitle: "Latest trending",
      img: "images/homepage/herosection/Banner.png",
      buttonText: "Learn more"
    },
    {
      title: "Clothing & Wear",
      subtitle: "Classic summer",
      img: "images/homepage/herosection/Banner1.webp",
      buttonText: "Shop now"
    },
    {
      title: "Sports & Outdoor",
      subtitle: "New equipment",
      img: "images/homepage/herosection/Banner2.avif",
      buttonText: "Explore"
    },
    {
      title: "Home Interiors",
      subtitle: "Modern design",
      img: "images/homepage/herosection/Banner5.webp",
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
      console.log(`${category} clicked, but navigation is only for Automobiles.`);
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        mt: 2
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: '85%',
          p: 2,
          borderRadius: '8px',
          bgcolor: 'background.paper',
          borderColor: isDark ? 'divider' : '#DEE2E7',
          boxShadow: 'none',
        }}
      >
        {/* Main Flex Container instead of Grid */}
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>

          {/* LEFT - Flex item 1 */}
          <Box sx={{ width: { xs: '100%', md: '200px' }, flexShrink: 0 }}>
            <List component="nav" sx={{ p: 0 }}>
              {categories.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleCategoryClick(item)}
                  sx={{
                    borderRadius: '6px',
                    mb: 0.8,
                    py: 0.8,
                    cursor: 'pointer', // Added hand symbol here
                    '&:hover': {
                      bgcolor: isDark ? 'rgba(255,255,255,0.08)' : '#E5F1FF'
                    }
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: '15px',
                      color: isDark ? '#e0e0e0' : '#505050'
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* CENTER - Flex item 2 */}
          <Box
            sx={{
              height: '430px',
              flexGrow: 1, // Takes up remaining space
              maxWidth: '670px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '4px',
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
                objectPosition: 'center',
                animation: 'fadeIn 0.8s ease-in-out',
                zIndex: 1,
                opacity: isDark ? 0.85 : 1,
                '@keyframes fadeIn': {
                  '0%': { opacity: 0.5 },
                  '100%': { opacity: 1 }
                }
              }}
            />

            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                p: 5,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  color: isDark ? '#ffffff' : '#1c1c1c',
                  position: "absolute",
                  top: "20%",
                  left: "5%"
                }}
              >
                {slides[activeSlide].subtitle}
              </Typography>

              <Typography
                sx={{
                  fontWeight: "bold",
                  mb: 4,
                  color: isDark ? '#ffffff' : '#1c1c1c',
                  maxWidth: '450px',
                  position: "absolute",
                  top: "28%",
                  left: "5%",
                  fontSize: "42px"
                }}
              >
                {slides[activeSlide].title}
              </Typography>

              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#fff",
                  color: "#1c1c1c",
                  px: 3,
                  py: 1,
                  borderRadius: '6px',
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                {slides[activeSlide].buttonText}
              </Button>
            </Box>
          </Box>

          {/* RIGHT - Flex item 3 */}
          <Box sx={{ width: { xs: '100%', md: '250px' }, flexShrink: 0 }}>
            <Stack spacing={1.5} sx={{ height: 'auto' }}>

              <Box sx={{
                bgcolor: isDark ? '#1f2a38' : '#E3F0FF',
                p: 2,
                borderRadius: '8px'
              }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <IconButton sx={{
                    width: 44,
                    height: 44,
                    bgcolor: isDark ? '#0D6EFD' : '#AFD0FF',
                    color: '#fff'
                  }}>
                    <Person />
                  </IconButton>
                  <Typography sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    textAlign: "left",
                    color: isDark ? '#ffffff' : 'inherit'
                  }}>
                    Hi, user <br /> let's get started
                  </Typography>
                </Stack>

                <Stack spacing={1}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ textTransform: 'none', bgcolor: '#0D6EFD' }}
                  >
                    Join now
                  </Button>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: isDark ? '#2c2c2c' : '#fff',
                      textTransform: 'none',
                      color: "#0D6EFD",
                      border: isDark ? '1px solid #444' : '1px solid #DEE2E7'
                    }}
                  >
                    Log in
                  </Button>
                </Stack>
              </Box>

              <Box sx={{
                bgcolor: isDark ? '#a3541f' : '#F38332',
                p: 2,
                borderRadius: '8px',
                color: '#fff',
                flex: 1,
                display: 'flex',
                alignItems: 'center'
              }}>
                <Typography sx={{ fontSize: '19px', width: "140px", textAlign: "left" }}>
                  Get US $10 off with a new supplier
                </Typography>
              </Box>

              <Box sx={{
                bgcolor: isDark ? '#2f8c91' : '#55BDC3',
                p: 2,
                borderRadius: '8px',
                color: '#fff',
                flex: 1,
                display: 'flex',
                alignItems: 'center'
              }}>
                <Typography sx={{ fontSize: '19px', width: "160px", textAlign: "left" }}>
                  Send quotes with supplier preferences
                </Typography>
              </Box>

            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default HeroSection;