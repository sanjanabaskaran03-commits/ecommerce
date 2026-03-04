import { Container } from "@mui/material";
import BrandHeader from "./BrandHeader";
import Navbar from "./Navbar";
import SubscribeSection from "./SubscribeSection";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <BrandHeader />
      <Navbar />

      {/* Common Left & Right Spacing */}
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 }, // responsive spacing
        }}
      >
        {children}
      </Container>

      <SubscribeSection />
      <Footer />
    </>
  );
}

export default MainLayout;