import React, { useState, useMemo, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { getThemeOptions } from './theme/index'; 

import BrandHeader from './components/layout/BrandHeader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './homePage/Home.jsx';
import List from './listviewpage/List.jsx';
import Details from './detailpage/Details.jsx';
import Cart from './cartpage/Cart.jsx';
import { CartProvider } from "./context/CartContext"; // Correctly imported

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  return (
// App.js
<ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
    <CartProvider> {/* This must wrap the Router and Header */}
      <CssBaseline />
      <Router>
        <BrandHeader />
        <Navbar />
            
            <main style={{ minHeight: '80vh' }}>
              <Routes>
                {/* 2. Simplified and cleaned up routes */}
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<List />} />
                <Route path='/detail' element={<Details />}/>
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </main>
            
            <Footer />
      </Router>
    </CartProvider>
  </ThemeProvider>
</ColorModeContext.Provider>
  )
}
export default App