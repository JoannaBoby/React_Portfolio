import React from 'react';
import './aboutsection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Image Box with Radiant Border */}
        <div className="about-image-card">
          <img 
            src="/images/comp.jpeg" 
            alt="Workspace setup" 
            className="about-img" 
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="section-badge">ABOUT ME</span>
          
          <h2 className="about-title">
            About <span className="highlight-gradient">Me</span>
          </h2>

          <p className="about-paragraph">
            Hi! I'm Joanna, a 1st-year Computer Science and Engineering student at Ramaiah University of Applied Sciences (RUAS). I am passionate about software development, learning web technologies, and building clean, user-friendly digital experiences.
          </p>

          <p className="about-paragraph">
            I enjoy turning ideas into real projects and constantly learning new things that help me grow as a developer.
          </p>

          {/* Color-Coded Skill Cards */}
          <div className="skills-row">
            <div className="skill-pill pill-cyan">
              <span className="pill-icon">&lt;/&gt;</span> Web Development
            </div>
            <div className="skill-pill pill-emerald">
              <span className="pill-icon">💻</span> Problem Solving
            </div>
            <div className="skill-pill pill-purple">
              <span className="pill-icon">💡</span> Always Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}