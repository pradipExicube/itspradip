import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Container, Col } from "react-bootstrap";
import "./Resume.css";

import ionicLogo from "../../images/image/ionic.svg";

function ResumeScreen(props) {
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
      <div className="resume-mainDiv">
        <div className="resume-subDiv">
          <div className="customFont">SUMMARY</div>

          <div className="resume-insideText">
            <div className="resume-knowmore">Resume</div>
            <div className="resume-borderMainDiv">
              <div className="borderStyle"></div>
            </div>
          </div>
        </div>

        <Container>
          <Row >
            <Col xs={12} md={12} lg={6}>
              <div className="desc-title box">My Education</div>
              {services.map((item, index) => {
                return (
                  <Col xs={12} md={12} lg={11}>
                    <div style={{ color: "white", background: "#111418",marginBottom:20,padding:20,borderRadius:5 }}>
                      <div>
                        <span style={{borderRadius:10,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,background:'red',fontSize:13,letterSpacing:0.5}}>
                          2000-2004
                        </span>
                      </div>
                      <div style={{paddingTop:20,fontWeight:'600',letterSpacing:0.5,fontSize:18}}> Computer Science </div>
                      <div style={{paddingTop:8, color:'#ff0000',letterSpacing:0.5}}> Techno india unoversity </div>
                      <div style={{paddingTop:8,color:'rgba(255,255,255,.5)'}}> 
                      I help you build brand for your business at an affordable
                      price. Thousands of clients have procured exceptional
                       </div>
                    
                    
                    </div>
                  </Col>
                );
              })}
            </Col>
            <Col xs={12} md={12} lg={6}>
              <div className="desc-title box">My Experiences</div>
              {services.map((item, index) => {
                return (
                  <Col xs={12} md={12} lg={11}>
                    <div style={{ color: "white", background: "#111418",marginBottom:20,padding:20,borderRadius:5 }}>
                      
                      <div>
                        <span style={{borderRadius:10,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,background:'red',fontSize:13,letterSpacing:0.5}}>
                          2012-2016
                        </span>
                      </div>
                      <div style={{paddingTop:20,fontWeight:'600',letterSpacing:0.5,fontSize:18}}> Software Developer</div>
                      <div style={{paddingTop:8, color:'#ff0000',letterSpacing:0.5}}> Ivan infotech pvt. ltd. </div>
                      <div style={{paddingTop:8,color:'rgba(255,255,255,.5)'}}> 
                      I help you build brand for your business at an affordable
                      price. Thousands of clients have procured exceptional
                       </div>


                    </div>
                  </Col>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ResumeScreen;
