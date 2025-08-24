import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './css-modules/Home.module.css'; // Assuming your CSS module is here

const Home = ({ setSelectedTab }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="home" className={`py-5 min-vh-100 d-flex align-items-center ${styles.homeSection}`}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Text Content */}
          <div className="col-lg-6 col-md-12" data-aos="fade-right">
            <h1 className={`display-4 fw-bold lh-1 mb-3 ${styles.nameText}`}>
              Hi, I'm <span className={styles.highlight}>Mirza Danish</span>
            </h1>
            <h3 className={`mb-4 ${styles.jobTitle}`}>Frontend Developer</h3>
            <p className={`lead ${styles.description}`}>
              Creative and detail-oriented Front-End Developer with a passion for building responsive, user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js and Bootstrap.
            </p>
            
            {/* UPDATED: Button Wrapper with two buttons */}
            <div className={styles.buttonWrapper}>
                <a href="#projects" className={`btn btn-lg mt-4 ${styles.ctaButton}`} onClick={() => setSelectedTab("Projects")}>
                    View My Work
                </a>
                {/* --- NEW RESUME BUTTON ADDED HERE --- */}
                <a 
                  href="/resume.pdf" // This links to the file in the public folder
                  download="MirzaDanish-Resume.pdf" // This tells the browser to download it with this name
                  className={`btn btn-lg mt-4 ${styles.ctaButtonSecondary}`}
                >
                    Download Resume
                </a>
            </div>

          </div>

          {/* Right: Personal Image */}
          <div className="col-lg-6 col-md-12 text-center mt-5 mt-lg-0" data-aos="fade-left">
            <img
              src="https://via.placeholder.com/350x350.png?text=Your+Image"
              alt="Mirza Danish"
              className={`img-fluid rounded-circle shadow-lg ${styles.profileImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;