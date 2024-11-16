import React, { useEffect, useRef, useState } from "react";
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
import OurserviceScreen from "./Screens/OurServices/OurService";
import ResumeScreen from "./Screens/Resume/Resume";
import BlogScreen from "./Screens/Blogs/BlogScreen";
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";
import BlogDetails from "./Screens/BlogDetails/BlogDetails";
function App() {
  const homeComponentRef = useRef(null);
  const AboutComponentRef = useRef(null);
  const OurserviceComponentRef = useRef(null);
  const ResumeComponentRef = useRef(null);

  const [hoveredSection, setHoveredSection] = useState(null);
  const [checkstatus, setcheckstatus] = useState(false);
  

  useEffect(()=>{
    setTimeout(() => {
      scrollToComponent('about')
    }, 3000);
  },[])



  // Scroll to the section based on section id
  const scrollToComponent = (sectionId) => {
    console.log("sectionId : ", sectionId)
    const sectionRefs = {
      home: homeComponentRef,
      about: AboutComponentRef,
      ourservice: OurserviceComponentRef,
      resume: ResumeComponentRef,
    };
    
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  
  

  // Function to handle mouse entering a section
  const handleMouseEnter = (sectionName) => {
    setHoveredSection(sectionName);
  };

  // Function to handle mouse leaving a section (optional)
  const handleMouseLeave = () => {
    setHoveredSection(null); // Clear the hovered section when the mouse leaves
  };

  return (
    // <Router>
    //   <div>
    //     <CustomHeader
    //       // onNavClick={scrollToSecondComponent}
    //       hoveredSection={hoveredSection}
    //       onNavClick={scrollToComponent}
    //     />
        

    //     <Routes>
    //       <Route
    //         exact
    //         path="/itspradip"
    //         element={
    //           // <WelcomeScreen />
    //           <>
    //             <div
    //               ref={homeComponentRef}
    //               id="home"
    //               onMouseEnter={() => handleMouseEnter("home")}
    //               onMouseLeave={handleMouseLeave}
    //             >
    //               <HomeScreen />
    //             </div>
    //             <div
    //               ref={AboutComponentRef}
    //               id="about"
    //               onMouseEnter={() => handleMouseEnter("about")}
    //               onMouseLeave={handleMouseLeave}
    //             >
    //               <AboutScreen />
    //             </div>

    //             <div
    //               ref={OurserviceComponentRef}
    //               id="ourservice"
    //               onMouseEnter={() => handleMouseEnter("ourservice")}
    //               onMouseLeave={handleMouseLeave}
    //             >
    //               <OurserviceScreen />
    //             </div>

    //             <div
    //               ref={ResumeComponentRef}
    //               id="resume"
    //               onMouseEnter={() => handleMouseEnter("resume")}
    //               onMouseLeave={handleMouseLeave}
    //             >
    //               <ResumeScreen />
    //             </div>
    //           </>
    //         }
    //       />
    //       <Route exact path="/blog" element={<BlogScreen />} />
    //       <Route exact path="/Blog-details/:id" element={<BlogDetails />} />
    //     </Routes>

    //     <Routes>
    //       <Route exact path="/itspradip/blog" element={<BlogScreen />} />
    //       <Route exact path="/itspradip//Blog-details/:id" element={<BlogDetails />} />
    //     </Routes>
    //   </div>
    // </Router>

    <>
    <CustomHeader
           // onNavClick={scrollToSecondComponent}
           hoveredSection={hoveredSection}
           onNavClick={scrollToComponent}
         />
    <Routes>
           <Route
             exact
             path="/itspradip"
             element={
               // <WelcomeScreen />
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
             }
           />


      {/* <Route path="/itspradip" element={<WelcomeScreen />} /> */}
      <Route path="/itspradip/blog" element={<BlogScreen />} />
      <Route path="/itspradip/Blog-details/:id" element={<BlogDetails />} />
    </Routes>
    </>

  );
}

export default App;
