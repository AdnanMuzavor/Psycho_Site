import React from 'react';
import "./App.css";
import './Styles/Navbar.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Screens/Home'; // Assuming you have a Home component
import About from './Screens/About'; // Assuming you have an About component
import Services from './Screens/Services'; // Assuming you have a Services component
import Contact from './Screens/Contact';

function App() {
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
    </>

  );
}

export default App;
