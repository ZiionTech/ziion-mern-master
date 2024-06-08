// src/TrainingCard.js
import React from 'react';
import styles from './TrainingCard.module.css';

const TrainingCard = ({ title, icon, topics }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.icon}>{icon}</div>
        <h2>{title}</h2>
      </div>
      <ul className={styles.topicList}>
        {topics.map((topic, index) => (
          <div>
            <li key={index}>{topic}</li>
            <hr></hr>
          </div>
        ))}
        
      </ul>
      <div className={styles.cardFooter}>
        <button className={styles.demoClass}>BOOK FREE DEMO CLASS</button>
      </div>
    </div>
  );
};

export default TrainingCard;
