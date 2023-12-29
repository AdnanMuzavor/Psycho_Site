

import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const templateParams = {
                from_name: formData.name,
                contact_info: formData.contact,
                message: formData.message
            };

            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');
            alert('Email sent successfully!');
            
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
                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact;
