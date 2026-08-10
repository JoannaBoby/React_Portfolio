import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px', color: '#2E86AB' }}>
        404
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '30px', color: '#555' }}>
        Page Not Found
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
