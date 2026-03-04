import React from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import CartItem from './components/CartItem';
import Label from './components/Label';
import Discount from "../components/layout/Discount";
import SavedForLater from './components/SavedForLater';

const Cart = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 2 }}>
          <Container maxWidth="1440px">
        <CartItem />
        <Label />
        <SavedForLater />
        <Discount />
       </Container>
       </Box>
  );
};

export default Cart;