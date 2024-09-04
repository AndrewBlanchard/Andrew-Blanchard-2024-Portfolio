import React from 'react';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/path-to-your-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;