import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
    const testimonials = [
        {
          id: 1,
          name: "John Doe",
          image: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
          comment: "John's testimonial comment..."
        },
        {
          id: 2,
          name: "Jane Smith",
          image: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
          comment: "Jane's testimonial comment..."
        },
        {
          id: 3,
          name: "Robert Brown",
          image: "https://tse1.mm.bing.net/th?id=OIP.kScaNqfkhmdgo0j8RQzxJgHaEk&pid=Api&P=0&h=180",
          comment: "Robert's testimonial comment..."
        }
      ];
      



    return (
        <div id="carouselExampleIndicators" className="container carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {testimonials.map((testimonial, index) => (
            <li key={testimonial.id} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img className="d-block w-100" src={testimonial.image} alt={testimonial.name} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{testimonial.name}</h5>
                <p>{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>
    
    );
};

export default TestimonialCarousel;
