import React from 'react'

const Footer = () => {
      // Function to scroll to the top of page
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Smooth scroll behavior
    });
  };
    return (
        <>
            <footer className="psycho-footer">
                <div className="container">
                    <div className="footer-header">
                        <h4>Discover Balance & Harmony</h4>
                        <p>Embrace your journey towards mental well-being.</p>
                    </div>
                    <div className="footer-content">
                        <p>Your mental health is essential. Connect with us today to begin your transformative journey.</p>
                    </div>
                    <div className="footer-buttons">
                        <button className="goto-top-btn" onClick={goToTop}>Go to Top</button>
                    </div>
                    <div className="footer-made-by">
                        <p>Made with <span role="img" aria-label="heart">❤️</span> by Adnan</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;