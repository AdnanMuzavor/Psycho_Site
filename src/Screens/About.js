import React from 'react';

const About = () => {
    return (
        <div className='container mt-3'>

            <div className="about-container">
                {/* Left side with image */}
                <div className="image-container">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.HqDHjZNlX4rLnKLURt7KgQAAAA&pid=Api&P=0&h=180" alt="Psycho Image" className="img-fluid psycho-image" />
                </div>

                {/* Right side with introduction */}
                <div className="intro-container">
                    <h1>Hey, I'm Afreen Shah</h1>
                    <p>I'm a dedicated psychologist committed to helping individuals achieve mental well-being and personal growth. Explore more about my approach and expertise by scrolling down.I'm a dedicated psychologist</p>
                </div>

            </div>
            {/* Header for Qualifications */}
            <h2 className="section-header">My Qualifications</h2>
<div className="qualifications-container row">
    <div className="qualification-box col-10 col-lg-3 col-md-3">
        <h2 className="course-title">Bachelor of Arts</h2>
        <p className="college-name">XYZ College</p>
    </div>
    <div className="qualification-box col-10 col-lg-3 col-md-3">
        <h2 className="course-title">Master of Science</h2>
        <p className="college-name">ABC University</p>
    </div>
    <div className="qualification-box col-10 col-lg-3 col-md-3">
        <h2 className="course-title">Ph.D. in Psychology</h2>
        <p className="college-name">DEF Institute</p>
    </div>
 
</div>
        </div>
    );
};

export default About;
