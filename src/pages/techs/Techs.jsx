import React from 'react';

import './Techs.scss';

export default function Techs() {
  return (
    <div id="tech-page" className="tech-page">
      <div className="tech-content"> 
        <h1>My tech stack</h1>
        <div className="tech-list">
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original-wordmark"></i>
          <i className="devicon-sass-original colored"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-mysql-plain-wordmark colored"></i>
          <i className="devicon-webpack-plain-wordmark colored"></i>
          <i className="devicon-amazonwebservices-plain-wordmark"></i>
          <i className="devicon-dot-net-plain-wordmark"></i>
          <i className="devicon-csharp-plain-wordmark"></i>
        </div>
      </div>
    </div>
  );
}