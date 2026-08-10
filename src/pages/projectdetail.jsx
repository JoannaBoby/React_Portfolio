import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '60px' }}>
        <h2>Project not found!</h2>
        <Link to="/projects" className="btn btn-secondary" style={{ marginTop: '20px' }}>
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <Link to="/projects" className="btn btn-secondary" style={{ marginBottom: '20px' }}>
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>{project.longDesc}</p>

      <div style={{ margin: '20px 0' }}>
        <h3>Tech Stack:</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none', padding: 0 }}>
          {project.tech.map((t, index) => (
            <li key={index} style={{ background: '#e0e7ff', color: '#4338ca', padding: '6px 12px', borderRadius: '6px', fontWeight: '600' }}>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
