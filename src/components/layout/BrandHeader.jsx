import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Box, IconButton, InputBase,
  Button, Stack, MenuItem, Select, useTheme, Container, Badge, Drawer, List, ListItem
} from '@mui/material';
import {
  Person, Chat, Favorite, ShoppingCart,
  WbSunny, DarkMode, ShoppingBag, Menu as MenuIcon, Search as SearchIcon
} from '@mui/icons-material';
import { ColorModeContext } from '../../App';
import { useCart } from '../../context/CartContext';

const BrandHeader = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { cartItems } = useCart();
  const isDark = theme.palette.mode === 'dark';
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        width: '100%',
        minHeight: { xs: 'auto', md: '80px' }, 
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
          px: 2
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            py: { xs: 1.5, md: 3 },
            gap: { xs: 1, md: 4 }
          }}
        >
          {/* TOP SECTION */}
          <Stack 
            direction="row" 
            alignItems="center" 
            sx={{ width: { xs: '100%', md: 'auto' }, justifyContent: 'space-between' }}
          >
            <Stack direction="row" alignItems="center" >
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, '&:focus': { outline: 'none'} }}
              >
                <MenuIcon />
              </IconButton>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                <Box sx={{ bgcolor: '#0D6EFD', borderRadius: '8px', p: { xs: 0.2, md: 0.8 }, display: 'flex' }}>
                  <ShoppingBag sx={{ color: '#fff', fontSize: { xs: '1.4rem', md: '1.8rem' } }} />
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 800, 
                    color: '#8CB7F5', 
                    display: { xs: 'none', md: 'block' }, // Only show on Desktop/Large tablet
                    fontSize: { xs: '1.5rem', md: '2.125rem' } 
                  }}
                >
                  Brand
                </Typography>
              </Stack>
            </Stack>

            {/* Mobile Actions */}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
               <HeaderAction icon={<Person />} label="Profile" mobileHideLabel />
               <HeaderAction 
                icon={
                  <Badge badgeContent={cartCount} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '10px', height: '16px', minWidth: '16px' } }}>
                    <ShoppingCart />
                  </Badge>
                } 
                label="Cart" 
                onClick={() => navigate('/cart')} 
                mobileHideLabel
              />
              <IconButton onClick={colorMode.toggleColorMode} sx={{'&:focus': { outline: 'none'}}}>
                {isDark ? <WbSunny sx={{ color: '#FFD700' }} /> : <DarkMode />}
              </IconButton>
            </Stack>
          </Stack>

          {/* SEARCH SECTION */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' }, // Desktop Search
              alignItems: "center",
              flex: 1,
              maxWidth: '660px',
              height: '44px',
              border: '2px solid #0D6EFD',
              borderRadius: '8px',
              overflow: 'hidden',
              bgcolor: isDark ? 'transparent' : '#fff'
            }}
          >
            <InputBase placeholder="Search" sx={{ ml: 2, flex: 1, fontSize: '0.95rem' }} />
            <Select
              defaultValue="All category"
              variant="standard"
              disableUnderline
              sx={{
                width: 'auto',
                minWidth: '130px',
                height: '100%',
                borderLeft: '1px solid',
                borderColor: 'divider',
                fontSize: '0.9rem',
                '& .MuiSelect-select': { pl: 2, pr: 4, height: '100%', display: 'flex', alignItems: 'center' }
              }}
            >
              <MenuItem value="All category">All category</MenuItem>
              <MenuItem value="Gadgets">Gadgets</MenuItem>
            </Select>
            <Button variant="contained" disableElevation sx={{ height: '100%', borderRadius: 0, px: 4, bgcolor: '#0D6EFD', textTransform: 'none' }}>
              Search
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' }, // Mobile Search
              width: '100%',
              height: '40px',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '6px',
              bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#F7FAFC',
              px: 1.5,
              alignItems: 'center'
            }}
          >
            <SearchIcon sx={{ color: 'text.secondary', fontSize: '20px', mr: 1 }} />
            <InputBase placeholder="Search products..." sx={{ flex: 1, fontSize: '14px' }} />
          </Box>

          {/* DESKTOP ACTIONS */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' }, flexShrink: 0 }}
          >
            <HeaderAction icon={<Person />} label="Profile" />
            <HeaderAction icon={<Chat />} label="Message" />
            <HeaderAction icon={<Favorite />} label="Orders" />
            <HeaderAction 
              icon={
                <Badge badgeContent={cartCount} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '10px', height: '16px', minWidth: '16px' } }}>
                  <ShoppingCart />
                </Badge>
              } 
              label="My cart" 
              onClick={() => navigate('/cart')} 
            />
            <IconButton onClick={colorMode.toggleColorMode} size="small" sx={{ ml: 1 }}>
              {isDark ? <WbSunny fontSize="small" sx={{ color: '#FFD700' }} /> : <DarkMode fontSize="small" />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
          <List sx={{ pt: 2 }}>
            {[
              { text: 'Home', path: '/' },
              { text: 'Categories', path: '/shop' }, 
              { text: 'Orders', path: '/orders' },
              { text: 'Settings', path: '/settings' }
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <Button 
                  fullWidth 
                  onClick={() => navigate(item.path)}
                  sx={{ 
                    justifyContent: 'flex-start', 
                    px: 3, 
                    py: 1.5, 
                    color: 'text.primary',
                    textTransform: 'none',
                    fontSize: '16px',
                    '&:hover': { bgcolor: 'action.hover' }
                  }}
                >
                  {item.text}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

const HeaderAction = ({ icon, label, onClick, mobileHideLabel }) => (
  <Stack
    alignItems="center"
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      minWidth: { xs: 'auto', md: '60px' },
      color: '#979797',
      transition: '0.2s',
      '&:hover': { color: '#0D6EFD' }
    }}
  >
    {React.isValidElement(icon) ? React.cloneElement(icon, { sx: { fontSize: '22px' } }) : icon}
    <Typography 
      variant="caption" 
      sx={{ 
        fontSize: '12px', 
        mt: 0.5, 
        fontWeight: 500,
        display: mobileHideLabel ? { xs: 'none', md: 'block' } : 'block'
      }}
    >
      {label}
    </Typography>
  </Stack>
);

export default BrandHeader;