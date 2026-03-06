import { Box,Container } from '@mui/material';
import CategorySection from "../../components/common/CategorySection";
import LayoutContainer from "../../components/common/LayoutContainer";
import Softchairs from "/images/homepage/categories/softchair1.png" 
import Lamp from "/images/homepage/categories/lamp.png"
import Mattress from "/images/homepage/categories/mattress.png" 
import Mudvessel from "/images/homepage/categories/pot.png" 
import Kitchenmixer from "/images/homepage/categories/chopper.png" 
import Blenders from "/images/homepage/categories/blender.png" 
import Homeappliance from "/images/homepage/categories/kitchen appliance.png"
import Homedecor from "/images/homepage/categories/homedecor.png"
import Smartwatches from "/images/homepage/deals/watch.png"
import Cameras from "/images/homepage/deals/camera.png"
import Headphone from "/images/homepage/categories/headphone1.png"
import Electrickettle from "/images/homepage/categories/coffee maker.png"
import Laptop from "/images/homepage/deals/laptop.png"
import Tab from "/images/homepage/categories/tab.png"
import Smartphone from "/images/homepage/categories/mobile.png"


const Categories = () => {
  const homeItems = [
    { title: "Soft chairs", price: "19", img: Softchairs},
    { title: "Lamp", price: "19", img: Lamp },
    { title: "Mattress", price: "19", img: Mattress },
    { title: "Mud vessel", price: "19", img: Mudvessel },
    { title: "Kitchen mixer", price: "100", img: Kitchenmixer },
    { title: "Blenders", price: "39", img: Blenders },
    { title: "Home appliance", price: "19", img: Homeappliance },
    { title: "Home decor", price: "10", img: Homedecor }
  ];

  const electronicsItems = [
    { title: "Smart watches", price: "19", img: Smartwatches },
    { title: "Cameras", price: "89", img: Cameras },
    { title: "Headphone", price: "10", img: Headphone },
    { title: "Electric kettle", price: "90", img: Electrickettle },
    { title: "Headphone", price: "34", img: Headphone },
    { title: "Laptops & PC", price: "340", img: Laptop },
    { title: "Tab", price: "19", img: Tab },
    { title: "Smartphone", price: "240", img: Smartphone },
  ];


  return (
    <LayoutContainer>
      <Box sx={{ py: 2 }}>
        <CategorySection 
          title="Home and outdoor" 
          bannerImg="/images/homepage/categories/homedecor.png" 
          items={homeItems} 
        />

        <CategorySection 
          title="Consumer electronics and gadgets" 
          bannerImg="/images/homepage/categories/electronics.png" 
          items={electronicsItems} 
        />
      </Box>
    </LayoutContainer>
  );
};

export default Categories;