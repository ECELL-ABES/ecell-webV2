import React from "react";
import achv1 from "../../assets/Achievements/achv1.jpg";
import achv2 from "../../assets/Achievements/achv2.jpg";
import achv3 from "../../assets/Achievements/achv3.jpg";
import achv4 from "../../assets/Achievements/achv4.jpg";
import achv5 from "../../assets/Achievements/achv5.jpg";
import achv6 from "../../assets/Achievements/achv6.jpg";
import "./shows.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Shows() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2200,
  };
  return (
    <>
      <div className="achievement-section">
        {/* <h1 className="blue-text"> Achievements</h1> */}
        <div className="achievement-section-container1">
          {/* <p className="small-gray-text">E-Cell Team Soars to New Heights</p> */}
          <h1 className="blue-text">A Celebration of Innovation and Impact</h1>
          <br />
          <p className="medium-text">
            To be the our customers want us to be , it takes an election group
            of <br /> passionate operators.Get to know the people leading the
            way towards success.
          </p>
        </div>
        <div className="achievement-section-carousel">
          <Slider {...settings}>
            <div>
              <div className="achievement-section-container2">
                <div className="content-left">
                  <p className="small-gray-text">
                    <b>National Recognition </b>
                  </p>
                  <h2 className="blue-text">
                    National Entrepreneurship Challenge 2023: IITB
                  </h2>
                  <p className="medium-text">
                    The team's dedication to nurturing aspiring entrepreneurs
                    has translated into a remarkable accomplishment: a{" "}
                    <b>27th place finish </b> in the{" "}
                    <b> prestigious National Entrepreneurship Challenge 2023</b>
                    . This national recognition solidifies E-Cell's position as
                    a leading force in shaping the future of entrepreneurship,
                    not just regionally, but nationwide.
                  </p>
                </div>
                <div className="content-right">
                  <img className="content-right-image" src={achv1} />
                </div>
              </div>
            </div>

            <div>
              <div className="achievement-section-container2">
                <div className="content-left">
                  <p className="small-gray-text">
                    <b>Building Powerhouse Collaborations</b>
                  </p>
                  <h2 className="blue-text">
                    Strategic Partnerships with Premiere Institutes like IIIT
                    Delhi and more
                  </h2>
                  <p className="medium-text">
                    Recognizing the power of synergy, E-Cell has forged
                    strategic partnerships with premier institutes like{" "}
                    <b> IIIT Delhi, KIET, RLAC, and IMS Ghaziabad </b>. These
                    collaborations act as bridges, expanding their reach and
                    influence, ultimately impacting a wider network of aspiring
                    entrepreneurs. By joining forces with these like-minded
                    institutions, E-Cell creates a collaborative environment
                    where knowledge, resources, and opportunities seamlessly
                    flow, fostering an even more vibrant ecosystem.
                  </p>
                </div>
                <div className="content-right">
                  <img className="content-right-image" src={achv2} />
                </div>
              </div>
            </div>

            <div>
              <div className="achievement-section-container2">
                <div className="content-left">
                  <p className="small-gray-text">
                    <b> A Hub of Engaging Events</b>
                  </p>
                  <h2 className="blue-text">
                    Conducted events to encourage Enterpreneurships
                  </h2>
                  <p className="medium-text">
                    The team hasn't stopped at forging partnerships; they've
                    also transformed into a powerhouse of engaging events and
                    workshops. From <b> E-Summit , TES 1.0, Achiever Talk</b>{" "}
                    TES 2.0 and <b> Mock IPL Auction</b> to{" "}
                    <b>
                      {" "}
                      Funding It Funny, Heaven Threads, Figma Workshop, LinkedIn
                      Workshop, Market Analysis Workshop, and Visual Walk
                    </b>
                    , the E-Cell calendar has been bursting with exciting
                    opportunities. These events equip participants with valuable
                    skills and knowledge, empowering them to navigate the
                    intricate world of entrepreneurship with confidence.
                  </p>
                </div>
                <div className="content-right">
                  <img className="content-right-image" src={achv3} />
                </div>
              </div>
            </div>

            <div>
              <div className="achievement-section-container2">
                <div className="content-left">
                  <p className="small-gray-text">
                    <b> Bridging the Gap: Immersive Real-World Exposure</b>
                  </p>
                  <h2 className="blue-text">
                    Offline Visits to multiple startup organizations and more..
                  </h2>
                  <p className="medium-text">
                    Understanding the importance of practical experience, E-Cell
                    organized insightful offline visits to{" "}
                    <b>
                      {" "}
                      GFG, IIIT DELHI, IIT Delhi, IIT Kanpur, Christ
                      University,UP summit, Aajtak Sahitya, and Bennett
                      University
                    </b>
                    . These immersive experiences exposed members to the
                    realities of the business world, allowing them to witness
                    entrepreneurial journeys firsthand. Such exposure serves as
                    a valuable stepping stone, bridging the gap between
                    theoretical knowledge and the practical application of those
                    concepts in the real world.
                  </p>
                </div>
                <div className="content-right">
                  <img className="content-right-image" src={achv4} />
                </div>
              </div>
            </div>

            <div>
              <div className="achievement-section-container2">
                <div className="content-left">
                  <p className="small-gray-text">
                    <b> Beyond Benchmarks</b>
                  </p>
                  <h2 className="blue-text">
                    State-Level Innovation Jeopardy Champions
                  </h2>
                  <p className="medium-text">
                    Our team's intellectual agility and entrepreneurial prowess
                    were on full display as we clinched the State-Level
                    Innovation and Entrepreneurship Jeopardy competition. This
                    victory is a testament to our members' dedication to
                    innovation and their sharp understanding of the
                    entrepreneurial landscape.
                  </p>
                </div>
                <div className="content-right">
                  <img className="content-right-image" src={achv5} />
                </div>
              </div>
            </div>

            <div>
              <div className="achievement-section-container2">
                <div className="content-left">
                  <p className="small-gray-text">
                    {" "}
                    <b> Beyond Benchmarks </b>
                  </p>
                  <h2 className="blue-text">Inspiring Talks</h2>
                  <p className="medium-text">
                    E-Cell hosted prominent speakers like{" "}
                    <b>Mr. Sandeep Jain </b> , founder of GFG and owner of Jain
                    Shikanji, and <b> Mr. Anubhav Jain </b>, who shared their
                    entrepreneurial journeys and valuable insights with our
                    members. These interactions provided invaluable guidance and
                    fueled the aspirations of budding entrepreneurs.
                  </p>
                </div>
                <div className="content-right">
                  <img className="content-right-image" src={achv6} />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Shows;
