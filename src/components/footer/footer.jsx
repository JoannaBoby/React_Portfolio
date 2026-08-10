import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} Joanna Boby. Built with <span role="img" aria-label="globe">🌐</span> React
      </p>
    </footer>
  );
}

export default Footer; // Export so App.jsx can use it
