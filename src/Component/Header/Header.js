import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa"; // Icons from react-icons
import "./Header.css"; // Import your custom CSS file
import { Link } from "react-router-dom";
// import styles from './Header.module.css'; // Import the CSS module

const CustomHeader = ({onNavClick,hoveredSection}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentSection, setcurrentSection] = useState('home');

  useEffect(() =>{
    setcurrentSection(hoveredSection? hoveredSection :'home');
  },[hoveredSection])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // alert("csbck: scrolling")
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky={isAnimated ? "top" : ""}
      className={`navbar-dark py-3 ${isAnimated ? "header-animated" : "" }`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <div style={{ color: "white" }}>
          <Navbar.Brand 
          href="#home" 
          className="text-white me-auto test"
          onClick={() => {setcurrentSection('home');onNavClick("home")}}
          >
            <strong style={{ fontSize: 30,color:'#fff' }}>Pradip</strong>
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className={currentSection == 'home' ? "active" : ""} onClick={() => {setcurrentSection('home');onNavClick("home")}}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className={currentSection == 'about' ? "active" : ""} onClick={() => {setcurrentSection('about');onNavClick("about")}}>About</Nav.Link>
            <Nav.Link href="#ourservice" className={currentSection == 'ourservice' ? "active" : ""}>What I Do</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#client">Client</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            {/* <Link className="nav-link" to="home">Home</Link>
            <Link className="nav-link" to="about">About</Link>
            <Link className="nav-link" to="service">What I Do</Link>
            <Link className="nav-link" to="service">Resume</Link>
            <Link className="nav-link" to="service">Portfolio</Link>
            <Link className="nav-link" to="service">Client</Link>
            <Link className="nav-link" to="service">Contact</Link> */}
          </Nav>
        </Navbar.Collapse>
        {/* </div> */}

        <div
          style={{
            justifyContent: "center",
            flexDirection: "column",
            display: "flex"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 15,
            }}
          >
            <div style={{ paddingLeft: 15 }}>
              <Navbar.Toggle  aria-controls="basic-navbar-nav" className="text-white navbar-toggler" />
            </div>
            <div style={{ paddingLeft: 15,justifyContent: "center",
            flexDirection: "column",
            display: "flex", }}>
              <Nav.Link href="#twitter">
                <FaTwitter color="white" />
              </Nav.Link>
            </div>
            <div style={{ paddingLeft: 15,justifyContent: "center",
            flexDirection: "column",
            display: "flex", }}>
              <Nav.Link href="#twitter">
                <FaFacebookF color="white" />
              </Nav.Link>
            </div>
            <div style={{ paddingLeft: 15,justifyContent: "center",
            flexDirection: "column",
            display: "flex", }}>
              <Nav.Link href="#twitter">
                <FaDribbble color="white" />
              </Nav.Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Navbar>
  );
};

export default CustomHeader;
