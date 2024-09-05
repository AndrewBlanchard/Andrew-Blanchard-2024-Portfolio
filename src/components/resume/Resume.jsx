import React from 'react';
import styles from './Resume.module.css';

function Resume() {
  return (
    <section className={styles.resumeContainer}>
      <h2 className={styles.resumeTitle}>Resume</h2>
      <a href="/path-to-your-resume.pdf" download className={styles.downloadButton}>Download Full Resume</a>
      
      <div className={styles.resumeContent}>
        <h1 className={styles.name}>Andrew Blanchard</h1>
        <h2 className={styles.jobTitle}>FRONT-END WEB DEVELOPER</h2>
        <p className={styles.contactInfo}>
          Austin, TX  blanchard0andrew@gmail.com | <a href="https://www.linkedin.com/in/andrew-blanchard-90544a77" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        
        <p className={styles.summary}>
          Accomplished and creative Front-End Web Developer with a strong foundation in full-stack web development. Passionate about creating engaging and user-friendly web experiences that enhance corporate image and user satisfaction. Effectively collaborates with cross-functional teams to develop and implement responsive, efficient, and visually appealing web applications from concept through development. Known for quickly adapting to new technologies, problem-solving skills, and a keen eye for detail in coding and design.
        </p>
        
        <h3 className={styles.sectionTitle}>Areas of Expertise</h3>
        <ul className={styles.skillsList}>
          <li>Front-End Web Development</li>
          <li>Responsive Web Design</li>
          <li>Cross-Functional Team Collaboration</li>
          <li>User Interface Design</li>
          <li>Content Development</li>
          <li>Problem Solving & Debugging</li>
          <li>Version Control (Git)</li>
          <li>Video Production & Editing</li>
          <li>2D & 3D animation</li>
          <li>Strategic Planning</li>
        </ul>
        
        <h3 className={styles.sectionTitle}>Technical Skills</h3>
        <ul className={styles.skillsList}>
          <li>HTML5, CSS, & JavaScript</li>
          <li>Front-End Frameworks (e.g., React, jQuery, & Semantic UI)</li>
          <li>Web & Third-Party APIs</li>
          <li>Node.js, Express.js</li>
          <li>SQL & NoSQL</li>
          <li>MERN</li>
          <li>ORM</li>
        </ul>
        
        <h3 className={styles.sectionTitle}>Education</h3>
        <ul className={styles.educationList}>
          <li><strong>Certified Digital Marketing Associate (DMCA)</strong>, Duke University</li>
          <li><strong>Bachelor of Arts, Communications and Media Studies</strong>, Curry College
            <br /><em>Alexander Graham Bell Honor Society Nominee, UCFW Scholar, 3.5 GPA</em>
          </li>
          <li><strong>Associate of Arts, Graphic Design</strong>, Cape Cod Community College
            <br /><em>Phi Theta Kappa, UCFW Scholar</em>
          </li>
        </ul>
        
        <h3 className={styles.sectionTitle}>Professional Experience</h3>
        <div className={styles.jobExperience}>
          <h4>Simple A</h4>
          <p><strong>Senior Editor and Producer | 2020 - Present</strong></p>
          <p>Direct, produce and edit educational video content for release on YouTube, Vimeo, the company website, and social media. Manage and organize multiple, high-quality projects, media, and assets throughout the production lifecycle. Integrate edits based on feedback from producers, clients, and management. Review junior team member content and storytelling.</p>
          <ul>
            <li>Recorded and edited an educational series for YouTube, utilizing 4K footage, green screen keying, and 2D and 3D animations; published two seasons worth of original content that led to notable company growth</li>
            <li>Created and ran an advertising campaign for YouTube, which grew viewership by 300%</li>
          </ul>

          <h4>Rooster Teeth Productions</h4>
          <p><strong>Editor | 2016 - 2019 </strong></p>
          <p>Developed and edited creative and informative video content for release on YouTube and social media. Organized projects, media, and assets throughout the editorial process. Operated camera and lighting equipment.</p>
          <ul>
            <li>Developed concise and informative titles and 140-character video descriptions, along with video thumbnails utilizing Adobe Creative Cloud</li>
            <li>Released prioritized videogame gameplay videos, producing multiple videos netting 250K-750K YouTube views on average</li>
            <li>Featured in digital content as a part-time on-screen personality</li>
            <li>Promoted from Assistant Editor to Full-Time Editor within 2 months</li>
          </ul>
          {/* Add more job experiences here */}
        </div>
      </div>
    </section>
  );
}

export default Resume;