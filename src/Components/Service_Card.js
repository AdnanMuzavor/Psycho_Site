import React from 'react';

const ServiceCard = ({ key, anim, img, title, descrp }) => {
    return (
        <>
            <div key={key} className="card-wrapper col-md-4 mb-4">
                <div className="service-card" data-aos={anim} data-aos-duration="1000">
                    <img src={img} alt={title} className="service-image img-fluid" />
                    <div className="service-content">
                        <h3 className="service-title">{title}</h3>
                        <p className="service-description">{descrp}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard