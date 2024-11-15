import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.followText}>Follow and Connect with me on:</p>
        <div className={styles.links}>
          <a 
            href="https://github.com/AndrewBlanchard" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/andrew7blanchard/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/andy_blanchard/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;