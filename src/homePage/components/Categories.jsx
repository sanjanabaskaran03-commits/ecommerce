import { Box,Container } from '@mui/material';
import CategorySection from "../../components/common/CategorySection";

const Categories = () => {
  const homeItems = [
    { title: "Soft chairs", price: "19", img: "/images/homepage/categories/softchair1.png" },
    { title: "Lamp", price: "19", img: "/images/homepage/categories/lamp.png" },
    { title: "Mattress", price: "19", img: "/images/homepage/categories/mattress.png" },
    { title: "Mud vessel", price: "19", img: "/images/homepage/categories/pot.png" },
    { title: "Kitchen mixer", price: "100", img: "/images/homepage/categories/chopper.png" },
    { title: "Blenders", price: "39", img: "/images/homepage/categories/blender.png" },
    { title: "Home appliance", price: "19", img: "/images/homepage/categories/kitchen appliance.png" },
    { title: "Home decor", price: "10", img: "/images/homepage/categories/decor.png"}
  ];

  const electronicsItems = [
    { title: "Smart watches", price: "19", img: "/images/homepage/deals/watch.png" },
    { title: "Cameras", price: "89", img: "/images/homepage/deals/camera.png" },
    { title: "Headphone", price: "10", img: "/images/homepage/categories/headphone1.png" },
    { title: "Electric kettle", price: "90", img: "/images/homepage/categories/coffee maker.png" },
    { title: "Headphone", price: "34", img: "/images/homepage/deals/headphone.png" },
    { title: "Laptops & PC", price: "340", img: "/images/homepage/deals/laptop.png" },
    { title: "Tab", price: "19", img: "/images/homepage/categories/tab.png" },
    { title: "Smartphone", price: "240", img: "/images/homepage/categories/mobile.png" },
  ];


  return (
    <Box sx={{ p: 2}}>
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
  );
};

export default Categories;