import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./eventDetails.css";
import { Tes23 } from "./eventDetailsData";
import OnScrollReveal from "../../../onscrolleffect/OnScrollReveal";

function EventDetails() {

  const { id } = useParams();
  const [com, setCom] = useState(null);

  useEffect(() => {
    let com = Tes23.find((com) => com.id === parseInt(id));
    if (com) {
      setCom(com);
    }
  }, []);

  return (
    <OnScrollReveal className="">
      {com ? (
    <div className="dcontainer eventdetail_bg"
    style={{ backgroundImage: `url(${com.img})` }}
    id="eventdetails">
      <div className="space"></div>
      <div className="space"></div>
      <div className="heading">
        <h1>{com.title}</h1>
      </div>
      <p className="text-center contact_p">{com.subTitle}</p>

      <div className="eventdetails-container max-width">
        <div className="content_eventdetail">
          {com.desc}
        </div>
      </div>
    </div>
      )
    :(
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
    </OnScrollReveal>
  );
}

export default EventDetails;
