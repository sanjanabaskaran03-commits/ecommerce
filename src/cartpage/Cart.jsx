import React from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import CartItem from './components/CartItem';
import Label from './components/Label';
import Discount from "../components/layout/Discount";
import SavedForLater from './components/SavedForLater';
import LayoutContainer from '../components/common/LayoutContainer';

const Cart = () => {
  return (
    <>
        <CartItem />
        <Label />
        <SavedForLater />
        <Discount />
        </>
  );
};

export default Cart;