import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Container, Col } from "react-bootstrap";
import "./OurService.css";

import ionicLogo from "../../images/image/ionic.svg";
import reactLogo from "../../images/image/reactnative.svg";
import cordovaLogo from "../../images/image/cordova.svg";

function OurserviceScreen(props) {
  const navigate = useNavigate();
  const cvURL =
    "https://drive.google.com/file/d/1NZY5ywhj6T06tjJ3BJoGG8hypX4afsj2/view?usp=sharing";
  const services = [
    {
      s_name: "React Native",
      s_description:
        "React Native is an open-source mobile application development framework created by Facebook. It allows developers to build natively rendered mobile apps for Android, iOS, and UWP (Universal Windows Platform) using React, a JavaScript library for building user interfaces",
      s_imgUrl: reactLogo,
    },
    {
      s_name: "Ionic Framework",
      s_description:
        "The Ionic Framework is a popular open-source front-end framework for building hybrid mobile apps and progressive web apps. It uses web technologies such as HTML, CSS, and JavaScript to create native-like apps for mobile devices",
      s_imgUrl: ionicLogo,
    },
    {
      s_name: "Cordova",
      s_description:
        "Cordova is an open-source framework developed by Apache, primarily used for building hybrid mobile applications. It allows developers to create apps for multiple platforms, including Android and iOS, using a single codebase",
      s_imgUrl: ionicLogo,
    },
    {
      s_name: "React JS",
      s_description:
        "React JS is a popular JavaScript library used for building user interfaces and single-page applications. Developed by Facebook (now Meta), React allows developers to create reusable UI components and manage the state of complex applications efficiently.",
      s_imgUrl: reactLogo,
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

        <Container>
          <Row>
            {services.map((item, index) => {
              return (
                <Col xs={12} md={6} lg={6} color='white'>
                  <div style={{ display: "flex", flexDirection: "row",marginBottom:20 }}>
                    <div className="repeat-imgContainer">
                      <img
                        src={item?.s_imgUrl}
                        alt="ionicicon"
                        className="repeat-img"
                      />
                    </div>
                    <div style={{paddingLeft:20}}>
                      <div className="desc-title box">
                        {item?.s_name}
                      </div>
											<div className="desc-content box">
                        {item?.s_description}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OurserviceScreen;
