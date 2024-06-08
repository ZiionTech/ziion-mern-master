// src/FormSection.js
import React from 'react';
import styles from './FormSection.module.css';

const FormSection = () => {
  const features = [
    { title: "220 Hrs Instructor Led Training", icon: "🧑‍🏫" },
    { title: "248 Hrs Project & Exercises", icon: "💻" },
    { title: "Certification", icon: "📜" },
    { title: "Job Assistance", icon: "🧑‍💼" },
    { title: "Flexible Schedule", icon: "📅" },
    { title: "Lifetime Free Upgrade", icon: "🔄" },
    { title: "Mentor Support", icon: "👨‍🏫" },
  ];

  return (
    <div className={styles.fullStackPage}>
      <div className={styles.contentSection}>
        <header className={styles.pageHeading}>
          <h1>Join Six weeks <span>Industrial Training</span> in Chandigarh</h1>
          <p>We are not just a summer training company in Chandigarh, we are an industrial expert company dedicated to providing comprehensive services that ensure you learn the right techniques. Our dual focus on training and professional services allows us to bridge the gap between theoretical knowledge and practical application.</p>
          <p>By actively working on real-world projects for diverse industries, our expert team stays ahead of the latest trends and technologies. This hands-on experience directly informs our training programs, ensuring that you receive cutting-edge, industry-relevant education. Whether it’s through live project work, industry simulations, or direct mentorship from seasoned professionals, we equip you with the skills and insights necessary to excel in your career</p>
          <p> Our commitment to excellence and industry expertise sets us apart, making us the ideal partner for your professional growth and development.

</p>
          <p className={styles.highlight}>Our Training Programs Are Especially Designed For 10th/12th Passed Students, College & University Students, Marketing Professionals, Small Business Owners & Housewives To Get Their 1st Job In IT Sector</p>
        </header>
        <section className={styles.featuresSection}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureBox}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
            </div>
          ))}
        </section>
        <div className={styles.ctaSec}>
          <button className={styles.ctaBtn}>TALK TO ADVISOR</button>
        </div>
      </div>
      <div className={styles.advisorFormSection}>
        <h2>Talk to Learning Advisor</h2>
        <form className={styles.advisorForm}>
          <input type="text" placeholder="Name" className={styles.formInput} />
          <input type="email" placeholder="Email" className={styles.formInput} />
          <input type="tel" placeholder="Phone No." className={styles.formInput} />
          <select className={styles.formSelect}>
            <option value="">--Select Course--</option>
          </select>
          <select className={styles.formSelect}>
            <option value="">--Select Branch--</option>
          </select>
          <button type="submit" className={styles.formButton}>Submit Now</button>
          <p>Thank you for reaching out to us! Our learning advisors are eager to assist you on your journey towards mastering full stack web development. By submitting this form, you're taking the first step towards unlocking a world of opportunities in the dynamic field of IT. Expect a prompt response from our team who will guide you through our comprehensive training programs tailored to suit your needs and aspirations. Get ready to embark on an exciting learning adventure with us!</p>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
