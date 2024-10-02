import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button,Container,Row,Col } from "react-bootstrap";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import "./WelcomeScreen.css";
import introBg from "../../images/image/intro-bg.jpg";
import HomeScreen from "../Home/HomsScreen";
import AboutScreen from "../About/AboutScreen";
import OurserviceScreen from "../OurServices/OurService";
import ResumeScreen from "../Resume/Resume";
function WelcomeScreen(props) {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${introBg})`,
    backgroundSize: "cover", // Adjusts the image to cover the entire area
    backgroundPosition: "center", // Centers the image
    height: "90vh", // Make the background image take up full viewport height
    width: "100%",
    // opacity:0.5,
    // backgroundColor: '#000'
    backgroundSize: 'cover',
  };


  const homeComponentRef = useRef(null);
  const AboutComponentRef = useRef(null);
  const OurserviceComponentRef = useRef(null);
  const ResumeComponentRef = useRef(null);

  const scrollToSecondComponent = (page) => {
    // alert (page);
    switch (page) {
      case "home":
        homeComponentRef.current.scrollIntoView({ behavior: "smooth" });
      case "about":
        AboutComponentRef.current.scrollIntoView({ behavior: "smooth" });
      case "ourservice":
        OurserviceComponentRef.current.scrollIntoView({ behavior: "smooth" });
      case "resume":
        ResumeComponentRef.current.scrollIntoView({ behavior: "smooth" });
      // case 'home': secondComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // secondComponentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [hoveredSection, setHoveredSection] = useState(null);

  // Function to handle mouse entering a section
  const handleMouseEnter = (sectionName) => {
    setHoveredSection(sectionName);
  };

  // Function to handle mouse leaving a section (optional)
  const handleMouseLeave = () => {
    setHoveredSection(null); // Clear the hovered section when the mouse leaves
  };





  useEffect(() => {
  }, []);

  return (
    <>
      {/* <div style={backgroundStyle}>
        <div>ckjsdckjsdcds</div>
      </div> */}
      <div
          ref={homeComponentRef}
          id="home"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <HomeScreen />
        </div>
        <div
          ref={AboutComponentRef}
          id="about"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <AboutScreen />
        </div>

        <div
          ref={OurserviceComponentRef}
          id="ourservice"
          onMouseEnter={() => handleMouseEnter("ourservice")}
          onMouseLeave={handleMouseLeave}
        >
          <OurserviceScreen />
        </div>

        <div
          ref={ResumeComponentRef}
          id="resume"
          onMouseEnter={() => handleMouseEnter("resume")}
          onMouseLeave={handleMouseLeave}
        >
          <ResumeScreen />
        </div>
    </>
  );
}

export default WelcomeScreen;










{/* <div
          ref={homeComponentRef}
          id="home"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <HomeScreen />
        </div>
        <div
          ref={AboutComponentRef}
          id="about"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <AboutScreen />
        </div>

        <div
          ref={OurserviceComponentRef}
          id="ourservice"
          onMouseEnter={() => handleMouseEnter("ourservice")}
          onMouseLeave={handleMouseLeave}
        >
          <OurserviceScreen />
        </div>

        <div
          ref={ResumeComponentRef}
          id="resume"
          onMouseEnter={() => handleMouseEnter("resume")}
          onMouseLeave={handleMouseLeave}
        >
          <ResumeScreen />
        </div>  */}