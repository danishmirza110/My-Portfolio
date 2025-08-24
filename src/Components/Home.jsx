import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './css-modules/Home.module.css';

const Home = ({ setSelectedTab }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="home" className={`py-5 min-vh-100 d-flex align-items-center ${styles.homeSection}`}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Text Content */}
          <div className="col-lg-7 col-md-12" data-aos="fade-right">
            <h1 className={`display-4 fw-bold lh-1 mb-3 ${styles.nameText}`}>
              Hi, I'm <span className={styles.highlight}>Mirza Danish</span>
            </h1>
            <h3 className={`mb-4 ${styles.jobTitle}`}>Frontend Developer</h3>
            <p className={`lead ${styles.description}`}>
              I build engaging and user-friendly web interfaces. My passion lies in turning creative ideas into responsive, real-world applications.
            </p>
            
            <div className={styles.buttonWrapper}>
                <a href="#projects" className={`btn btn-lg mt-4 ${styles.ctaButton}`} onClick={() => setSelectedTab("Projects")}>
                    View My Work
                </a>
                <a 
                  href="/resume.pdf"
                  download="MirzaDanish-Resume.pdf"
                  className={`btn btn-lg mt-4 ${styles.ctaButtonSecondary}`}
                >
                    Download Resume
                </a>
            </div>
          </div>

          {/* Right: Animated Profile Image */}
          <div className="col-lg-5 col-md-12 text-center mt-5 mt-lg-0" data-aos="fade-left">
            <img
              src="/image.png" // Assumes your image is in the 'public' folder
              alt="Mirza Danish"
              className={`img-fluid ${styles.profileImage}`}
            />
          </div>
        </div>
      </div>
      
      {/* --- NEW SCROLL DOWN INDICATOR --- */}
      <div className={styles.scrollDownIndicator}>
        <a href="#about">
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default Home;