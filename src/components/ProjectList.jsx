import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <p className="no-projects">No projects found.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;