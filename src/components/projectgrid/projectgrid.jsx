import React from 'react';
import ProjectCard from '../projectcard/projectcard.jsx';
import './projectgrid.css';

export default function ProjectGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return <p className="no-projects">No projects found.</p>;
  }

  return (
    <div className="project-grid-container">
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id || index} 
            project={project} 
          />
        ))}
      </div>
    </div>
  );
}