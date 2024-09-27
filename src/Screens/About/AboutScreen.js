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
      <div className="about-mainDiv">
        <div className="about-subDiv">
          <div className="customFont"> About ME</div>

          <div className="about-insideText">
            <div className="about-knowmore">Know me more</div>
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
                <div className="row-two-item1">Name: <div> Pradip Mondal</div></div>
                <div className="row-two-item2">Email: <div> pradipm.info@gmail.com</div></div>
                <div className="row-two-item3">From: <div> Kolkata, India</div></div>

                <div>
                <Button variant="outline-danger" className="downloadCV">Download CV</Button>{" "}
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default AboutScreen;
