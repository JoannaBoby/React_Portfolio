import { useState } from 'react';
import { projectsData, categories } from '../data/project.js';
import ProjectGrid from '../components/projectgrid/projectgrid.jsx';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visible =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="projects-page container" style={{ padding: '40px 0' }}>
      <div className="projects-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>My Projects</h1>
        <p style={{ color: 'var(--text)', marginTop: '10px' }}>
          Browse through my work. Use the filters to explore projects by category.
        </p>

        <div className="project-filters" style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={cat === activeFilter ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <ProjectGrid projects={visible} />
    </div>
  );
}

export default Projects;
