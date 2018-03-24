import React from 'react';

/** Styles */
import './ProjectPage.scss';

export default function ProjectPage(props) {
  return (
    <div className="page">
      <div className="project-container">
        <div className="project-list">
          {props.children}
        </div>
      </div>
    </div>
  )
}