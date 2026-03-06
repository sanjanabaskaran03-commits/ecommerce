import React from 'react';
import { Box, Typography, Button, Divider, MenuItem, Select, Stack, OutlinedInput, IconButton } from '@mui/material';
import { useCart } from '../../context/CartContext'; 
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LayoutContainer from '../../components/common/LayoutContainer';
import { useTheme } from '@mui/material/styles';

const CartItem = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart(); 
  const navigate = useNavigate();
  const theme = useTheme();
  
  const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.price) * item.qty), 0);
  const discount = subtotal > 0 ? 60.00 : 0; 
  const tax = subtotal > 0 ? 14.00 : 0;
  const total = Math.max(0, subtotal - discount + tax);

  return (
    <LayoutContainer>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, textAlign: "left", mt: 4 }}>
        My cart ({cartItems.length})
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ bgcolor: 'background.paper', p: { xs: 2, md: 3 }, borderRadius: '8px', border: { xs: 'none', md: `1px solid ${theme.palette.divider}` } }}>
            
            {cartItems.length === 0 ? (
              <Typography sx={{ textAlign: 'center', py: 5 }}>Your cart is empty.</Typography>
            ) : (
              cartItems.map((item, index) => (
                <Box key={item.id} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box component="img" src={item.img} sx={{ width: { xs: 70, md: 80 }, height: { xs: 70, md: 80 }, border: '1px solid #E3E8EE', borderRadius: '6px', objectFit: 'contain', p: 1 }} />
                    
                    <Box sx={{ flexGrow: 1 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, textAlign: "left", fontSize: { xs: '14px', md: '16px' } }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" textAlign="left" sx={{ fontSize: '12px' }}>
                            Size: medium, Color: blue, Material: Plastic
                          </Typography>
                          <Typography variant="body2" color="text.secondary" textAlign="left" sx={{ fontSize: '12px' }}>
                            Seller: {item.seller || 'Artel Market'}
                          </Typography>

                          <Stack direction="row" spacing={1} sx={{ mt: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button 
                              size="small" 
                              sx={{ color: '#FF4D4C', textTransform: 'none', border: '1px solid #E3E8EE', '&:focus':{outline:"none"}}}
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </Button>
                            <Button 
                              size="small" 
                              sx={{ color: '#0D6EFD', textTransform: 'none', border: '1px solid #E3E8EE', '&:focus':{outline:"none"} }}
                            >
                              Save for later
                            </Button>
                          </Stack>
                        </Box>
                        
                        <IconButton size="small" sx={{ display: { xs: 'flex', md: 'none' }, p: 0, color: '#979797' }}>
                          <MoreVertIcon fontSize="small" />
                        </IconButton>

                        <Box sx={{ textAlign: 'right', minWidth: '100px', display: { xs: 'none', md: 'block' } }}>
                          <Typography sx={{ fontWeight: 700, mb: 1 }}>${Number(item.price).toFixed(2)}</Typography>
                          <Select
                            value={item.qty}
                            size="small"
                            sx={{ height: 35, minWidth: 100 }}
                            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <MenuItem key={num} value={num}>Qty: {num}</MenuItem>
                            ))}
                          </Select>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>

                  <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Stack direction="row" alignItems="center" sx={{ border: '1px solid #E3E8EE', borderRadius: '4px' }}>
                       <Button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.qty - 1))}
                        sx={{ minWidth: 40, color: 'text.primary', borderRight: '1px solid #E3E8EE', borderRadius: 0 }}
                       >—</Button>
                       <Typography sx={{ px: 2, fontWeight: 600 }}>{item.qty}</Typography>
                       <Button 
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        sx={{ minWidth: 40, color: 'text.primary', borderLeft: '1px solid #E3E8EE', borderRadius: 0 }}
                       >+</Button>
                    </Stack>

                    <Typography sx={{ fontWeight: 700 }}>
                      ${(Number(item.price) * item.qty).toFixed(2)}
                    </Typography>
                  </Box>

                  {index !== cartItems.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))
            )}
          </Box>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '300px' } }}>
          <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '8px', border: `1px solid ${theme.palette.divider}` }}>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="text.secondary">Subtotal:</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="text.secondary">Discount:</Typography>
                <Typography sx={{ color: '#FF4D4C' }}>- ${discount.toFixed(2)}</Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="text.secondary">Tax:</Typography>
                <Typography sx={{ color: '#00B517' }}>+ ${tax.toFixed(2)}</Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Total:</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1.2rem' }}>${total.toFixed(2)}</Typography>
              </Box>

              <Button 
                variant="contained" 
                fullWidth 
                sx={{ 
                  bgcolor: '#00B517', 
                  mt: 2, 
                  py: 1.5, 
                  fontSize: '1rem',
                  fontWeight: 600, 
                  textTransform: 'none', 
                  '&:hover': { bgcolor: '#009a13' } 
                }}
              >
                Checkout
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </LayoutContainer>
  );
};

export default CartItem;