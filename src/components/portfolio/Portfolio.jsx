import React from 'react';
import Project from './Project';
import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <section className={styles.portfolioContainer}>
      <h2 className={styles.portfolioTitle}>My Portfolio</h2>
      <div className={styles.projectsGrid}>
        <Project 
          title="PWA Text Editor"
          image="https://via.placeholder.com/300x200"
          deployedLink="https://my-pwa-text-editor-ab123-b500014d45fc.herokuapp.com/"
          githubLink="https://github.com/AndrewBlanchard/PWA-Text-Editor"
        />
        {/* Add more Project components here */}
      </div>
    </section>
  );
}

export default Portfolio;