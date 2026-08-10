import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <div className="logo">JB</div>

        <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
          {['Home', 'About', 'Projects', 'Contact'].map((label, index) => {
            const path = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
