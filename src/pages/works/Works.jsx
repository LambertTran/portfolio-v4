import React from 'react';

/** Components */
import ProjectPage from '../../components/project-page/ProjectPage';
import ProjectItem from '../../components/project-item/ProjectItem';

/** Data */
import workData from '../../data/work-data';

/** Style */
import './Works.scss';

export default function Works() {
  return (
    <div id="work-page" className="works">
      <h1>My works</h1>
      <ProjectPage> 
        <ProjectItem data={workData.UCDhyperloop} />
        <ProjectItem data={workData.sachacks} />
      </ProjectPage>
    </div>
  )
}