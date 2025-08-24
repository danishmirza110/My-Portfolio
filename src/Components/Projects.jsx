import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './css-modules/Projects.module.css'; // Import the CSS module

// Updated project data with more details
const projectsData = [
  {
    image: 'https://via.placeholder.com/400x250.png?text=Portfolio+Website',
    title: 'Modern Portfolio Website',
    description: 'A responsive personal portfolio built with React, featuring a dynamic UI and smooth animations to showcase my work.',
    tags: ['React', 'CSS Modules', 'Bootstrap', 'AOS'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    image: 'https://via.placeholder.com/400x250.png?text=Weather+App',
    title: 'Live Weather App',
    description: 'A sleek weather forecast app that provides real-time weather data using the OpenWeatherMap API and displays it beautifully.',
    tags: ['React', 'API', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    image: 'https://via.placeholder.com/400x250.png?text=Task+Manager',
    title: 'Task Management App',
    description: 'An intuitive to-do list application to help users organize their tasks, with features like local storage and task filtering.',
    tags: ['React', 'JavaScript', 'Local Storage'],
    liveLink: '#',
    sourceLink: '#',
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className={styles.projectSection}>
      <div className="container py-5">
        <h2 className={`text-center fw-bold mb-5 ${styles.sectionTitle}`} data-aos="fade-up">
          My Projects
        </h2>
        <div className="row">
          {projectsData.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Custom Glassmorphism Card */}
              <div className={styles.projectCard}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{project.title}</h4>
                  <p className={styles.cardText}>{project.description}</p>
                  <div className={styles.cardTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.cardLinks}>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.cardButton}>Live Demo</a>
                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className={styles.cardButton}>Source Code</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;