

import React from 'react';




const Contact = () => {
    return (
        <>

            <div className='main-container'>
                <div className='contact-bg' data-aos="flip-down" data-aos-duration="1500"></div>
                <div className='content' data-aos="flip-up" data-aos-duration="1500">
                    <h2 style={{ color: '#fff' }}>Let's Get in Touch</h2>
                    <form action='#' className='contact-form'>
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
                    </form>
                </div>

            </div>
          
        </>
    )
}

export default Contact;
