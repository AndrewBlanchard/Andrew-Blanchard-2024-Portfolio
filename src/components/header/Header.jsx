import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Andrew Blanchard</h1>
        <h2 className={styles.title}>Front-End Web Developer</h2>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>About Me</Link>
          <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
          <Link to="/resume" className={styles.navLink}>Resume</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;