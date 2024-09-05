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
      title: "The Language Dungeon",
      image: "public/project_pngs/LD_Logo_600px.png",
      deployedLink: "https://lb-dungen.onrender.com/",
      githubLink: "https://github.com/Fitbert/LB-Dungen"
    },

    {
      title: "Excercise My Body",
      image: "public/project_pngs/Backworkouts.png",
      deployedLink: "https://nicksprague1342.github.io/Project-1/",
      githublink: "https://github.com/NickSprague1342/Project-1"
      
    },

    {
      title: "Regex Hex Value Tutorial",
      image: "public/project_pngs/coderpad-regex-the-complete-guide.jpg",
      deployedLink: "https://gist.github.com/AndrewBlanchard/d0d3b555780baca2a2b402d94df810fd",
      githubLink: "https://github.com/AndrewBlanchard/Regex-Hex-Value-Tutorial/tree/main"
    },

    {
      title: "PWA Text Editor",
      image: "public/project_pngs/JATE_Screenshot.png",
      deployedLink: "https://my-pwa-text-editor-ab123-b500014d45fc.herokuapp.com/",
      githubLink: "https://github.com/AndrewBlanchard/PWA-Text-Editor"
    },

    {
      title: "Social Network API",
      image: "public/project_pngs/15855652400_5c1645560e_b.jpg",
      deployedLink: "https://www.youtube.com/watch?v=OFHeydgTGrU",
      githubLink: "https://github.com/AndrewBlanchard/Social-Network-API/tree/master"
    },

    {
      title: "SVG Logo Generator",
      image: "public/project_pngs/10-oop-homework-demo.png",
      deployedLink: "https://www.youtube.com/watch?v=5v0gTRMHEjc",
      githubLink: "https://github.com/AndrewBlanchard/SVG-Logo-Generator-/tree/master"
    },

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