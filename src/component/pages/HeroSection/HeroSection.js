import React from "react";
import { motion } from "framer-motion"
import "./heroSection.css";
import bg_hero from '../../assets/bg/bg_hero.png'

const HeroSection = () => {
  return (
<div className="hero-section-wrapper bg">
        <motion.div 
        initial={{y:-500}}
        animate={{y:0}}
        transition={{duration: 1.2}}
        className="flex flex-col absolute-center hero-section max-width">
          <div className="pre-Heading" style={{letterSpacing: ".1rem"}}>• From Ideas to Imprint •</div>
        <div 
        
        className="hero-heading"style={{letterSpacing: ".1rem"}}>
          Welcome To<br/> <span className="entrepreneurship"> Entrepreneurship</span> Cell
        </div>
        <div className="hero-subheading" style={{letterSpacing: ".2rem"}}>
          ABES Engineering college, Ghaziabad
        </div>
        
      </motion.div>
      <div className="bg_hero">
        <img src={bg_hero} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
