import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import ServicesSection from "../../components/ServicesSection/ServicesSection.jsx";
import AccordionFAQ from "../../components/Faq/faq.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs.jsx";
import QuickEstimateSection from "../../components/QuickEstimateSection/QuickEstimateSection.jsx";
// import CustomerReviews from "../../components/CustomerReviews/CustomerReviews.jsx";
// import FinalCTA from "../../components/FinalCTA/FinalCTA.jsx";
import Footer from "../../components/Footer/Footer.jsx";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AccordionFAQ />
      <WhyChooseUs />
      {/* <CustomerReviews />
      <FinalCTA /> */}
      <QuickEstimateSection />
      <Footer />

      {/* Other components or content can be added here */}
    </div>
  );
}
