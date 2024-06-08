import React from 'react';
import styles from './AboutUsPage.module.css';

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUsPage}>
      <header className={styles.aboutHeader}>
        <h1>About Us</h1>
        <p>Learn more about our company, our mission, and the people behind our success.</p>
      </header>

      <section className={styles.companyOverview}>
        <h2>Company Overview</h2>
        <p>
          We are a leading company in our industry, dedicated to providing top-notch services and products to our customers. 
          Our team of experts works tirelessly to ensure customer satisfaction and to stay ahead of industry trends. 
          Established in 2005, we have grown from a small startup to a well-respected firm with a global presence.
        </p>
      </section>

      <section className={styles.missionVision}>
        <h2>Mission & Vision</h2>
        <div className={styles.missionVisionContent}>
          <div className={styles.mission}>
            <h3>Our Mission</h3>
            <p>
              To deliver high-quality solutions that create value and reliable competitive advantage for our clients around the world.
            </p>
          </div>
          <div className={styles.vision}>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and innovative company in our industry, known for our commitment to excellence and our customer-centric approach.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>COO</p>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.value}>
            <h3>Integrity</h3>
            <p>We uphold the highest standards of integrity in all of our actions.</p>
          </div>
          <div className={styles.value}>
            <h3>Customer Commitment</h3>
            <p>We develop relationships that make a positive difference in our customers' lives.</p>
          </div>
          <div className={styles.value}>
            <h3>Quality</h3>
            <p>We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</p>
          </div>
          <div className={styles.value}>
            <h3>Teamwork</h3>
            <p>We work together, across boundaries, to meet the needs of our customers and to help our company win.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
