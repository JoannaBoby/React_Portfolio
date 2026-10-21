// src/components/GitHubStats/GitHubStats.jsx
import { useState, useEffect } from 'react';
import './gitHubstats.css';

function GitHubStats({ username }) {
  // States: Data, Loading, Error
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) throw new Error('User not found');

        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [username]);

  // Conditional Rendering
  if (loading) return <p>Loading GitHub stats...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!stats) return null;

  return (
    <div className="github-stats">
      <img
        src={stats.avatar_url}
        alt={`${stats.login}'s GitHub avatar`}
        width="100"
        height="100"
        style={{ borderRadius: '50%' }}
        loading="lazy" // performance boost
      />
      <div className="stats-info">
        <h3>{stats.name || stats.login}</h3>
        <p>
          Public Repos: <strong>{stats.public_repos}</strong>
        </p>
        <p>
          Followers: <strong>{stats.followers}</strong>
        </p>
        <p>
          Following: <strong>{stats.following}</strong>
        </p>
      </div>
    </div>
  );
}

export default GitHubStats;
