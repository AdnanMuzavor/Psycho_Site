

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.contact || !formData.message) {
            alert("Kindly fill all the details so that we can reach out to you.")
            return;
        }
        try {
            const templateParams = {
                from_name: formData.name,
                contact_info: formData.contact,
                message: formData.message
            };

            await emailjs.send('service_9ickkup', 'template_we9mpre', templateParams, 'jOQkNxlVyWTt-mdDN');
            alert('Your message has been successfully sent! Thank you for reaching out. A member of the Helping Heart team will be in touch with you shortly.');


            // Clear form data after sending email
            setFormData({
                name: '',
                contact: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <>

            <div className='main-container'>
                <div className='contact-bg' data-aos="flip-down" data-aos-duration="1500"></div>
                <div className='content' data-aos="flip-up" data-aos-duration="1500">
                    <h2 style={{ color: '#fff' }}>Let's Get in Touch</h2>
                    {/* <form action='#' className='contact-form'>
                        <div className='input-group'>
                            <label htmlFor='name ' className='label'>Name</label>
                            <input id='name' type='text' placeholder='Your name comes here' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='contact' className='label' > Contact</label>
                            <input id='contact' type='text' placeholder='Email/Phone Number' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='message' className='label'> Message</label>
                            <textarea id='message' rows={4} placeholder='I want to connect with you regarding'></textarea>
                        </div>
                        <button className=" contact-btn">Let's Connect</button>
                    </form> */}
                    <form action='#' className='contact-form' onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <label htmlFor='name' className='label'>Name</label>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                placeholder='Your name comes here'
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='contact' className='label'>Contact</label>
                            <input
                                id='contact'
                                name='contact'
                                type='text'
                                placeholder='Email/Phone Number'
                                value={formData.contact}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='message' className='label'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                rows={4}
                                placeholder='I want to connect with you regarding'
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="contact-btn">Let's Connect</button>
                    </form>
                    <div className='icon-container'>

                        <a href="YOUR_INSTAGRAM_LINK_HERE" target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="YOUR_LINKEDIN_LINK_HERE" target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://wa.me/919158155470" target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a
                            href="mailto:helpingheart2023@example.com?subject=Subject%20Here&body=Your%20message%20here"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} /> Contact Helping Heart
                        </a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact;
