import React from 'react';
import LinkButton from '../link-button/LinkButton';

/** Styles */
import './ModalContent.scss';

export default function ModalContent(projectData) {
  const { data } = projectData;
  let source = 'Source code';
  let web = 'Website';
  
  // render button for source code
  function renderLinkBtn(links) {
    if (typeof links[0] !== 'object') {
      return (
        <LinkButton url={links} name="Link" />
      );
    }
    return links.map((link) => {
      const linkName = Object.keys(link);
      const display = convertToDisplay(linkName[0]);
      return (
        <LinkButton url={link[linkName[0]]} name={display} key={linkName}  />
      );
    })

    function convertToDisplay(name) {
      for (let i = 0 ; i < name.length; ++i ) {
        if (name[i] === name[i].toUpperCase()) {
          let display = name.replace(name[i],` ${name[i]}`);
          display = display.replace(display[0], display[0].toUpperCase());
          return display;
        }
      }
    }
  }

  // render techs used in the project
  function renderTechs(techs) {
    return techs.map((tech) => 
      <li key={tech}>{tech}</li>
    )
  }

  function renderStatus(status){
    if (!status) {
      return; 
    }
    return (
      <h4 className="header">Status: <span>{status} </span></h4>
    )
  }
  
  if (data.github.length > 1) {
    source = 'Source codes';
  }
  if (data.web.length > 1) {
    web = 'Websites';
  }

  return (
    <div className="modal-content">
      <img src={data.image} alt="project-img"/>
      <div className="detail">
        <h4 className="header title">{data.name}</h4>
        <p>{data.detail}</p>
        {renderStatus(data.status)}
        <h4 className="header header-margin">Techs used:</h4>
        <ul>
          {renderTechs(data.techs)}
        </ul>
      <div>
        <h4 className="header header-margin"> {source} </h4>
        {renderLinkBtn(data.github)}
        <h4 className="header header-margin"> {web} </h4>
        {renderLinkBtn(data.web)}
      </div>
      </div>
    </div>
  );
}