import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-item">
      <div className="project-thumbnail">
        {project.imageUrl && project.imageUrl !== 'https://via.placeholder.com/100' ? (
          <img src={project.imageUrl} alt={project.title} />
        ) : (
          <div className="placeholder-icon" aria-hidden="true">✕</div>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;