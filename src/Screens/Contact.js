// import React from 'react';
// import contact from "../Assets/contact.jpg"
// const Contact = () => {
//     return (
//         <>
//             <div className='container contact-container  mt-4'>
//                 <h3 className='text-center'>Connect with me</h3>
//                 <div className='row'>                <div className='col-lg-6 col-md-6 col-12'>
//                     <form action='#'>
//                         <div className='input_wrapper'>
//                             <label>Name</label>
//                             <input type='text' placeholder='Your name comes here' />
//                         </div>
//                         <div className='input_wrapper'>
//                             <label>Contact</label>
//                             <input type='text' placeholder='email/phone number' />
//                         </div>
//                         <div className='input_wrapper'>
//                             <label>Message</label>
//                             <textarea rows={2} type='text' placeholder='I want to connect with you regarding' />
//                         </div>
//                         <div className='Button-wrapper'>
//                             <input type='submit' value={"Let's Connect"}></input>
//                         </div>
//                     </form>
//                 </div>
//                     <div className='col-lg-6 col-md-6 col-12'>
//                         <div className='img-container'>
//                             <img src={contact} className='img-fluid' alt="Let's Connect" />
//                         </div>
//                     </div></div>

//             </div>
//         </>
//     )
// }


// export default Contact;

import React from 'react';
import contact from "../Assets/contact.jpg";


const Contact = () => {
    return (
        <>
            <div className='container contact-container mt-4'>
                <h3 className='text-center mb-4'>Connect with Me</h3>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <form action='#' className='contact-form'>
                            <div className='input-group'>
                                <label htmlFor='name'>Name</label>
                                <input id='name' type='text' placeholder='Your name comes here' />
                            </div>
                            <div className='input-group'>
                                <label htmlFor='contact'>Contact</label>
                                <input id='contact' type='text' placeholder='Email/Phone Number' />
                            </div>
                            <div className='input-group'>
                                <label htmlFor='message'>Message</label>
                                <textarea id='message' rows={4} placeholder='I want to connect with you regarding'></textarea>
                            </div>
                            <div className='button-wrapper'>
                                <input type='submit' value={"Let's Connect"} className='submit-btn' />
                            </div>
                        </form>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='img-container'>
                            <img src={contact} className='img-fluid' alt="Let's Connect" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
