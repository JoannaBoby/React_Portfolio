import { projectsData } from '../data/project.js';
import ProjectCard from '../components/projectcard/projectcard.jsx';
import Hero from '../components/hero/hero.jsx';
import AboutSection from '../components/aboutsection/aboutsection.jsx';

function Home() {
  const featured = projectsData.filter(p => p.featured);

  return (
    <div className="home-page">
      <Hero />
      <AboutSection />

      <section className="featured-section container" id="projects" style={{ marginTop: '60px' }}>
        <h2>Featured Projects</h2>
        <p style={{ color: 'var(--text)', marginBottom: '20px' }}>
          A selection of my highlighted work showcasing my current skills and learning journey.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}
        >
          {featured.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
