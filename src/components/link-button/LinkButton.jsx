import React from 'react';

/** Style */
import './LinkButton.scss';


export default function LinkedButton(props) {
  if (props.url) {
    return (
      <a 
        className="linkBtn" 
        href={props.url}
        target="_blank">
          {props.name} 
      </a>
    )
  }
  return (
    <a 
      className="linkBtn"
      id={props.id ? props.id : ''} 
      href={props.url}>
        {props.name}
    </a>
  )
}