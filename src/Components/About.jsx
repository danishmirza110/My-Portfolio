import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './css-modules/About.module.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    // The structure and class names are the same as your original file
    <section id="about" className={styles.aboutSection}>
      <div className="container py-5">
        <h2 className={`text-center fw-bold mb-5 ${styles.sectionTitle}`} data-aos="fade-up">
          About Me
        </h2>
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0" data-aos="fade-right">
            <img
              src="https://via.placeholder.com/350x350.png?text=Your+Photo"
              alt="Profile"
              className={`img-fluid rounded-circle shadow-lg ${styles.profileImage}`}
            />
          </div>

          {/* About Text - Rewritten with Version 3 */}
          <div className="col-lg-7" data-aos="fade-left">
            <p className={styles.aboutText}>
              I am <strong>Mirza Danish</strong>, a detail-oriented <strong>Frontend Developer</strong> with a strong focus on building high-quality, scalable, and user-centric web applications that provide real-world value.
            </p>
            <p className={styles.aboutText}>
              My expertise lies in using modern frameworks like <strong>React</strong> to architect and develop dynamic interfaces. I am passionate about writing clean, maintainable code and leveraging technologies like <strong>JavaScript (ES6+)</strong> and <strong>Bootstrap</strong> to solve complex challenges and deliver exceptional digital experiences.
            </p>
            <p className={styles.aboutText}>
              Driven by a commitment to continuous improvement, I am actively seeking opportunities to join a collaborative and forward-thinking team. I am eager to contribute to meaningful projects, expand my technical skills, and help build the future of the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;