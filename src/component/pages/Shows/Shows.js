import React from "react";
import "./shows.css";
import { Tes } from "./showdata";
import img1 from "../../assets/Tes/13.jpg";
import OnScrollReveal from "../../onscrolleffect/OnScrollReveal";
import { Link } from "react-router-dom";

function Shows() {
  return (
    <OnScrollReveal>
    <div className="dcontainer show_bg" id="shows">
      <div className="space"></div>
      <div className="heading">
        <h1>TES ' 23</h1>
      </div>
      <p className="text-center contact_p">The Entrepreneur Show</p>

      <div className="shows-container max-width">
        <div className="show_slide">
          <div className="dcontainer max-width">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide div_outer"
              data-bs-ride="carousel"
            >
              {/* <div className="div_inner1"></div>
              <div className="div_inner2"></div>
              <div className="div_inner3"></div> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img1} className="d-block w-100" alt="..." />
                </div>
                {Tes.map((image, i) => (
                  <div key={i} className="carousel-item">
                    <img src={image} className="d-block w-100" alt="..." />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="content_show">
          <p>
            On February 17, 2023, the Entrepreneurship Cell of ABES Engineering
            College organized an event called TES 2.0, which featured Sandeep
            Jain as a guest speaker. Jain is the founder and CEO of
            GeeksforGeeks, a popular platform for computer science students and
            professionals to learn and practice coding. During the event, Jain
            shared his journey of building GeeksforGeeks from scratch to one of
            the largest online communities for computer science enthusiasts. He
            also shared insights into the current trends and opportunities in
            the tech industry, and how aspiring entrepreneurs can leverage them
            to build successful startups. The event was attended by students and
            faculty members from ABES Engineering College, as well as other
            institutions in the region. It provided an excellent opportunity for
            aspiring entrepreneurs to learn from a successful startup founder
            and gain valuable insights into the tech industry.
          </p>
          </div>
      </div>
    </div>
    </OnScrollReveal>
  );
}

export default Shows;
