import React from "react";

import HomeSection from "./HomeSection";
import ServicesSection from "./ServiceSection";
import FindMe from "./findme";
import FindUs from "./FindUs";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import FooterExtension from "../FooterExtension";
function Home() {
    return (
        <div>
     
            <HomeSection />
            <ServicesSection />
            <FindMe />
            <FindUs />
            <Testimonial />
            <Footer/>
            <FooterExtension/>
        </div>
    )
  }
  
export default Home