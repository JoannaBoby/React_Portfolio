import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            WELCOME TO MY PORTFOLIO
          </div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="name-highlight">Joanna Boby</span> <span className="wave-emoji">👋</span>
          </h1>

          <p className="hero-subtitle">
            1st Year Computer Science & Engineering Student at <span className="highlight-text">RUAS</span>
          </p>

          <p className="hero-description">
            Passionate about web development, building clean digital experiences, and exploring new technologies.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-mint">
              <span className="btn-icon">&lt;/&gt;</span> View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span className="btn-icon">✉</span> Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="hero-image-container">
          <div className="profile-frame">
            <img 
              src="/images/profile.jpeg" 
              alt="Joanna Boby" 
              className="profile-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
