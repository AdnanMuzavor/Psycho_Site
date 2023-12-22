import React from 'react';
import Service_Card from '../Components/Service_Card';
import TestimonialCarousel from '../Components/Testinimial';

const Services = () => {
    // Sample service data using useState
    const services = [

        {
            key: 1,
            anim: "fade-up",
            img: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            title: "Service Title 1",
            descrp: "Description for Service 1"
        },
        {
            key: 2,
            anim: "fade-left",
            img: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            title: "Service Title 2",
            descrp: "Description for Service 2"
        },
        {
            key: 3,
            anim: "fade-right",
            img: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            title: "Service Title 3",
            descrp: "Description for Service 3"
        },
        {
            key: 4,
            anim: "fade-up",
            img: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            title: "Service Title 1",
            descrp: "Description for Service 1"
        },
        {
            key: 5,
            anim: "fade-left",
            img: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            title: "Service Title 2",
            descrp: "Description for Service 2"
        },
        {
            key: 6,
            anim: "fade-right",
            img: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            title: "Service Title 3",
            descrp: "Description for Service 3"
        },
    ]

    return (
        <>
            <div className='container mt-3'>
                <h2 className="section-header" data-aos="flip-down" data-aos-duration="1500">Here's How I Can Help You</h2>
                <div className="row about-container" data-aos="zoom-in" data-aos-duration="1500">
                    {/* Service Cards */}
                    {services.map(service => (
                        <Service_Card
                            key={service.key}
                            anim={service.anim}
                            img={service.img}
                            title={service.title}
                            descrp={service.descrp}
                        />
                    ))}
                </div>
            </div>
            <TestimonialCarousel/>
        </>
    );
}

export default Services;
