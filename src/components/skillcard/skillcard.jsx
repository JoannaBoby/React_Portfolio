import './skillCard.css';

function SkillCard({ name, level, icon, link }) {
  const levelPercent = {
    Beginner: 33,
    Intermediate: 66,
    Advanced: 90,
  };

  const pct = levelPercent[level] || 50;

  return (
    <div className="skill-card">
      {icon && <span className="skill-icon" aria-hidden="true">{icon}</span>}
      <h4 className="skill-name">{name}</h4>
      <p className="skill-level">{level}</p>

      <div className="skill-bar" aria-label={`${level} skill level`}>
        <div
          className="skill-fill"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Optional: clickable link to learn more about the skill */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          aria-label={`Learn more about ${name}`}
        >
          Learn More
        </a>
      )}
    </div>
  );
}

export default SkillCard;
