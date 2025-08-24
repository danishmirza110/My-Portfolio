import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Import icons for the new skills section
import { FaReact, FaJsSquare, FaBootstrap, FaCss3Alt,FaJava,FaHtml5 } from 'react-icons/fa';
import styles from './css-modules/About.module.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container py-5">
        <h2 className={`text-center fw-bold mb-5 ${styles.sectionTitle}`} data-aos="fade-up">
          About Me
        </h2>
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-lg-5 text-center mb-5 mb-lg-0" data-aos="fade-right">
            <img
              src="/image.png"
              alt="Profile"
              className={`img-fluid rounded-circle shadow-lg ${styles.profileImage}`}
            />
          </div>

          {/* About Text */}
          <div className="col-lg-7" data-aos="fade-left">
            <p className={styles.aboutText}>
              I am <strong>Mirza Danish</strong>, a detail-oriented <strong>Frontend Developer</strong> with a strong focus on building high-quality, scalable, and user-centric web applications that provide real-world value.
            </p>
            <p className={styles.aboutText}>
              My expertise lies in using modern frameworks like <strong>React</strong> to architect and develop dynamic interfaces. I am passionate about writing clean, maintainable code and leveraging technologies like <strong>JavaScript (ES6+)</strong> and <strong>Bootstrap</strong> to solve complex challenges and deliver exceptional digital experiences.
            </p>
            
            {/* --- NEW KEY SKILLS SECTION --- */}
            <div className={styles.keySkills}>
              <h5 className={styles.skillsTitle}>Core Technologies:</h5>
              <div className={styles.skillsGrid}>
                <div className={styles.skillItem}><FaReact /> React</div>
                <div className={styles.skillItem}><FaJsSquare /> JavaScript</div>
                <div className={styles.skillItem}><FaBootstrap /> Bootstrap</div>
                <div className={styles.skillItem}><FaJava /> JAVA</div>
                <div className={styles.skillItem}><FaHtml5 /> HTML</div>
                <div className={styles.skillItem}><FaCss3Alt /> CSS</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;