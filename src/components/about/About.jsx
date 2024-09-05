import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>About Me</h2>
      <img src="public/img_1906.jpg" alt="Andrew Blanchard" className={styles.profileImage} />
      <h2 className={styles.greeting}>Hello!</h2>
      <p className={styles.aboutText}>
        I'm an accomplished and creative Front-End Web Developer with a strong foundation in full-stack web development.
      </p>
      <p className={styles.aboutText}>
        Passionate about creating engaging and user-friendly web experiences that enhance corporate image and user satisfaction.
      </p>
      <p className={styles.aboutText}>
        I effectively collaborate with cross-functional teams to develop and implement responsive, efficient, and visually appealing web applications from concept through development.
      </p>
      <p className={styles.aboutText}>
        Known for quickly adapting to new technologies, problem-solving skills, and a keen eye for detail in coding and design.
      </p>
    </section>
  );
}

export default About;
