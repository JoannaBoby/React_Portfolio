import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import AboutSection from './components/aboutsection/aboutsection.jsx';
import ContactForm from './components/contactform/contactform.jsx';
import GitHubStats from './components/githubstats/githubstats.jsx';
import Hero from './components/hero/hero.jsx';
import ProjectCard from './components/projectcard/projectcard.jsx';
import ProjectGrid from './components/projectgrid/projectgrid.jsx';
import SkillCard from './components/skillcard/skillcard.jsx';

// Pages
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import NotFound from './pages/notfound.jsx';


function App() {
  // Lazy state initialization: Reads localStorage directly on initial render
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Updates body attribute and localStorage whenever theme changes
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
