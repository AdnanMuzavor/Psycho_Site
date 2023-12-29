import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Helping Heart</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    style={{
                        backgroundColor: '#9b4fe7', // Purple background
                        border: '1px solid #ffffff', // White border
                        color: '#ffffff' // White color for the bars
                    }}
                >
                    {/* <span className="navbar-toggler-icon" style={{color:'black'}} ></span> */}
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
