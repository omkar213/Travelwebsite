import React from 'react'
import contactrightimage from '../../images/contect-image.jpg';

const Contact = () => {
  return (
    <>
      <div className="contact-section" id='contact'>
                <div className="contactwrapper">
                    <div className="contact-left">
                        <div className="contact-form">
                            <h2>Be updated!</h2>
                            <input type="name" className="inner-input" placeholder="First Name"/>
                            <input type="name" className="inner-input" placeholder="Last Name"/>
                            <input type="name" className="inner-input" placeholder="Email Subject"/>
                            <textarea cols="30" rows="5" className="text-massege" placeholder="Write something here..."/>
                            <a href="#submit" className="submit">Submit Email</a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="contact-right-image">
                            <img src={contactrightimage} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Contact;