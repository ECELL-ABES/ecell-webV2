import React from 'react'
import {BrowserRouter as Router, Routes , Route, BrowserRouter} from 'react-router-dom';
import Header from './pages/Header/Header';
import HomePage from './pages/HomePage';
import Event from './pages/Events/Event';
import Team from './pages/Team/Team';
import Gallery from './pages/Gallery/Gallery';
import Contactus from './pages/contact/Contactus';
import Footer from './pages/footer/Footer';
import { useState, useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import PastSpeaker from './pages/Past Speaker/PastSpeaker';

function MainRoutingPage() {

    const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
<>
    
 {
      loading? 
      <div style={{display: 'flex', 
      justifyContent: 'center',
       alignItems: 'center',
       height:'100vh'}}>
      <ClimbingBoxLoader color="#36d7b7" />
      </div>
      :
    (
    <Router>
    <Header/>
    <Routes>
    <Route path='/' exact element={<><HomePage/>
    </>} />
    
    
    <Route path='/events' exact element={<><Event/>
    </>} />
    
    <Route path='/meetourteam' exact element={<><Team/>
    </>} />
    
    <Route path='/gallery' exact element={<><Gallery/>
    </>} />
    
   <Route path='/contactus' element={<Contactus/>} />
   <Route path='/pastspeaker' element={<PastSpeaker/>} />
   
   </Routes>  
   <Footer/>
    </Router>
    )}
</>
  )
}

export default MainRoutingPage