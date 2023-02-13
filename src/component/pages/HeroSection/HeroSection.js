import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
<div className="hero-section-wrapper">
        <div className="flex flex-col absolute-center hero-section max-width">
          <div className="pre-Heading" style={{letterSpacing: ".2rem"}}>• Fueling Innovation, Empowering Entrepreneurs •</div>
        <div className="hero-heading"style={{letterSpacing: ".1rem"}}>
          Welcome To Entrepreneurship Cell
        </div>
        <div className="hero-subheading" style={{letterSpacing: ".2rem"}}>
          ABES Engineering college, Ghaziabad
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
