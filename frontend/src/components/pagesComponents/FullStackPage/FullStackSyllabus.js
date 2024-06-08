import React from 'react';
import Collapsible from 'react-collapsible';
import './SyllabusFS.css';

function SyllabusFS() {
  const syllabusLeft = [
    {
      week: 1,
      topic: 'Introduction to Web Design',
      content: [
        'Overview of web design, its importance, and basic principles.',
        'Understanding web design workflows.',
        'Basic tools and software for web design.',
      ],
    },
    {
      week: 2,
      topic: 'HTML',
      content: [
        'Introduction to HTML, elements, attributes, and structure of HTML documents.',
        'Creating basic web pages using HTML.',
        'Semantic HTML and accessibility considerations.',
      ],
    },
    {
      week: 3,
      topic: 'CSS',
      content: [
        'Introduction to CSS, styling elements, and creating layouts.',
        'CSS selectors, properties, and values.',
        'Advanced CSS techniques including Flexbox and Grid.',
      ],
    },
    {
      week: 4,
      topic: 'Responsive Web Design',
      content: [
        'Principles of responsive design, media queries, and flexible layouts.',
        'Mobile-first design approach.',
        'Using frameworks like Bootstrap for responsive design.',
      ],
    },
    {
      week: 5,
      topic: 'JavaScript',
      content: [
        'Basics of JavaScript programming, including syntax, functions, and events.',
        'Working with the DOM (Document Object Model).',
        'Asynchronous JavaScript and AJAX.',
      ],
    },
    {
      week: 6,
      topic: 'Design Principles',
      content: [
        'Key design principles such as contrast, repetition, alignment, and proximity.',
        'Understanding color theory and typography.',
        'Creating visually appealing and user-friendly designs.',
      ],
    },
    {
      week: 7,
      topic: 'User Experience Design',
      content: [
        'Introduction to UX design, user research, and usability testing.',
        'Wireframing and prototyping.',
        'User-centered design process and methodologies.',
      ],
    },
    {
      week: 8,
      topic: 'Web Design Tools and Technologies',
      content: [
        'Overview of web design tools and modern technologies.',
        'Using design software like Adobe XD, Figma, or Sketch.',
        'Introduction to version control systems like Git.',
      ],
    },
    {
      week: 9,
      topic: 'Web Animation',
      content: [
        'Techniques for adding animations to web pages using CSS and JavaScript.',
        'Introduction to CSS animations and transitions.',
        'Using JavaScript libraries for animations like GSAP.',
      ],
    },
    {
      week: 10,
      topic: 'Web Design Project',
      content: [
        'Hands-on project to apply web design skills and create a website.',
        'Project planning and requirement analysis.',
        'Implementation and testing of the web design project.',
      ],
    },
    {
      week: 11,
      topic: 'Introduction to React',
      content: [
        'Basics of React, components, and state management.',
        'JSX syntax and rendering elements.',
        'Creating functional and class components.',
      ],
    },
  ];

  const syllabusRight = [
    
    {
      week: 12,
      topic: 'JavaScript Frameworks',
      content: [
        'Introduction to popular JavaScript frameworks and their use cases.',
        'Overview of Angular, Vue.js, and Svelte.',
        'Comparison between different frameworks and their ecosystems.',
      ],
    },
    {
      week: 13,
      topic: 'React Advanced Topics',
      content: [
        'Advanced concepts in React, including hooks and context API.',
        'State management with Redux.',
        'Optimizing performance in React applications.',
      ],
    },
    {
      week: 14,
      topic: 'Introduction to Node.js',
      content: [
        'Basics of Node.js and its application in server-side programming.',
        'Understanding the event-driven architecture.',
        'Setting up a Node.js development environment.',
      ],
    },
    {
      week: 15,
      topic: 'Node.js Fundamentals',
      content: [
        'Core concepts of Node.js, including modules, events, and file systems.',
        'Building a simple server with Node.js.',
        'Introduction to npm (Node Package Manager).',
      ],
    },
    {
      week: 16,
      topic: 'Node.js Advanced Topic',
      content: [
        'Advanced topics in Node.js, including streams and buffer.',
        'Working with asynchronous programming and Promises.',
        'Introduction to Node.js frameworks like Express.',
      ],
    },
    {
      week: 17,
      topic: 'Introduction to Express.js',
      content: [
        'Basics of Express.js for building web applications and APIs.',
        'Setting up an Express.js project.',
        'Creating routes and middleware in Express.js.',
      ],
    },
    {
      week: 18,
      topic: 'Express.js Fundamentals',
      content: [
        'Core features of Express.js, including routing and middleware.',
        'Handling requests and responses in Express.js.',
        'Introduction to templating engines like EJS or Pug.',
      ],
    },
    {
      week: 19,
      topic: 'Express.js Advanced Topics',
      content: [
        'Advanced concepts in Express.js, such as error handling and security.',
        'Using middleware for authentication and authorization.',
        'Building RESTful APIs with Express.js.',
      ],
    },
    {
      week: 20,
      topic: 'Introduction to MongoDB',
      content: [
        'Basics of MongoDB, including CRUD operations and schema design.',
        'Introduction to NoSQL databases.',
        'Setting up a MongoDB server and using MongoDB Atlas.',
      ],
    },
    {
      week: 21,
      topic: 'MongoDB Fundamentals',
      content: [
        'Core concepts of MongoDB, such as indexing and aggregation.',
        'Using Mongoose for data modeling in Node.js.',
        'Optimizing queries and performance in MongoDB.',
      ],
    },
    {
      week: 22,
      topic: 'Project and Client Management',
      content: [
        'Client Onboarding',
        'Project Planning',
        'Project Reporting',
        'Project Delivery'
      ],
    },
  ];

  return (
    <section className="syllabus">
      <div className="syllabus-container">
        <h2>Full Stack Web Development Course Syllabus In Chandigarh</h2>
        <p>Our Full Stack Web Development Course in Chandigarh is designed and curated by industry experts who have over 20+ years of experience working as Developers. That's, why by enrolling in this training program, you can build a solid foundation for all the core components of Full Stack Web Development, plus gain proficiency in HTML, CSS, Bootstrap , Javascript, React Js , Node Js, MongoDb , Express Js and more.</p>
        <div className="syllabus-columns">
          <ul className="syllabus-column">
            {syllabusLeft.map((item) => (
              <li key={item.week}>
                <Collapsible trigger={`Week ${item.week}: ${item.topic}`}>
                  <ul>
                    {item.content.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </Collapsible>
              </li>
            ))}
          </ul>
          <ul className="syllabus-column">
            {syllabusRight.map((item) => (
              <li key={item.week}>
                <Collapsible trigger={`Week ${item.week}: ${item.topic}`}>
                  <ul>
                    {item.content.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </Collapsible>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SyllabusFS;
