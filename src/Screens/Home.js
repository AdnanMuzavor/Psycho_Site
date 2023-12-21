import React from 'react';
import About from './About';
import Services from './Services';


const Home = () => {
    return (
        <>
            <div className="home-container " >
            <h2 className="section-header" data-aos="flip-down" data-aos-duration="1500">Welcome</h2>
                <div className="row">
                    {/* First Container: Floating Graphic and Quote */}
                    <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center" >
                        <div className="content-container" data-aos="fade-up" data-aos-duration="1500">
                            <div className="floating-graphic" data-aos="fade-right" data-aos-duration="1500">
                                <img src="https://tse4.mm.bing.net/th?id=OIP.mhx4-8MNfl-q-srIABVJQgHaFs&pid=Api&P=0&h=180" alt="Psycho Graphic" className="img-fluid home-img" />
                            </div>
                            <div className="quote-container" data-aos="fade-left" data-aos-duration="1500">
                                <blockquote className="mental-health-quote" data-aos="fade-up-right" data-aos-duration="1500">
                                    "Your mental health is a priority. Always prioritize self-care and well-being."
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Second Container: Floating Graphic and Quote */}
                    <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                        <div className="content-container" data-aos="fade-up" data-aos-duration="1500">
                            <div className="floating-graphic" data-aos="fade-right" data-aos-duration="1500">
                                <img src="https://tse4.mm.bing.net/th?id=OIP.mhx4-8MNfl-q-srIABVJQgHaFs&pid=Api&P=0&h=180" alt="Psycho Graphic" className="img-fluid home-img" />
                            </div>
                            <div className="quote-container" data-aos="fade-left" data-aos-duration="1500">
                                <blockquote className="mental-health-quote" data-aos="fade-up-right" data-aos-duration="1500">
                                    "Your mental health is a priority. Always prioritize self-care and well-being."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Services/>
        </>
    );
};

export default Home;
