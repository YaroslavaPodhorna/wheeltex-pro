import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import ServicesSection from "../../components/ServicesSection/ServicesSection.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs.jsx";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews.jsx";
import FinalCTA from "../../components/FinalCTA/FinalCTA.jsx";
import Footer from "../../components/Footer/Footer.jsx";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection preview />
      <WhyChooseUs />
      <CustomerReviews />
      <FinalCTA />
      <Footer />

      {/* Other components or content can be added here */}
    </div>
  );
}
