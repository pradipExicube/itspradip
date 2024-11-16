import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import "./BlogScreen.css";
import introBg from "../../images/image/intro-bg.jpg";
import RnFirebaseImplement from "../../BlogContents/RnFirebaseImplement";
// import { global_blogList } from "../../GlobalFunctions/GlobalBlogList,js";
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

  const blogList=[
    {
      uid:1,
      type:'REACT NATIVE',
      title:'React Native - Integrating Firebase with React Native',
      s_desc:'Firebase is a platform developed by Google for creating mobile and web applications, it’s a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps...',
      p_date:'November 16, 2024',
      content:<RnFirebaseImplement />
    },
    // {
    //   uid:2,
    //   type:'REACT NATIVE',
    //   title:'React Native - Integrating Firebase with React Native',
    //   s_desc:'Firebase is a platform developed by Google for creating mobile and web applications, it’s a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps...',
    //   p_date:'November 16, 2024',
    //   content:<RnFirebaseImplement />
    // }
  ]
  

  useEffect(() => {}, []);

  return (
    <>
      <div className="blog-mainDiv">
        <Container>
          <Row className="justify-content-center align-items-center">
              {/* {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => { */}
              {blogList.map((item, index) => {
                return (
                  <Col xs={9} sm={6} md={4} lg={4} 
                className="ml-auto"
                >
                      <Card style={{ marginBottom:20}} className="custom_card"
                        onClick={()=>{
                          // navigate(`/BlogDetails/${12}`);
                          // navigate('/Blog-details',{ state: item?.uid })
                          navigate(`/Blog-details/${item?.uid}`)
                        }}
                      >
                        <Card.Img variant="top" src="https://i.postimg.cc/C17LsMwP/09513f00-daeb-11e9-83db-89ca99418153.png" style={{height:'15rem',objectFit:'cover'}} />
                        <Card.Body>
                        <Card.Text style={{fontSize:'0.8rem',color:'#595959'}}>
                            {item?.type}
                          </Card.Text>
                          <Card.Title style={{fontSize:'1.1rem'}}>
                          {item?.title}
                          </Card.Title>
                          <Card.Text style={{fontSize:'0.8rem'}}>
                          {item?.s_desc}
                          </Card.Text>
                          <Card.Text style={{fontSize:'1rem',color:'#595959'}}>
                          {item?.p_date}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BlogScreen;
