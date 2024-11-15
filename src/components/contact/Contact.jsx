import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xpwzzgqg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Thanks for your submission!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form');
    }
  };

  return (
    <section className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Me</h2>
      <img src="/img_1906.jpg" alt="Andrew Blanchard" className={styles.profileImage} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send</button>
        {status && <p className={styles.status}>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;