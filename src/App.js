import React from 'react';
import "./App.css";
import './Styles/Navbar.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Screens/Home'; // Assuming you have a Home component
import About from './Screens/About'; // Assuming you have an About component
import Services from './Screens/Services'; // Assuming you have a Services component
import Contact from './Screens/Contact';
import{ useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is present
// import "./../node_modules/bootstrap/dist/js/bootstrap.bundle"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <>
      <div className="app-container">
        <Navbar />

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
      <Footer/>
    </>

  );
}

export default App;
