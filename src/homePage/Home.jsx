import React from 'react';
import { Box } from '@mui/material'; 
import "../App.css";

import HeroSection from "./components/HeroSection";
import Deals from "./components/Deals";
import Categories from './components/Categories';
import SendingRequests from "./components/SendingRequests";
import RecommendedItems from "./components/RecommendedItems";
import Services from "./components/Services";
import RegionalSuppliers from "./components/RegionalSuppliers";
import SubscribeSection from "../components/layout/SubscribeSection";

function Home() {
  
  return (
    <> 
        <HeroSection />
        <Deals />
        <Categories />
        <SendingRequests />
        <RecommendedItems />
        <Services />
        <RegionalSuppliers />
        <SubscribeSection />
    </>
  );
}

export default Home;