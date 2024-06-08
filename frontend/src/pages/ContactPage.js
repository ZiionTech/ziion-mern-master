import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactUsPage}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.contactFormSection}>
          <h2>Get in Touch</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label>Phone</label>
              <input type="tel" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea className={styles.formInput} rows="5"></textarea>
            </div>
            <button type="submit" className={styles.formButton}>Submit</button>
          </form>
        </div>
        <div className={styles.contactInfoSection}>
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Address:</strong> 1234 Street Name, City, State, ZIP</li>
            <li><strong>Phone:</strong> +91-9878564224</li>
            <li><strong>Email:</strong> contact@company.com</li>
            <li><strong>Office Hours:</strong> Mon - Fri, 9am - 6pm</li>
          </ul>
        </div>
      </div>
      <div className={styles.contactMapSection}>
        <h2>Our Location</h2>
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2090623972563!2d76.70553657548216!3d30.712522586609136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef7b48418d6b%3A0x8b24ec380ed85440!2sZiion%20Technology!5e0!3m2!1sen!2sin!4v1717829217562!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0, width: '100%', height: '400px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

  );
};

export default ContactPage;
