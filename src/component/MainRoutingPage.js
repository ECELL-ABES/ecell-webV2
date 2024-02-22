import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./pages/Header/Header";
import HomePage from "./pages/HomePage";
import Event from "./pages/Events/Event";
import Team from "./pages/Team/Team";
import Gallery from "./pages/Gallery/Gallery";
import Contactus from "./pages/contact/Contactus";
import Footer from "./pages/footer/Footer";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import PastSpeaker from "./pages/Past Speaker/PastSpeaker";
import videoFile from "./assets/bg/startup.gif";
import EventDetails from "./pages/Events/EventDetails/EventDetails";
import ScrollToTop from "./ScrollToTop";
import Upload from "./pages/Gallery/Upload";

function MainRoutingPage() {
  //   const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/events"
            exact
            element={
              <>
                <Event />
              </>
            }
          />
          <Route
            path="/meetourteam"
            exact
            element={
              <>
                <Team />
              </>
            }
          />
          <Route
            path="/gallery"
            exact
            element={
              <>
                <Gallery />
              </>
            }
          />
          {/* <Route path='/domainuploadfiles' exact element={<><Upload/>
    </>} /> */}
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/pastspeaker" element={<PastSpeaker />} />{" "}
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default MainRoutingPage;
