import React from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import InventoryIcon from '@mui/icons-material/Inventory';
import SendIcon from '@mui/icons-material/Send';
import SecurityIcon from '@mui/icons-material/Security';
import LayoutContainer from '../../components/common/LayoutContainer';

const MotionPaper = motion(Paper);

const services = [
  {
    title: 'Source from Industry Hubs',
    img: '/images/homepage/services/service1.png',
    icon: <SearchIcon />,
  },
  {
    title: 'Customize Your Products',
    img: '/images/homepage/services/service2.png',
    icon: <InventoryIcon />,
  },
  {
    title: 'Fast, reliable shipping by ocean or air',
    img: '/images/homepage/services/service3.png',
    icon: <SendIcon />,
  },
  {
    title: 'Product monitoring and inspection',
    img: '/images/homepage/services/service4.png',
    icon: <SecurityIcon />,
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <LayoutContainer>
      <Box sx={{ py: 4 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600, 
            mb: 3, 
            textAlign: 'left',
            color: 'text.primary' 
          }}
        >
          Our extra services
        </Typography>

        {/* SINGLE LINE FLEX CONTAINER */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 3,
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%'
          }}
        >
          {services.map((service, index) => (
            <MotionPaper
              key={index}
              variant="outlined"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              sx={{
                flex: 1,
                borderRadius: '8px',
                overflow: 'hidden',
                bgcolor: 'background.paper',
                borderColor: 'divider',
                position: 'relative',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              {/* Image Section */}
              <Box sx={{ position: 'relative', height: '180px' }}> 
                <Box
                  component="img"
                  src={service.img}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.4)',
                  }}
                />
                
                {/* Floating Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: 16,
                    bottom: -25,
                    bgcolor: theme.palette.mode === 'dark' ? '#232323' : '#D1E7FF',
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                    width: 55,
                    height: 55,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `2px solid ${theme.palette.background.paper}`,
                    zIndex: 2,
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  {service.icon}
                </Box>
              </Box>

              {/* Text Content */}
              <Box sx={{ p: 3, pt: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    maxWidth: "160px",
                    fontWeight: 500,
                    textAlign: 'left',
                    color: 'text.primary',
                    lineHeight: 1.5,
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </MotionPaper>
          ))}
        </Box>
      </Box>
    </LayoutContainer>
  );
};

export default Services;