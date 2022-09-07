import React from 'react';
import ProjectBodyElement from './ProjectBodyElement';

function ProjectBodyElements({ project, isMobilePortrait }) {
  return (
    <div>
      <ProjectBodyElement
        data={project.description}
        isMobilePortrait={isMobilePortrait}
      />
      <ProjectBodyElement
        data={project.frontEnd}
        type={'Front-End'}
        isMobilePortrait={isMobilePortrait}
      />
      <ProjectBodyElement
        data={project.backEnd}
        type={'Back-End'}
        isMobilePortrait={isMobilePortrait}
      />
      <ProjectBodyElement
        data={project.deployedURL}
        isMobilePortrait={isMobilePortrait}
      />
    </div>
  );
}

export default ProjectBodyElements;
