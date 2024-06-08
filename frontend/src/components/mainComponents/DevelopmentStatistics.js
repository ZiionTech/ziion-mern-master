import React from 'react';
import styles from './DevelopmentStatistics.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUsers, faMoneyBillWave, faChartLine, faBrain, faDatabase, faChartPie, faLaptopCode, faPython, faJar, faBullhorn } from '@fortawesome/free-solid-svg-icons';


const statistics = [
  {
    title: "Full Stack Development (MERN)",
    facts: [
      "High demand in startups and tech companies.",
      "Comprehensive understanding of both frontend and backend."
    ],
    jobRate: "20%",
    averageSalary: "$110,000",
    icon: faCode
  },
  {
    title: "Full Stack Development (MEAN)",
    facts: [
      "Popular in enterprise environments.",
      "Robust community and extensive resources."
    ],
    jobRate: "15%",
    averageSalary: "$105,000",
    icon: faCode
  },
  {
    title: "Frontend Development (React)",
    facts: [
      "Most popular library for modern web development.",
      "Highly flexible and component-based architecture."
    ],
    jobRate: "25%",
    averageSalary: "$95,000",
    icon: faUsers
  },
  {
    title: "Frontend Development (Angular)",
    facts: [
      "Widely used in large-scale applications.",
      "Backed by Google and has extensive documentation."
    ],
    jobRate: "10%",
    averageSalary: "$90,000",
    icon: faUsers
  },
  {
    title: "Machine Learning",
    facts: [
      "Rapidly growing field with applications in various industries.",
      "Strong focus on algorithms and data."
    ],
    jobRate: "35%",
    averageSalary: "$120,000",
    icon: faBrain
  },
  {
    title: "Data Science",
    facts: [
      "Crucial for extracting insights from large datasets.",
      "Interdisciplinary field involving statistics, data analysis, and machine learning."
    ],
    jobRate: "30%",
    averageSalary: "$115,000",
    icon: faDatabase
  },
  {
    title: "Business Analysis",
    facts: [
      "Helps organizations improve processes and systems.",
      "Focuses on identifying business needs and solutions."
    ],
    jobRate: "12%",
    averageSalary: "$85,000",
    icon: faChartPie
  },
  {
    title: "Data Analytics",
    facts: [
      "Essential for interpreting complex data sets.",
      "Used in various sectors to drive business decisions."
    ],
    jobRate: "20%",
    averageSalary: "$80,000",
    icon: faChartLine
  },
  {
    title: "Python Development",
    facts: [
      "Highly versatile and widely used programming language.",
      "Strong community support and extensive libraries."
    ],
    jobRate: "22%",
    averageSalary: "$100,000",
    icon: faCode
  },
  {
    title: "Python Web Development",
    facts: [
      "Popular for backend web development with frameworks like Django and Flask.",
      "Focuses on building robust and scalable web applications."
    ],
    jobRate: "18%",
    averageSalary: "$95,000",
    icon: faLaptopCode
  },
  {
    title: "Java Development",
    facts: [
      "Widely used in enterprise environments and Android app development.",
      "Strong object-oriented programming principles."
    ],
    jobRate: "15%",
    averageSalary: "$105,000",
    icon: faJar
  },
  {
    title: "Java Full Stack Development",
    facts: [
      "Comprehensive skill set involving both frontend and backend using Java.",
      "Strong demand in large organizations."
    ],
    jobRate: "17%",
    averageSalary: "$108,000",
    icon: faJar
  },
  {
    title: "Digital Marketing",
    facts: [
      "Critical for online presence and business growth.",
      "Involves SEO, SEM, content marketing, and social media."
    ],
    jobRate: "25%",
    averageSalary: "$70,000",
    icon: faBullhorn
  }
];

const DevelopmentStatistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      <h2>Development Statistics</h2>
      <div className={styles.statsGrid}>
        {statistics.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <FontAwesomeIcon icon={stat.icon} className={styles.icon} />
            <h3>{stat.title}</h3>
            {stat.facts.map((fact, idx) => (
              <p key={idx}>{fact}</p>
            ))}
            <p className={styles.number}><strong>Job Rate:</strong> {stat.jobRate}</p>
            <p className={styles.number}><strong>Average Salary:</strong> {stat.averageSalary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentStatistics;
