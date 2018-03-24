import React from 'react';

/** Style */
import './Contact.scss';

export default function Contact() {
  return (
    <div id="contact-page" className="contact">
      <h1>Contact me</h1>
        <i className="fab fa-linkedin"></i>
        <i className="far fa-linkedin"></i>
        <i className="fas fa-linkedin"></i>


      <div className="social-icon">
        <a href="https://www.linkedin.com/in/lamberttran/" target="_blank">
        <i className="fa fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/LambertTran" target="_blank">
          <i className="devicon-github-plain colored" />
        </a>        
      </div>
    </div>
  )
}