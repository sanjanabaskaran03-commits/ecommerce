import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Deals = () => {
  const theme = useTheme();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, sec: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4); 
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          sec: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const deals = [
    { name: "Smart watches", discount: "-25%", img: "/images/homepage/deals/watch.png" },
    { name: "Laptops", discount: "-15%", img: "/images/homepage/deals/laptop.png" },
    { name: "Canon cameras", discount: "-25%", img: "/images/homepage/deals/camera.png" },
    { name: "Headphones", discount: "-25%", img: "/images/homepage/deals/headphone.png" },
    { name: "GoPro cameras", discount: "-40%", img: "/images/homepage/deals/phone.png" },
  ];

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Paper
        variant="outlined"
        sx={{
          width: '85%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          borderRadius: '8px',
          overflow: 'hidden',
          borderColor: 'divider', 
          bgcolor: 'background.paper',
        }}
      >
        {/* TIMER SECTION */}
        <Box 
          sx={{ 
            p: 3, 
            width: '280px', 
            minWidth: '280px', 
            // RESTORED: Explicitly using theme divider for the separator
            borderRight: { xs: 'none', md: `1px solid ${theme.palette.divider}` }, 
            borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, textAlign: "left" }}>
            Deals and offers
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3, fontSize: "14px", textAlign: "left" }}>
            Hygiene equipments
          </Typography>

          <Stack direction="row" spacing={1}>
            <TimerBox value={timeLeft.days} label="Days" />
            <TimerBox value={timeLeft.hours} label="Hour" />
            <TimerBox value={timeLeft.min} label="Min" />
            <TimerBox value={timeLeft.sec} label="Sec" />
          </Stack>
        </Box>

        {/* PRODUCTS SECTION */}
        <Box sx={{ display: 'flex', flex: 1, width: '100%', overflowX: {xs: 'auto', md: 'visible'} }}>
          {deals.map((item, index) => (
            <MotionBox 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.01)'
              }}
              sx={{ 
                flex: 1,
                minWidth: {xs: '160px', md: 'auto'},
                // Product separators also use theme divider
                borderRight: index === deals.length - 1 ? 'none' : `1px solid ${theme.palette.divider}`, 
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <MotionBox whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Box 
                  component="img" 
                  src={item.img} 
                  alt={item.name}
                  sx={{ 
                    height: '120px', 
                    width: 'auto', 
                    maxWidth: '120px', 
                    mb: 2, 
                    objectFit: 'contain',
                    display: 'block' 
                  }} 
                />
              </MotionBox>
              
              <Typography variant="body2" sx={{ color: 'text.primary', mb: 1, fontWeight: 500, textAlign: 'center' }}>
                {item.name}
              </Typography>
              
              <Box 
                sx={{ 
                  bgcolor: '#FFE3E3', 
                  color: '#EB001B', 
                  px: 1.5, py: 0.5, 
                  borderRadius: '20px', 
                  fontSize: '14px', 
                  fontWeight: 600 
                }}
              >
                {item.discount}
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

const TimerBox = ({ value, label }) => (
  <Box 
    sx={{ 
      bgcolor: '#606060', 
      color: '#fff',
      width: '55px', 
      height: '60px', 
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>
      {String(value).padStart(2, '0')}
    </Typography>
    <Typography sx={{ fontSize: '12px', opacity: 0.8 }}>
      {label}
    </Typography>
  </Box>
);

export default Deals;