import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Row,
  Container,
  Col,
  Image,
  ProgressBar,
} from "react-bootstrap";
import "./Resume.css";

import ionicLogo from "../../images/image/ionic.svg";
import { MdDownload } from "react-icons/md";

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

  const mySkills = [
    { name: "Javascript", score: 60 },
    { name: "React Native", score: 65 },
    { name: "Ionic Framework", score: 60 },
    { name: "Typescript", score: 50 },
    { name: "React JS", score: 50 },
    { name: "HTML & CSS", score: 55 },
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
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6} lg={6}>
              <div className="desc-title box">My Education</div>
              {services.map((item, index) => {
                return (
                  <Col xs={12} md={12} lg={12}>
                    <div
                      style={{
                        color: "white",
                        background: "#111418",
                        marginBottom: 20,
                        padding: 20,
                        borderRadius: 5,
                      }}
                    >
                      <div>
                        <span
                          style={{
                            borderRadius: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            background: "red",
                            fontSize: 13,
                            letterSpacing: 0.5,
                          }}
                        >
                          2000-2004
                        </span>
                      </div>
                      <div
                        style={{
                          paddingTop: 20,
                          fontWeight: "600",
                          letterSpacing: 0.5,
                          fontSize: 18,
                        }}
                      >
                        {" "}
                        Computer Science{" "}
                      </div>
                      <div
                        style={{
                          paddingTop: 8,
                          color: "#ff0000",
                          letterSpacing: 0.5,
                        }}
                      >
                        {" "}
                        Techno india unoversity{" "}
                      </div>
                      <div
                        style={{ paddingTop: 8, color: "rgba(255,255,255,.5)" }}
                      >
                        I help you build brand for your business at an
                        affordable price. Thousands of clients have procured
                        exceptional
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="desc-title box">My Experiences</div>
              {services.map((item, index) => {
                return (
                  <Row className="justify-content-end align-items-center">
                    <Col xs={12} md={12} lg={12} className="ml-auto">
                      <div
                        style={{
                          color: "white",
                          background: "#111418",
                          marginBottom: 20,
                          padding: 20,
                          borderRadius: 5,
                        }}
                      >
                        <div>
                          <span
                            style={{
                              borderRadius: 10,
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingTop: 10,
                              paddingBottom: 10,
                              background: "red",
                              fontSize: 13,
                              letterSpacing: 0.5,
                            }}
                          >
                            2012-2016
                          </span>
                        </div>
                        <div
                          style={{
                            paddingTop: 20,
                            fontWeight: "600",
                            letterSpacing: 0.5,
                            fontSize: 18,
                          }}
                        >
                          {" "}
                          Software Developer
                        </div>
                        <div
                          style={{
                            paddingTop: 8,
                            color: "#ff0000",
                            letterSpacing: 0.5,
                          }}
                        >
                          {" "}
                          Ivan infotech pvt. ltd.{" "}
                        </div>
                        <div
                          style={{
                            paddingTop: 8,
                            color: "rgba(255,255,255,.5)",
                          }}
                        >
                          I help you build brand for your business at an
                          affordable price. Thousands of clients have procured
                          exceptional
                        </div>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Container>

        <Container>
          <div
            style={{
              color: "white",
              paddingBottom: 10,
              letterSpacing: 1,
              fontSize: 24,
              fontWeight: "600",
              marginTop: 30,
            }}
          >
            My Skills
          </div>
          <Row>
            {mySkills.map((item, index) => {
              return (
                <Col xs={12} md={6} lg={6} style={{ marginBottom: 30 }}>
                  <div
                    style={{
                      color: "white",
                      paddingBottom: 10,
                      letterSpacing: 1,
                    }}
                  >
                    {item?.name}
                  </div>
                  <ProgressBar
                    style={{ height: 10 }}
                    now={item?.score}
                    label={`${item?.score}%`}
                    animated={false}
                    variant={"danger"}
                    striped={false}
                  />
                </Col>
              );
            })}
          </Row>

          <Row className="justify-content-md-center">
            <div style={{justifyContent:'center',display:"flex",flexDirection:'row'}}>
              <Button
                onClick={() => {
                  window.open(cvURL);
                }}
                variant="outline-danger"
                className="downloadCV"
              >
                <div style={{justifyContent:'center',flexDirection:'row',display:'flex'}}>
                  <div style={{justifyContent:'center'}}>
                  Download CV
                  </div>
                  <div style={{justifyContent:'center'}}>
                  <MdDownload color="white" style={{marginLeft:5}} />
                  </div>
                </div>
              </Button>
            </div>
          </Row>
        </Container>

        <Container>
          {/* <Row className="justify-content-center align-items-center">
          {[1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => {
            return<Col xs={5} md={3} lg={3} style={{position:'relative'}} >
            
               <Image src="https://picsum.photos/200/200" thumbnail className="mb-4 mb-xs-3 mb-mb-4 mb-lg-5"  />
              <div style={{position:"absolute",top:5,left:15,background:'black',height:200,width:200}}>

              </div>
            </Col>
          })
            }
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default ResumeScreen;
