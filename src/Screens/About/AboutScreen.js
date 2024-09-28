import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AboutScreen.css";
function AboutScreen(props) {
  const navigate = useNavigate();
  const cvURL = "https://drive.google.com/file/d/1NZY5ywhj6T06tjJ3BJoGG8hypX4afsj2/view?usp=sharing";


  return (
    <>
      <div className="about-mainDiv">
        <div className="about-subDiv">
          <div className="customFont"> About ME</div>

          <div className="about-insideText">
            <div className="about-knowmore">Know Me More</div>
            <div className="about-borderMainDiv">
              <div className="borderStyle"></div>
            </div>
          </div>
        </div>

        <div className="about-descriptionDiv">
          <div className="about-row-one">
            <div className="row-one-heading">I'm <strong style={{color:'red'}}>Pradip Mondal,</strong> a App Developer</div>
            <div className="row-one-desc1">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </div>

            <div className="row-one-desc1">
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </div>
          </div>

          <div style={{flex:0.3}}></div>

          <div className="about-row-two">
            <div className="row-two-mainDiv">
                <div className="row-two-item1"><strong>Name: </strong><div>&nbsp;Pradip Mondal</div></div>
                <div className="row-two-item2"><strong>Email: </strong>
                  <div onClick={()=>{
                      window.location.href = 'mailto:pradipm.info@gmail.com';
                    }}>
                    &nbsp;pradipm.info@gmail.com
                  </div>
                </div>
                <div className="row-two-item3"><strong>From: </strong><div>&nbsp;Kolkata, India</div></div>

                <div>
                <Button 
                  onClick={()=>{window.open(cvURL)}} 
                  variant="outline-danger" 
                  className="downloadCV"
                >
                  Download CV
                </Button>{" "}
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default AboutScreen;
