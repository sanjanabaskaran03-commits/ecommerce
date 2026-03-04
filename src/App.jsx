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
import Details from './detailpage/Details.jsx'

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Router>
          <BrandHeader />
          <Navbar />
          
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
            
              <Route path="/shop" element={<List />} />
              <Route path='/detail' element={<Details />}/>
            </Routes>
            
            
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;