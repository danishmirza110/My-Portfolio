import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Importing popular technology icons from react-icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaJava } from 'react-icons/fa';
import styles from './css-modules/Skills.module.css';

// We can now represent skills with their corresponding icon and color
const skillsData = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  // Add more skills here!
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container py-5">
        <h2 className={`text-center fw-bold mb-5 ${styles.sectionTitle}`} data-aos="fade-up">
          Technologies I Use
        </h2>
        
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <div 
              className={styles.skillCard} 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={styles.iconWrapper} style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h5 className={styles.skillName}>{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;