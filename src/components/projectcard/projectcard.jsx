import './projectcard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Optional: add alt text for project image if available */}
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-card-img"
          loading="lazy"
        />
      )}

      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tech.map((t, index) => (
            <span key={index} className="tag">
              {t}
            </span>
          ))}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => window.open(project.link, '_blank')}
          aria-label={`View project: ${project.title}`}
        >
          View Project
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
