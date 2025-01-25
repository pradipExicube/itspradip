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
      year:'2019 - Current',
      course:"Application Developer",
      from_where:"Ivan infotech Pvt. Ltd.",
      description:"I am responsible for building High performance Mobile Application using Ionic framework and Cordova and react native."
      // description:"I am responsible for building High performance Mobile"
    },
    {
      year:'2017 - 2019',
      course:"Software Developer",
      from_where:"Exicube App Solutions Pvt. Ltd.",
      description:"I am responsible for building High performance Mobile Application using Ionic framework and Cordova and react native "
    },
    {
      year:'2016 - 2017',
      course:"Software Developer",
      from_where:"Purple Fox Labs",
      description:"I am responsible for building Mobile Application using Ionic framework and Cordova. "
    },
  ];

  const education = [
    {
      year:'2011 - 2014',
      course:"Bachelor of Computer Application",
      from_where:"Techno India Institute of Technology",
      description:"I am purchasing BCA degree (Bachelor of computer application) from Techno India Institute of Technology"
    },
    {
      year:'2010 - 2011',
      course:"Higher Secondary",
      from_where:"Jyangra Adarsha Vidyamandir",
      description:"I am purchasing my higher secondary degree from Jyangra Adarsha Vidyamandir"
    },
    {
      year:'2008 - 2009',
      course:"Secondary Education",
      from_where:"Prafulla Kanan Deshapriya Vidyamandir",
      description:"I am purchasing my secondary degree from Prafulla Kanan Deshapriya Vidyamandir"
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
              {education.map((item, index) => {
                return (
                  <Col xs={12} md={12} lg={12} >
                    <div
                      style={{
                        color: "white",
                        background: "#111418",
                        marginBottom: 20,
                        padding: 20,
                        borderRadius: 5,
                        // minHeight:200
                        minHeight:220
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
                          {item?.year}
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
                        {`${item?.course} `}
                      </div>
                      <div
                        style={{
                          paddingTop: 8,
                          color: "#ff0000",
                          letterSpacing: 0.5,
                        }}
                      >
                        {" "}
                        {`${item?.from_where} `}
                      </div>
                      <div
                        style={{ paddingTop: 8, color: "rgba(255,255,255,.5)" }}
                      >
                        {item?.description}
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
                          // minHeight:200
                          minHeight:220
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
                            {item?.year}
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
                          {`${item?.course} `}
                        </div>
                        <div
                          style={{
                            paddingTop: 8,
                            color: "#ff0000",
                            letterSpacing: 0.5,
                          }}
                        >
                          {" "}
                          {`${item?.from_where} `}
                        </div>
                        <div
                          style={{
                            paddingTop: 8,
                            color: "rgba(255,255,255,.5)",
                          }}
                        >
                          {/* I help you build brand for your business at an
                          affordable price. Thousands of clients have procured
                          exceptional */}
                          {`${item?.description} `}
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
                      letterSpacing: 1
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
