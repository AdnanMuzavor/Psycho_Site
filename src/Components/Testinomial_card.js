

const TestinomialCard = ({ e }) => {
    return (
        <>
            <div className="testimonial-card col-10 col-md-3 col-lg-3" data-aos={e.anim} data-aos-duration="1000">
                <img src={e.image} alt={e.name} className="testimonial-image" />
                <div className="testimonial-name">{e.name}</div>
                <p className="testimonial-comment">{e.comment}</p>
                <div className="testimonial-desig">{e.desig}</div>
            </div>
        </>
    )
}

export default TestinomialCard