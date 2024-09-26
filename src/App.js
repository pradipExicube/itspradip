import React, { useRef, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CustomHeader from "./Component/Header/Header";

// import { BrowserRouter as Router , Switch , Route} from "react-router-dom";

// import { Routes ,Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import AboutScreen from "./Screens/About/AboutScreen";
import ContactScreen from "./Screens/ContactUs";
import HomeScreen from "./Screens/Home/HomsScreen";
import CustomFooter from "./Component/Footer/Footer";
function App() {
  const homeComponentRef = useRef(null);
  const AboutComponentRef = useRef(null);

  const scrollToSecondComponent = (page) => {
    // alert (page);
    switch (page) {
      case "home":
        homeComponentRef.current.scrollIntoView({ behavior: "smooth" });
      case "about":
        AboutComponentRef.current.scrollIntoView({ behavior: "smooth" });
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

  return (
    <Router>
      <div>
        <CustomHeader
          onNavClick={scrollToSecondComponent}
          hoveredSection={hoveredSection}
        />
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
        {/* <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route exact path="/home" element={<HomeScreen />} />
          <Route exact path="/about" element={<AboutScreen />} />
          <Route exact path="/contact" element={<ContactScreen />} />
        </Routes> */}
        {/* <HomeScreen />
      <HomeScreen />
      <HomeScreen />
      <HomeScreen /> */}

        {/* <CustomFooter /> */}
      </div>
    </Router>
  );
}

export default App;
