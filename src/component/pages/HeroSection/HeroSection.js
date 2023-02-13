import React from "react";
import { motion } from "framer-motion"
import "./heroSection.css";

const HeroSection = () => {
  return (
<div 
  
className="hero-section-wrapper bg">
        <motion.div 
        initial={{y:-500}}
        animate={{y:0}}
        transition={{duration: 1.2}}
        className="flex flex-col absolute-center hero-section max-width">
          <div className="pre-Heading" style={{letterSpacing: ".2rem"}}>• Fueling Innovation, Empowering Entrepreneurs •</div>
        <div 
        
        className="hero-heading"style={{letterSpacing: ".1rem"}}>
          Welcome To Entrepreneurship Cell
        </div>
        <div className="hero-subheading" style={{letterSpacing: ".2rem"}}>
          ABES Engineering college, Ghaziabad
        </div>
        
      </motion.div>
    </div>
  );
};

export default HeroSection;
