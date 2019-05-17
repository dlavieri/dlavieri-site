import React from 'react';
import './contact.css';

function Contact (props) {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-box">
        <div className="contact-me">
          <h2>Contact me.</h2>
        </div>
        <div className="email-me">
          <a href="mailto:dvlavieri@gmail.com" className="email-link">
          <div>
          <h4>Send me an email.</h4>
          </div></a>
        </div>
        <div className="find-me">
          <h4>Find me.</h4>
        <div className="social-media-links">
          <a href="angel.co/david-lavieri" className="social-link">
          <i className="fab fa-angellist social"></i></a>
          <a href="github.com/dlavieri" className="social-link">
          <i className="fab fa-github social"></i></a>
          <a href="linkedin.com/in/davidlavieri" className="social-link">
          <i className="fab fa-linkedin social"></i></a>
          <a href="facebook.com/dlavieri" className="social-link">
          <i className="fab fa-facebook social"></i></a>
          <a href="instagram.com/dvlavieri" className="social-link">
          <i className="fab fa-instagram"></i></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
