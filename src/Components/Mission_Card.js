import React from 'react';

const MissionCard = ({ title, mission }) => {
    return (
        <>
            <div className="mission-card col-10 col-lg-3 col-md-5" data-aos="zoom-in" data-aos-duration="1500">
                <h4>{title}</h4>
                <p>{mission}</p>
            </div>
        </>
    )
}

export default MissionCard