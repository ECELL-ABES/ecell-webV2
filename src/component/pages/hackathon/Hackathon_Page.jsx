import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { hackathondata } from "./hackathondata";
import Navbar from "../Navbar";
import "../../styles/Page.css";
import "./hackathon.css"
import Footer from "../Footer";
import HomeLast from "../HomeLast";
// import AnimatedCursor from "react-animated-cursor";

const Hackathon_Page = () => {
  const { id } = useParams();
  const [com, setCom] = useState(null);

  useEffect(() => {
    let com = hackathondata.find((com) => com.id === parseInt(id));
    if (com) {
      setCom(com);
    }
  }, []);

  return (
    <>
      <div>
      {/* <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #fff',
        }}
        /> */}
        
        <Navbar />
      </div>
      {com ? (
        <div style={{backgroundColor:'rgba(68, 68, 68, 0.4)'}}>
          <img src={com.cover} alt="" className="hero-comp-img" />
          <div className="container pg-container">
            <h1
              className="Ultrabold"
              style={{
                fontSize: "3rem",
                marginTop: "3rem",
                marginBottom: "4rem",
                textAlign: "center",
              }}
            >
              {com.company}
            </h1>
            <p
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.1rem" }}
            >
              {com.about}
            </p>
            <h3
              className="Regular"
              style={{
                fontSize: "2rem",
                marginTop: "8rem",
                marginBottom: "2rem",
              }}
            >
              Problem Statement
            </h3>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "4rem",
                marginBottom: "2rem",
                fontSize: "1.1rem",
              }}
            >
              {com.problem}
            </p>
            <h3
              className="Regular"
              style={{
                fontSize: "2rem",
                marginTop: "8rem",
                marginBottom: "2rem",
              }}
            >
              Rounds and Criteria
            </h3>
            {/* <h5
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              {com.jd}
            </h5> */}
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "4rem",
                marginBottom: "2rem",
                fontSize: "1.1rem",
              }}
            >
              {com.process}
            </p>
            <h3
              className="Regular"
              style={{
                fontSize: "2rem",
                marginTop: "8rem",
                marginBottom: "2rem",
              }}
            >
              Judging Criteria
            </h3>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "4rem",
                marginBottom: "2rem",
                fontSize: "1.1rem",
              }}
            >
              {com.judgingCriteria}
            </p>
            <h3
              className="Regular"
              style={{
                fontSize: "2rem",
                marginTop: "8rem",
                marginBottom: "2rem",
              }}
            >
              Reward
            </h3>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "4rem",
                marginBottom: "2rem",
                fontSize: "1.1rem",
              }}
            >
              {com.reward}
            </p>
            {/* <h3
              className="Regular"
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "6rem",
                marginBottom: "5rem",
              }}
            >
              Our Mentors
            </h3>
            {com.mentors} */}
          </div>
          <HomeLast />
          <Footer />
        </div>
      ) : (
        <h1
          className="Ultrabold"
          style={{
            fontSize: "3rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          {" "}
          System Error{" "}
        </h1>
      )}
    </>
  );
};

export default Hackathon_Page;
