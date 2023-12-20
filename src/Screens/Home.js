import React from 'react';


const Home = () => {
    return (
        <div className="home-container">
            <div className="row">
                {/* First Container: Floating Graphic and Quote */}
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                    <div className="content-container">
                        <div className="floating-graphic">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.mhx4-8MNfl-q-srIABVJQgHaFs&pid=Api&P=0&h=180" alt="Psycho Graphic" className="psycho-image" />
                        </div>
                        <div className="quote-container">
                            <blockquote className="mental-health-quote">
                                "Your mental health is a priority. Always prioritize self-care and well-being."
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Second Container: Floating Graphic and Quote */}
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                    <div className="content-container">
                        <div className="floating-graphic">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.mhx4-8MNfl-q-srIABVJQgHaFs&pid=Api&P=0&h=180" alt="Psycho Graphic" className="psycho-image" />
                        </div>
                        <div className="quote-container">
                            <blockquote className="mental-health-quote">
                                "Your mental well-being matters. Embrace self-love and understanding."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
