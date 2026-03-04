import HeroSection from "./components/HeroSection";
import Description from "./components/Description";
import RelatedProducts from "./components/RelatedProducts";
import Discount from "../components/layout/Discount";
import BreadCrumbSection from "../listviewpage/components/BreadCrumbSection";



function Details(){
    return(
        <>
        <BreadCrumbSection />
        <HeroSection />
        <Description />
        <RelatedProducts />
        <Discount />
        </>
    )
}
export default Details;