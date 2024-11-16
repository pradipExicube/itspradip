import React, {useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import "./BlogDetails.css";
import introBg from "../../images/image/intro-bg.jpg";
import RnFirebaseImplement from "../../BlogContents/RnFirebaseImplement";
// import CustomSpacer from "../../Component/Spacer/Spacer";

function CustomSpacer1(props) {
  return (
    <div style={{height:props?.height ? props?.height : 30}}></div>
  );
}

// function customCodeSnipet({Children}) {
const CustomCodeSnippet = ({ children }) => {
  return (
    <div style={{fontSize:'0.8rem',letterSpacing:0.5,marginTop:10,paddingTop:10,backgroundColor:'#f1f1f1',paddingLeft:10,paddingBottom:10}}>
      {children}
    </div>
    
  );
}

function BlogDetails(props) {
  const navigate = useNavigate();
  const location = useLocation(); // Access the state
  // const { component } = location.state || {};

  const blogList=[
    {
      uid:0,
      type:'REACT NATIVE',
      title:'React Native - Integrating Firebase with React Native',
      s_desc:'Firebase is a platform developed by Google for creating mobile and web applications, it’s a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps...',
      p_date:'November 16, 2024',
      content:<RnFirebaseImplement />
    },
    {
      uid:1,
      type:'REACT NATIVE',
      title:'React Native - Integrating Firebase with React Native',
      s_desc:'Firebase is a platform developed by Google for creating mobile and web applications, it’s a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps...',
      p_date:'November 16, 2024',
      content:<RnFirebaseImplement />
    }
  ]




  const backgroundStyle = {
    backgroundImage: `url(${introBg})`,
    backgroundSize: "cover", // Adjusts the image to cover the entire area
    backgroundPosition: "center", // Centers the image
    height: "90vh", // Make the background image take up full viewport height
    width: "100%",
    opacity:0.5,
    // backgroundColor: '#000'
    backgroundSize: "cover",
  };

  useEffect(() => {
    // console.log(location)
  }, []);

  return (
    <>
      {location?.state ? 
        blogList[(location?.state-1)]?.content
        :
        {/* <p>No component received!</p> */}
      }
    </>
  );
}

export default BlogDetails;
