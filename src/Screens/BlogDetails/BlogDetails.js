import React, {useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import "./BlogDetails.css";
import introBg from "../../images/image/intro-bg.jpg";
import RnFirebaseImplement from "../../BlogContents/RnFirebaseImplement";
// import CustomSpacer from "../../Component/Spacer/Spacer";

function BlogDetails(props) {
  const navigate = useNavigate();
  // const location = useLocation(); // Access the state
  const { id } = useParams();
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
    // {
    //   uid:1,
    //   type:'REACT NATIVE',
    //   title:'React Native - Integrating Firebase with React Native',
    //   s_desc:'Firebase is a platform developed by Google for creating mobile and web applications, it’s a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps...',
    //   p_date:'November 16, 2024',
    //   content:<RnFirebaseImplement />
    // }
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
      {/* {location?.state ? 
        blogList[(location?.state-1)]?.content
        :
        null
      } */}

      {id ? 
        blogList[(id-1)]?.content
        :
        null
      }

      
    </>
  );
}

export default BlogDetails;
