import React from 'react';
import { Box, Typography, Button, Divider, MenuItem, Select, Stack, Container, OutlinedInput } from '@mui/material';
import { useCart } from '../../context/CartContext'; 
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CartItem = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart(); 
  const navigate = useNavigate();

  // Calculations refresh automatically whenever updateQuantity updates the cartItems state
  const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.price) * item.qty), 0);
  const discount = subtotal > 0 ? 60.00 : 0; 
  const tax = subtotal > 0 ? 14.00 : 0;
  const total = Math.max(0, subtotal - discount + tax);

  return (
    <Container maxWidth="1440px" sx={{ py: 3 ,width:"1200px"}}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, textAlign: "left" }}>My cart ({cartItems.length})</Typography>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: '8px', border: '1px solid', borderColor: 'divider' }}>
            
            {cartItems.length === 0 ? (
              <Typography sx={{ textAlign: 'center', py: 5 }}>Your cart is empty.</Typography>
            ) : (
              cartItems.map((item, index) => (
                <Box key={item.id} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Box component="img" src={item.img} sx={{ width: 80, height: 80, border: '1px solid #E3E8EE', borderRadius: '6px', objectFit: 'contain', p: 1 }} />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, textAlign: "left" }}>{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary" textAlign="left">Size: medium, Color: blue, Material: Plastic</Typography>
                      <Typography variant="body2" color="text.secondary" textAlign="left">Seller: {item.seller || 'Artel Market'}</Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <Button 
                          size="small" 
                          sx={{ color: '#FF4D4C', textTransform: 'none', border: '1px solid #E3E8EE' ,'&:focus':{outline:"none"}}}
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </Button>
                        <Button size="small" sx={{ color: '#0D6EFD', textTransform: 'none', border: '1px solid #E3E8EE','&:focus':{outline:"none"} }}>Save for later</Button>
                      </Stack>
                    </Box>
                    <Box sx={{ textAlign: 'right', minWidth: '100px' }}>
                      <Typography sx={{ fontWeight: 700, mb: 1 }}>${Number(item.price).toFixed(2)}</Typography>
                      <Select
                        value={item.qty}
                        size="small"
                        sx={{ height: 35, minWidth: 100 }}
                        input={<OutlinedInput />}
                        // This updates the quantity in state AND localStorage
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <MenuItem key={num} value={num}>Qty: {num}</MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                  {index !== cartItems.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button 
                onClick={() => navigate('/')} 
                variant="contained" 
                startIcon={<ArrowBackIcon />}
                sx={{ bgcolor: '#0D6EFD', textTransform: 'none', fontWeight: 600,'&:focus':{outline:"none"} }}
              >
                Back to shop
              </Button>
              <Button 
                variant="outlined" 
                onClick={clearCart}
                sx={{ textTransform: 'none', color: '#0D6EFD', borderColor: '#E3E8EE' ,'&:focus':{outline:"none"}}}
              >
                Remove all
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '280px' } }}>
          <Stack spacing={2}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '8px', border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="body2" sx={{ mb: 1, textAlign: "left" }}>Have a coupon?</Typography>
              <Box sx={{ display: 'flex', border: '1px solid #E3E8EE', borderRadius: '4px', overflow: 'hidden' }}>
                <Box component="input" placeholder="Add coupon" sx={{ border: 'none', px: 1, flexGrow: 1, outline: 'none', bgcolor: "transparent", fontSize: '14px' }} />
                <Button variant="text" sx={{ borderLeft: '1px solid #E3E8EE', borderRadius: 0, textTransform: 'none', fontWeight: 600 ,'&:focus':{outline:"none"}}}>Apply</Button>
              </Box>
            </Box>

            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '8px', border: '1px solid', borderColor: 'divider', boxShadow: '0px 4px 10px rgba(0,0,0,0.05)' }}>
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary">Subtotal:</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary">Discount:</Typography>
                  <Typography color="error">-${discount.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary">Tax:</Typography>
                  <Typography sx={{ color: '#00B517' }}>+${tax.toFixed(2)}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Total:</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>${total.toFixed(2)}</Typography>
                </Box>
                <Button variant="contained" fullWidth sx={{ bgcolor: '#00B517', mt: 1, py: 1.5, fontWeight: 700, textTransform: 'none', '&:focus':{outline:"none"},'&:hover': { bgcolor: '#009a13' } }}>
                  Checkout
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default CartItem;