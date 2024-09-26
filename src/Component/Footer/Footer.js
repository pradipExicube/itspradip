import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/image/app-logo-basic.png'
// import { IconName } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook,FaWhatsapp } from "react-icons/fa";
function CustomFooter() {
  return (
    <Navbar fixed="bottom" expand="lg"  className="bg-body-tertiary" style={{minHeight:40}}>
      {/* <Container>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: 120 }} />
        </Link> */}
        <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',flex:1,paddingRight:30}}>
        <div style={{marginLeft:10}}><FaFacebook /></div>
        <div style={{marginLeft:10}}><FaXTwitter /></div>
        <div style={{marginLeft:10}}><FaWhatsapp /></div>
        </div>
        
        
      {/* </Container> */}
    </Navbar>
  );
}

export default CustomFooter;
