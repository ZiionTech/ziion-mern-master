import React from 'react';
import TrainingCard from '../../TrainingCard';
import styles from './SixWeeksTrainingCourses.module.css';
import { FaBrain, FaFlask, FaChartLine, FaBusinessTime, FaCloud, FaRobot, FaShieldAlt, FaMobileAlt, FaCode, FaJsSquare, FaDigitalTachograph } from 'react-icons/fa';

const trainings = [
  {
    title: "Machine Learning",
    icon: <FaBrain />,
    topics: [
      "Functions, File I/O, Exception Handling",
      "Data Visualization",
      "Machine Learning Fundamentals",
      "Supervised & Unsupervised Learning",
      "Model Evaluation and Selection",
      "Natural Language Processing (NLP)",
      "Real-World Applications"
    ]
  },
  {
    title: "Data Science",
    icon: <FaFlask />,
    topics: [
      "Data And Database, Relational Databases and SQL",
      "NoSQL Databases",
      "Exploratory Data Analysis (EDA)",
      "Advanced Machine Learning Algorithms",
      "Natural Language Processing (NLP)",
      "Convolutional & Recurrent Neural Networks",
      "Spark for Data Processing"
    ]
  },
  {
    title: "Data Analytics",
    icon: <FaChartLine />,
    topics: [
      "Qualitative & Quantitative Data Type",
      "Inferential Statistics",
      "Data Cleaning and Preprocessing",
      "Data Wrangling and Transformation",
      "Predictive Analytics and Regression",
      "Logistic Regression, Decision Trees and Random Forests",
      "Cluster Analysis"
    ]
  },
  {
    title: "Business Analytics",
    icon: <FaBusinessTime />,
    topics: [
      "Data Collection and Preparation",
      "Descriptive Analytics",
      "Identifying Product Co-occurrences",
      "Text Analytics and Sentiment Analysis",
      "Cluster Analysis and Segmentation",
      "Business Intelligence and Reporting",
      "Advanced Predictive Modeling"
    ]
  },
  {
    title: "Cloud Computing",
    icon: <FaCloud />,
    topics: [
      "Introduction to Cloud Services",
      "Cloud Architecture and Design",
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Cloud Security",
      "Deploying and Managing Cloud Applications"
    ]
  },
  {
    title: "Artificial Intelligence",
    icon: <FaRobot />,
    topics: [
      "Fundamentals of AI",
      "Search Algorithms",
      "Expert Systems",
      "Natural Language Processing",
      "Machine Vision",
      "Robotics",
      "Ethical AI and Future Trends"
    ]
  },
  {
    title: "Cybersecurity",
    icon: <FaShieldAlt />,
    topics: [
      "Introduction to Cybersecurity",
      "Network Security",
      "Cryptography",
      "Ethical Hacking",
      "Security Policies and Procedures",
      "Incident Response and Management",
      "Security in Cloud Computing"
    ]
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    topics: [
      "Introduction to Mobile Development",
      "iOS Development with Swift",
      "Android Development with Kotlin",
      "Cross-Platform Development with Flutter",
      "User Interface Design",
      "Mobile App Deployment",
      "App Monetization Strategies"
    ]
  },
  {
    title: "Full Stack Development (MERN)",
    icon: <FaCode />,
    topics: [
      "Introduction to Web Development",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Building RESTful APIs",
      "Deploying MERN Applications"
    ]
  },
  {
    title: "Full Stack Development (MEAN)",
    icon: <FaCode />,
    topics: [
      "Introduction to Web Development",
      "MongoDB",
      "Express.js",
      "Angular",
      "Node.js",
      "Building RESTful APIs",
      "Deploying MEAN Applications"
    ]
  },
  {
    title: "Java",
    icon: <FaCode />,
    topics: [
      "Java Basics",
      "Object-Oriented Programming",
      "Exception Handling",
      "Collections Framework",
      "JavaFX",
      "Multithreading",
      "Spring Framework"
    ]
  },
  {
    title: "Java Full Stack Development",
    icon: <FaCode />,
    topics: [
      "Java Basics",
      "Spring Boot",
      "Hibernate",
      "JavaScript",
      "React.js",
      "RESTful Web Services",
      "Deploying Java Applications"
    ]
  },
  {
    title: "Python",
    icon: <FaCode />,
    topics: [
      "Python Basics",
      "Data Structures",
      "File I/O",
      "Exception Handling",
      "Web Scraping",
      "Libraries (Pandas, NumPy)",
      "Django Framework"
    ]
  },
  {
    title: "Python Full Stack Development",
    icon: <FaCode />,
    topics: [
      "Python Basics",
      "Django Framework",
      "REST APIs",
      "JavaScript",
      "React.js",
      "Database Integration",
      "Deploying Python Applications"
    ]
  },
  {
    title: "Frontend with JS",
    icon: <FaJsSquare />,
    topics: [
      "HTML, CSS, JavaScript",
      "Responsive Design",
      "JavaScript ES6+",
      "React.js",
      "State Management with Redux",
      "Frontend Routing",
      "Testing and Debugging"
    ]
  },
  {
    title: "Backend with JS",
    icon: <FaJsSquare />,
    topics: [
      "Node.js Basics",
      "Express.js",
      "Database Integration (MongoDB, SQL)",
      "Authentication and Authorization",
      "RESTful API Development",
      "Error Handling",
      "Deploying Node.js Applications"
    ]
  },
  {
    title: "Digital Marketing",
    icon: <FaDigitalTachograph />,
    topics: [
      "Introduction to Digital Marketing",
      "SEO Basics",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Google Analytics",
      "Pay-Per-Click (PPC) Advertising"
    ]
  }
];

const SixWeeksTrainingCourses = () => {
  return (
    <div className={styles.trainingPage}>
      <h1>6/Six Weeks Industrial Training in Chandigarh Available for:</h1>
      <div className={styles.cardContainer}>
        {trainings.map((training, index) => (
          <TrainingCard 
            key={index}
            title={training.title}
            icon={training.icon}
            topics={training.topics}
          />
        ))}
      </div>
    </div>
  );
};

export default SixWeeksTrainingCourses;
