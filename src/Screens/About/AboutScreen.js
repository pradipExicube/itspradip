import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import styles from "./HomeScreen.css";
import { Button } from "react-bootstrap";
// import { FaFacebook,FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import "./AboutScreen.css";
import introBg from "../../images/image/intro-bg.jpg";
function AboutScreen(props) {
  const navigate = useNavigate();
  const dataV = "I'm a software developer|";

  const backgroundStyle = {
    // backgroundImage: "url('https://techinvein.com/wp-content/uploads/2021/11/3.png')",
    // backgroundImage: `url(${introBg})`,
    backgroundSize: "cover", // Adjusts the image to cover the entire area
    backgroundPosition: "center", // Centers the image
    height: "100vh", // Make the background image take up full viewport height
    width: "100%",
    // opacity:0.5,
    // backgroundColor: '#000' //
    // back
  };

  const staticText = "I'm "; // The part that stays the same
  const dynamicTexts = [
    "Pradip Mondal.",
    "a Freelancer.",
    "an App Developer.",
    "a Web Developer.",
  ]; // The dynamic part

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dynamicIndex, setDynamicIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); // To control cursor visibility
  const [pause, setPause] = useState(false); // Pause after completing typing

  useEffect(() => {
    const currentDynamicText = dynamicTexts[dynamicIndex];

    const handleTyping = () => {
      if (!pause) {
        if (!isDeleting && index < currentDynamicText.length) {
          // Typing forward for the dynamic part
          setDisplayedText(staticText + currentDynamicText.slice(0, index + 1));
          setIndex(index + 1);
        } else if (isDeleting && index > 0) {
          // Deleting the dynamic part
          setDisplayedText(staticText + currentDynamicText.slice(0, index - 1));
          setIndex(index - 1);
        } else if (!isDeleting && index === currentDynamicText.length) {
          // Start a pause before deleting
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 1500); // Pause for 1.5 seconds before deleting
        } else if (isDeleting && index === 0) {
          // Switch to the next dynamic text after deleting
          setIsDeleting(false);
          setDynamicIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
          setPause(true);
          setTimeout(() => setPause(false), 500); // Small pause before typing next text
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 200); // Faster for deleting

    return () => clearTimeout(timeout);
  }, [index, isDeleting, dynamicIndex, dynamicTexts, pause]);

  // Cursor Blinking Effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <>
      <div className="section bg-dark-1" style={{height:window.innerHeight,background:'#272727',position:'relative'}}>
        <div className="customFont" style={{color:'white',paddingTop:'6%',
        textTransform:'uppercase',fontWeight:'600',textAlign:'center',opacity:0.05}}> About ME</div>
        <div style={{width:'100%',position:'absolute',top:'21%',    }}>
        
        <div style={{color:'white',fontSize:30,
        textTransform:'uppercase',fontWeight:'600',textAlign:'center',
        textAlign:'center',}}>Know me more</div>

        <div style={{width:"100%",
        display:"flex",flexDirection:'row',justifyContent:'center'}}>
          <div style={{height:2,width:70,background:'red',borderRadius:10}}></div>
        </div>

        </div>
        {/* <div className="home-mainDiv" >
          <h4 className="home-mainTitle">Welcome</h4>
          <h1 className="home-mainDesc" >
            {displayedText}{showCursor ? "|" : " "}{" "}
          </h1>

          <h4 style={{ color: "white", textAlign: "center", marginTop: 20 }}>
            based in Kolkata, India.
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Button variant="outline-danger" className="hireMeBtn">Hire Me</Button>{" "}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default AboutScreen;

