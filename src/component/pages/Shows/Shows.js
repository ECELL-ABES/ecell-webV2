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
    autoplay: true,
    autoplaySpeed: 2000,
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
            way at Untilted.
          </p>
        </div>
        <div className="achievement-section-carousel">
          <Slider {...settings}>
            <div>
              <div className="achievement-section-container2">
                <div className="content-left">
                  <p className="small-gray-text">National Recognition</p>
                  <h2 className="blue-text">
                    National Entrepreneurship Challenge 2023: IITB
                  </h2>
                  <p className="medium-text">
                    The team's dedication to nurturing aspiring entrepreneurs
                    has translated into a remarkable accomplishment: a *27th
                    place finish* in the *prestigious National Entrepreneurship
                    Challenge 2023*. This national recognition solidifies
                    E-Cell's position as a leading force in shaping the future
                    of entrepreneurship, not just regionally, but nationwide.
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
                    Building Powerhouse Collaborations
                  </p>
                  <h2 className="blue-text">
                    Strategic Partnerships with Premiere Institutes like IIIT
                    Delhi and more
                  </h2>
                  <p className="medium-text">
                    Recognizing the power of synergy, E-Cell has forged
                    strategic partnerships with premier institutes like IIIT
                    Delhi, KIET, RLAC, and IMS Ghaziabad. These collaborations
                    act as bridges, expanding their reach and influence,
                    ultimately impacting a wider network of aspiring
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
                  <p className="small-gray-text">A Hub of Engaging Events:</p>
                  <h2 className="blue-text">
                    Conducted events to encourage Enterpreneurships
                  </h2>
                  <p className="medium-text">
                    The team hasn't stopped at forging partnerships; they've
                    also transformed into a powerhouse of engaging events and
                    workshops. From *E-Summit , TES 1.0, Achiever Talk* TES 2.0
                    and *Mock IPL Auction* to *Funding It Funny, Heaven Threads,
                    Figma Workshop, LinkedIn Workshop, Market Analysis Workshop,
                    and Visual Walk*, the E-Cell calendar has been bursting with
                    exciting opportunities. These events equip participants with
                    valuable skills and knowledge, empowering them to navigate
                    the intricate world of entrepreneurship with confidence.
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
                    Bridging the Gap: Immersive Real-World Exposure
                  </p>
                  <h2 className="blue-text">
                    Offline Visits to multiple startup organizations and more..
                  </h2>
                  <p className="medium-text">
                    Understanding the importance of practical experience, E-Cell
                    organized insightful offline visits to *GFG, IIIT DELHI, IIT
                    Delhi, IIT Kanpur, Christ University,UP summit, Aajtak
                    Sahitya, and Bennett University*. These immersive
                    experiences exposed members to the realities of the business
                    world, allowing them to witness entrepreneurial journeys
                    firsthand. Such exposure serves as a valuable stepping
                    stone, bridging the gap between theoretical knowledge and
                    the practical application of those concepts in the real
                    world.
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
                  <p className="small-gray-text">Beyond Benchmarks</p>
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
                  <p className="small-gray-text"> Beyond Benchmarks</p>
                  <h2 className="blue-text">Inspiring Talks</h2>
                  <p className="medium-text">
                    E-Cell hosted prominent speakers like Mr. Sandeep Jain,
                    founder of GFG and owner of Jain Shikanji, and Mr. Anubhav
                    Jain, who shared their entrepreneurial journeys and valuable
                    insights with our members. These interactions provided
                    invaluable guidance and fueled the aspirations of budding
                    entrepreneurs.
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
