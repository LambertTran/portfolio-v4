import React from 'react';

/** Components */
import ProjectPage from '../../components/project-page/ProjectPage';
import ProjectItem from '../../components/project-item/ProjectItem';

/** Data */
import projects from '../../data/personal-project-data';

/** Style */
import './Projects.scss';

export default function Projects() {
  return (
    <div id="project-page" className="project-page">
      <h1>Personal projects</h1>
      <ProjectPage> 
        <ProjectItem data={projects.portfolioV3} />
        <ProjectItem data={projects.auto27} />
        <ProjectItem data={projects.todoApp} />
        <ProjectItem data={projects.markdown} />
        <ProjectItem data={projects.youtubeApp} />
        <ProjectItem data={projects.wikiSearch} />
      </ProjectPage>
    </div>
  )
}