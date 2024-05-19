import React from "react";

import CallBackForm from "./CallBackForm";
import Tracker from "./Tracker";
import HomeSection from "./HomeSection";
import ServicesSection from "./ServiceSection";
import FindMe from "./findme";
import FindUs from "./FindUs";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";
import FooterExtension from "../Footer/FooterExtension";
function Home() {
  return (
    <div>
      <HomeSection />
      <ServicesSection />
      <FindMe />
      <FindUs />
      <Tracker />
      <Testimonial />
      <CallBackForm />
      <Footer />
      <FooterExtension />
    </div>
  );
}

export default Home;
