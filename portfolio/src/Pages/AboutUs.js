import React from "react";
import AboutUsComponent from "../components/AboutUsComponent";
import FaqComponent from "../components/FaqComponent";
import ServicesSection from "../components/ServicesSection";

const AboutUs =()=>{
    return(
        <div className="div">
        <AboutUsComponent />
        < ServicesSection />
        <FaqComponent/>
        </div>
    );

}


export default AboutUs;