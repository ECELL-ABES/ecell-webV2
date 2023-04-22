import React, {useState, useEffect} from 'react'
import About from './About/About';
import Event from './Events/Event';
import Footer from './footer/Footer';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import MobileScroll from './MobileScroll/MobileScroll';
import Team from './Team/Team';
import WindowPeak from './WindowPeak';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ErrorPage from './Error/ErrorPage';
import Contact from './contact/Contact';
import Contactus from './contact/Contactus';
import Massage from './mentorMassage/Massage';
import Shows from './Shows/Shows';
import PitchIdea from './PitchIdea/PitchIdea';
import { Card } from '@chakra-ui/react';
import TCard from './card/TCard';
// import Headersocials from './Header/Headersocials';


function HomePage() {

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      <HeroSection/>
      <About/>
      <Massage/>     
      <Shows/>
      <Event/>
      {/* <Team/> */}
      {/* <Gallery/> */}
      {/* <Contact/> */}
      {/* <Contactus/> */}
      <PitchIdea/>
      {/* <TCard/> */}
      {/* <Footer/> */}
      {/* <ErrorPage/> */}
    </>
  );
}

export default HomePage;
