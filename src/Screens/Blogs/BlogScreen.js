import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import "./BlogScreen.css";
import introBg from "../../images/image/intro-bg.jpg";
function BlogScreen(props) {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${introBg})`,
    backgroundSize: "cover", // Adjusts the image to cover the entire area
    backgroundPosition: "center", // Centers the image
    height: "90vh", // Make the background image take up full viewport height
    width: "100%",
    // opacity:0.5,
    // backgroundColor: '#000'
    backgroundSize: "cover",
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="blog-mainDiv">
        <div className="blog-subDiv">
          <div className="customFont"> MY BLOGS</div>

          


        </div>
      </div>
    </>
  );
}

export default BlogScreen;
