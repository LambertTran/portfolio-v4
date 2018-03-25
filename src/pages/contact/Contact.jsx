import React from 'react';

import lkIcon from '../../imgs/linkedin.png';
import ghIcon from '../../imgs/github.png';
import emIcon from '../../imgs/email.png';

/** Style */
import './Contact.scss';

export default function Contact() {
  return (
    <div id="contact-page" className="contact">
      <h1>Contact me</h1>
      <div className="social-icon">
        <div className="social-item">
          <a href="mailto:lb.tran648@gmail.com">
            <img src={emIcon} alt=""/>
          </a>
          <a href="mailto:lb.tran648@gmail.com">
            <h4>lb.tran648@gmail.com</h4>
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.linkedin.com/in/lamberttran/" target="_blank">
            <img src={lkIcon} alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/lamberttran/" target="_blank">
            <h4>linkedin.com/in/lamberttran</h4>
          </a>
        </div>
        <div className="social-item">
          <a href="https://github.com/LambertTran" target="_blank">
            <img src={ghIcon} alt=""/>
          </a>        
          <a href="https://github.com/LambertTran" target="_blank">
            <h4>github.com/LambertTran</h4>
          </a>
        </div>
      </div>
    </div>
  )
}