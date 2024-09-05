import React from 'react';
import styles from './Portfolio.module.css';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className={styles.project}>
      <img src={image} alt={title} className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.projectLinks}>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>View Project</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const projects = [
    {
      title: "PWA Text Editor",
      image: "/assets/Screenshot-of-Deployed-App.png",
      deployedLink: "https://my-pwa-text-editor-ab123-b500014d45fc.herokuapp.com/",
      githubLink: "https://github.com/AndrewBlanchard/PWA-Text-Editor"
    },
    // Add more projects here
  ];

  return (
    <section className={styles.portfolioContainer}>
      <h2 className={styles.portfolioTitle}>My Portfolio</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;