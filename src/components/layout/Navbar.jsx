import React from 'react';
import { 
  Box, Typography, Stack, Container
} from '@mui/material';
import { Menu as MenuIcon, KeyboardArrowDown } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box 
      sx={{ 
        /* xs: 'none' hides the component on mobile and tablet.
           md: 'flex' shows it on desktop (approx 900px width and up).
        */
        display: { xs: 'none', md: 'flex' }, 
        borderBottom: '1px solid', 
        borderColor: 'divider', 
        bgcolor: 'background.paper',
        width: '100%',
        justifyContent: 'center',
        
      }}
    >
      <Container 
        maxWidth={false}
        sx={{ 
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: "1280px",
    margin: "0 auto",
    px: 2
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
            <MenuIcon sx={{ fontSize: '20px' }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>All category</Typography>
          </Stack>
          
          <NavLink label="Hot offers" />
          <NavLink label="Gift boxes" />
          <NavLink label="Projects" />
          <NavLink label="Menu item" />
          
          <Stack direction="row" alignItems="center" sx={{ cursor: 'pointer' }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>Help</Typography>
            <KeyboardArrowDown sx={{ fontSize: '18px', color: 'text.secondary' }} />
          </Stack>
        </Stack>

        <Stack direction="row" spacing={4} alignItems="center">
          <NavDropdown label="English, USD" />
          <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>Ship to</Typography>
            <Box 
              component="img" 
              src="/images/navbar/flag.png" 
              alt="DE"
              sx={{ width: 18, height: 12, borderRadius: '2px' }}
            />
            <KeyboardArrowDown sx={{ fontSize: '18px', color: 'text.secondary' }} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const NavLink = ({ label }) => (
  <Typography 
    variant="body2" 
    sx={{ 
      fontWeight: 500, 
      cursor: 'pointer', 
      '&:hover': { color: 'primary.main' } 
    }}
  >
    {label}
  </Typography>
);

const NavDropdown = ({ label }) => (
  <Stack direction="row" alignItems="center" sx={{ cursor: 'pointer' }}>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>{label}</Typography>
    <KeyboardArrowDown sx={{ fontSize: '18px', color: 'text.secondary' }} />
  </Stack>
);

export default Navbar;