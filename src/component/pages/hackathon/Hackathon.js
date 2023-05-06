import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import AnimatedCursor from "react-animated-cursor";

import Footer from "../Footer.jsx";
import "./Opportunity.css";

// import IMG1 from "../assets/corporate.png";
import IMG1 from "../../assets/hackwithinfylogo.png";
import IMG2 from "../../assets/dch.png";
import IMG3 from "../../assets/sihlogo.png";
import IMG4 from "../../assets/gdh.png";
import Navbar from "../Navbar.jsx";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "HackWithInfy",
    about:
      "HackWithInfy is a coding competition for engineering students across India. The program is specially designed to inculcate a culture of rapid problem-solving and innovative thinking early in academic life.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Devbhomi Hackathon",
    about:
      " Devbhoomi Cyber Hackathon is providing a platform for you to outdo, outthink and outcode your biggest opponent - yourself. ",
  },
  {
    id: 3,
    image: IMG3,
    title: "Smart India Hackathon",
    about:
      "SIH brings the next generation evolution by inclusion of new methodology to inculcate the culture of startup and innovation ecosystem across different age groups.",
  },
  {
    id: 4,
    image: IMG4,
    title: "Google Hackathon",
    about:
      "Start-ups contribute to economic development & entrepreneurs generate new ideas, which are essential for constant innovation and competition.",
  },
  
];

const Hackathon = () => {
  return (
    <div>
      {/* <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
      /> */}
      <Navbar/>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <div className="container container-top cards-top-head">
          <h1
            className="Ultrabold comp"
            style={{ marginTop: "8rem", marginBottom: "7rem" }}
          >
            HackAthon
          </h1>
        </div>
        <div className="container"><section id="company">
          <div className="company-grid">
            {data.map(({ id, link,image, title, about }) => {
              return (
                <Link to = {`${id}`}>
                <div class="company_box" style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: '60%'
                }}>
                <div id="titleTrack"style={{display: 'flex'}}>
                  <h2 style={{ marginTop: "75%", marginLeft: "auto", marginRight: "auto" }}>
                    {title}
                  </h2></div>
                  <div class="overlay">
                    <div class="company_box_text">
                      <p>{about}</p><br />
                      <Link to = {`${id}`}
                        className="btn btn-primary"
                        style={{ fontSize: "0.8rem"}}
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
                </Link>
              );
            })}
          </div></section>
        </div>        
      </motion.div>      
      <br /><br />
      <hr style={{width: '80vw', margin: 'auto'}}/>
      <Footer />
    </div>
  );
};

export default Hackathon;
