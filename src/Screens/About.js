import React, { useState } from 'react';
import img from "../Assets/Afree_Di.jpeg"
import Qaulification_Card from '../Components/Qualification_Card';
import Mission_Card from '../Components/Mission_Card';
import Navbar from '../Components/Navbar';
const About = () => {
    const Qualification = [
        {
            key: 100,
            course: "Higher Secondary Education",
            college: "St. Xavier's Higher Secondary, Mapusa-Goa"
        },
        {
            key: 101,
            course: "Bachelors in Psychology (honours) ",
            college: "St. Xavier's College, Mapusa-Goa"
        },
        {
            key: 102,
            course: "MSC in Counselling Psychology",
            college: "Amity University, Mumbai"
        }
    ]
    const Mission = [
        {
            key: 1000,
            title: "Passionate Advocate",
            mission: "🌱 I'm passionate about mental health and well-being, and I'm here to help you navigate life's challenges."
        },
        {
            key: 1001,
            title: "Educational Background",
            mission: "🎓 I hold an Msc in Counselling Psychology from Amity University Mumbai."
        },
        {
            key: 1002,
            title: "Client-Centred Approach",
            mission: "👥 My approach is client-centred, focusing on your unique needs and goals."
        },
        {
            key: 1003,
            title: "Open Communication",
            mission: "🗣️ Communication is key, and I'm all ears. Let's create a safe space to talk openly and work towards your best self."
        },
        {
            key: 1004,
            title: "Empowerment",
            mission: "🌟 My mission is to empower you on your mental health journey."
        },
    ];
    return (
        <>
   
        <div className='container mt-3' >
            <h2 className="section-header" data-aos="flip-down" data-aos-duration="1500">Meet your psychologist</h2>
            <div className="about-container" data-aos="zoom-in" data-aos-duration="1500">
                {/* Left side with image */}
                <div className="image-container" data-aos="zoom-in-up">
                    <img src={img} data-aos="zoom-out-down" data-aos-duration="1500" alt="Psycho Image" className="img-fluid psycho-image" />
                </div>

                {/* Right side with introduction */}
                <div className="intro-container" data-aos="zoom-in-down" data-aos-duration="1500">
                    <h1>Hey, I'm Afreen Shah</h1>
                    <p>As a counselling psychologist, my aim is to empower you with tools and insights to overcome challenges, build healthier relationships, and lead a fulfilling life. Let's work together to unlock your potential and embrace positive change</p>
                </div>

            </div>
            {/* Header for Qualifications */}
            <h2 className="section-header" data-aos="flip-down" data-aos-duration="1500">My Qualifications</h2>
            <div className="qualifications-container row">
                {Qualification.map((e) => {
                    return <Qaulification_Card course={e.course} college={e.college} key={e.key} />
                })}
            </div>
            {/* Header for Mission */}
            <h2 className="section-header" data-aos="flip-down" data-aos-duration="1500">My Mission and Goals</h2>
            <div className="about-container row" data-aos="zoom-in" data-aos-duration="1500">
                {/* Mission Cards */}
                {
                    Mission.map((e) => {
                        return <Mission_Card title={e.title} mission={e.mission} key={e.key} />
                    })
                }




            </div>
        </div>
        </>
    );
};

export default About;
