import React from 'react';

const Qaulification_Card = ({ course, college }) => {
    return (
        <>
            <div className="qualification-box col-10 col-lg-3 col-md-3" data-aos="fade-down-right" data-aos-duration="1500">
                <h2 className="course-title">{course}</h2>
                <p className="college-name">{college}</p>
            </div>
        </>
    )
}

export default Qaulification_Card