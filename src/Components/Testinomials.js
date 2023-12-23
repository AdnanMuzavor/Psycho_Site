import React, { useState, useEffect } from 'react';
import Testinomial_Card from './Testinomial_card';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            image: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            comment: "I recently used [Product/Service Name] and was genuinely impressed! Not only did it exceed my expectations in terms of functionality, but the customer support was also exceptional. I've recommended it to several colleagues and friends. Thank you for such an outstanding experience!",
            desig: "Software Developer, XYZ, Goa",
            anim:"slide-right"
        },
        {
            id: 2,
            name: "Jane Smith",
            image: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            comment: "I recently used [Product/Service Name] and was genuinely impressed! Not only did it exceed my expectations in terms of functionality, but the customer support was also exceptional. I've recommended it to several colleagues and friends. Thank you for such an outstanding experience!.",
            desig: "Software Developer, XYZ, Goa",
            anim:"zoom-in"
        },
        {
            id: 3,
            name: "Robert Brown",
            image: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
            comment: "I recently used [Product/Service Name] and was genuinely impressed! Not only did it exceed my expectations in terms of functionality, but the customer support was also exceptional. I've recommended it to several colleagues and friends. Thank you for such an outstanding experience!",
            desig: "Software Developer, XYZ, Goa",
            anim:"slide-left"
        }
    ];




    return (
        <>
            <div className='container' >
                <div className='text-container'>
                    <h5 className="section-header" data-aos="flip-down" data-aos-duration="1500">Client Voices: Stories of Transformation</h5>
                </div>
                <div className='testi-content row about-container' data-aos="flip-up" data-aos-duration="1500">
                    {
                        testimonials.map((e, index) => {
                            return (
                                <>

                                    <Testinomial_Card
                                        e={e}
                                        key={index}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>

    );
};

export default Testimonial;
