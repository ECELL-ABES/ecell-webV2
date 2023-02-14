import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo1 from "../../assets/logos/ecell_abes.png";
import Logo2 from "../../assets/logos/INIF_LOGO.png";
import { motion } from "framer-motion";
import {CgMenuGridR} from 'react-icons/cg'
import {IoCloseSharp} from 'react-icons/io5';
import './navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      
      <div className="nav-logo-div1"><a href="#">
        <img
          className="log_img"
          src={Logo1}
          style={{ maxWidth: "100%", maxHeight: "100%", display: "block", marginTop:"25px" }}
          alt=""
          onClick={closeMobileMenu}
        /></a></div>
      <div className="nav-logo-div2"><a href="#">
        <img
          className="log_img"
          src={Logo2}
          style={{ maxWidth: "100%", maxHeight: "100%", display: "block", marginTop:"25px" }}
          alt=""
          onClick={closeMobileMenu}
        /></a></div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li> */}
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="#"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </motion.li>
          {/* <li className="nav-item">
            <NavLink
              to="/gallery"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </li> */}
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="#about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
          </motion.li>
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="#event"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Insights
            </a>
          </motion.li>
          
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="#teams"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Our Team
            </a>
          </motion.li>
          {/* <li className="nav-item">
            <a href="#" to="/team" className="nav-links" onClick={closeMobileMenu}>
              Our Team
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="#" to="/faq" className="nav-links" onClick={closeMobileMenu}>
              Faq's
            </a>
          </li> */}
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="#gallery"
              className="nav-links"
              onClick={closeMobileMenu}
            >
                Gallery
            </a>
          </motion.li>
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="#contact"
              to="/updates"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Get in Touch
            </a>
          </motion.li>
          
        </ul>
        <div className="menu-icon" onClick={handleClick}>
          { click ? <IoCloseSharp /> : <CgMenuGridR /> }
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;