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
import Massage from './mentorMassage/Massage';
// import Headersocials from './Header/Headersocials';


function HomePage() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>{
      loading? 
      <div style={{display: 'flex', 
      justifyContent: 'center',
       alignItems: 'center',
       height:'100vh'}}>
      <ClimbingBoxLoader color="#36d7b7" />
      </div>
      :
    (<>
    <Header/>
    
      <HeroSection/>
      <About/>
      <Event/>
      <div className="non-mobile">
        <WindowPeak />
      </div> 
      <Massage/>     
      <Team/>
      <Gallery/>
      <Contact/>
      <Footer/>
      {/* <ErrorPage/> */}
    </>
    )}
    </>
  );
}

export default HomePage;
