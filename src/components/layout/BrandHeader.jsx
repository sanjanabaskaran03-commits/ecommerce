import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {
  AppBar, Toolbar, Typography, Box, IconButton, InputBase,
  Button, Stack, MenuItem, Select, useTheme, Container, Badge // Added Badge
} from '@mui/material';
import {
  Person, Chat, Favorite, ShoppingCart,
  WbSunny, DarkMode, ShoppingBag
} from '@mui/icons-material';
import { ColorModeContext } from '../../App';
import { useCart } from '../../context/CartContext'; // Import your hook

const BrandHeader = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { cartItems } = useCart(); // Access cart items
  const isDark = theme.palette.mode === 'dark';
  const navigate = useNavigate();

  // Calculate total items (sum of all quantities)
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        minHeight: { xs: 'auto', md: '80px' }, 
        py: { xs: 1, md: 0 }
      }}
    >
      <Box sx={{ position: 'absolute', top: 8, right: 14 }}>
        <IconButton 
          onClick={colorMode.toggleColorMode} 
          size="small"
          sx={{
            '&:focus': { outline: 'none' },
            '&:focus-visible': { outline: 'none' },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          {isDark ? (
            <WbSunny fontSize="small" sx={{ color: '#FFD700' }} /> 
          ) : (
            <DarkMode fontSize="small" sx={{ color: '#4A5568' }} />
          )}
        </IconButton>
      </Box>

      <Container disableGutters>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', md: 'center' },
            gap: { xs: 2, md: 4 },
            width: '100%',
            px: 2
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
              flexShrink: 0,
              justifyContent: { xs: 'center', md: 'flex-start' },
              cursor: 'pointer' // Added cursor
            }}
            onClick={() => navigate('/')} // Allow logo to go home
          >
            <Box sx={{ bgcolor: '#0D6EFD', borderRadius: '8px', p: 0.8, display: 'flex' }}>
              <ShoppingBag sx={{ color: '#fff', fontSize: '1.8rem' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#8CB7F5', letterSpacing: '-0.5px' }}>
              Brand
            </Typography>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              alignItems: "center",
              flex: 1,
              width: { xs: '100%', md: 'auto' },
              maxWidth: { xs: '100%', md: '660px' },
              height: '44px',
              border: '2px solid #0D6EFD',
              borderRadius: '8px',
              overflow: 'hidden',
              bgcolor: isDark ? 'transparent' : '#fff' 
            }}
          >
            <InputBase
              placeholder="Search"
              sx={{ ml: 2, flex: 1, fontSize: '0.95rem' }}
            />

            <Select
              defaultValue="All category"
              variant="standard"
              disableUnderline
              sx={{
                display: { xs: 'none', sm: 'flex' },
                width: 'auto', 
                minWidth: '130px',
                height: '100%',
                borderLeft: '1px solid',
                borderColor: 'divider',
                fontSize: '0.9rem',
                '& .MuiSelect-select': {
                  pl: 2,
                  pr: 4,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }
              }}
            >
              <MenuItem value="All category">All category</MenuItem>
              <MenuItem value="Gadgets">Gadgets</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Interiors">Interiors</MenuItem>
              <MenuItem value="Tools">Tools</MenuItem>
            </Select>

            <Button
              variant="contained"
              disableElevation
              sx={{
                height: '100%', 
                borderRadius: 0,
                px: { xs: 2, md: 4 },
                bgcolor: '#0D6EFD',
                textTransform: 'none',
                fontWeight: 600,
                flexShrink: 0,
                '&:hover': { bgcolor: '#0b5ed7' }
              }}
            >
              Search
            </Button>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'flex-end' }}
            sx={{
              flexShrink: 0,
              width: { xs: '100%', md: 'auto' }
            }}
          >
            <HeaderAction icon={<Person />} label="Profile" />
            <HeaderAction icon={<Chat />} label="Message" />
            <HeaderAction icon={<Favorite />} label="Orders" />
            
            {/* Cart with dynamic Badge count */}
            <HeaderAction 
              icon={
                <Badge badgeContent={cartCount} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '10px', height: '16px', minWidth: '16px' } }}>
                  <ShoppingCart />
                </Badge>
              } 
              label="My cart" 
              onClick={() => navigate('/cart')} 
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const HeaderAction = ({ icon, label, onClick }) => (
  <Stack
    alignItems="center"
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      minWidth: '60px',
      color: '#979797',
      transition: '0.2s',
      '&:hover': { color: '#0D6EFD' }
    }}
  >
    {React.isValidElement(icon) ? React.cloneElement(icon, { sx: { ...icon.props.sx, fontSize: '22px' } }) : icon}
    <Typography variant="caption" sx={{ fontSize: '12px', mt: 0.5, fontWeight: 500 }}>
      {label}
    </Typography>
  </Stack>
);

export default BrandHeader;