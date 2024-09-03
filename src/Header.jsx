import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </header>
  );
}