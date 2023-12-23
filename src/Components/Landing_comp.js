import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-container " data-aos="flip-down" data-aos-duration="1500">
            <div className="background-image" data-aos="flip-up" data-aos-duration="1500"></div>
            <div className="overlay">
                <h1 className="quote" data-aos="fade-right" data-aos-duration="1500">It's natural to have emotional issues</h1>
                <p className="sub-text" data-aos="fade-left" data-aos-duration="1500">Let me help you overcome challenges</p>
                <Link to="/contact">   <button className="contact-btn" data-aos="fade-up-right" data-aos-duration="1500">Contact Me</button></Link>
             
            </div>
        </div>
    );
}

export default LandingPage;
