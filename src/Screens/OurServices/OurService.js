import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./OurService.css";

import ionicLogo from "../../images/image/ionic.svg";

function OurserviceScreen(props) {
  const navigate = useNavigate();
  const cvURL =
    "https://drive.google.com/file/d/1NZY5ywhj6T06tjJ3BJoGG8hypX4afsj2/view?usp=sharing";
  const services = [
    {
      s_name: "Ionic Framework",
      s_description:
        "I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional resultswhile working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimenbook.",
      s_imgUrl: ionicLogo,
    },
    {
      s_name: "Ionic Framework",
      s_description:
        "I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional resultswhile working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimenbook.",
      s_imgUrl: ionicLogo,
    },
    {
      s_name: "Ionic Framework",
      s_description:
        "I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional resultswhile working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimenbook.",
      s_imgUrl: ionicLogo,
    },
  ];

  return (
    <>
      <div className="service-mainDiv">
        <div className="service-subDiv">
          <div className="customFont"> SERVICES</div>

          <div className="service-insideText">
            <div className="service-knowmore">What I Do?</div>
            <div className="service-borderMainDiv">
              <div className="borderStyle"></div>
            </div>
          </div>
        </div>


				<div className="service-descriptionDiv">
				<div className="repeat-mainDiv">
				{services.map((item, index) => {
              return <div className="repeat-container">
                <div className="repeat-imgContainer">
                  <img
                    src={item?.s_imgUrl}
                    alt="ionicicon"
										className="repeat-img"
                  />
                </div>

                <div className="repeat-desc-div">
                  <div className="desc-title">{item?.s_name}</div>
                  <div className="desc-content">{item?.s_description}</div>
                </div>
              </div>;
            })}
				</div>
				</div>



      </div>
    </>
  );
}

export default OurserviceScreen;
