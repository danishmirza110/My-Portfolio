import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Make sure you have react-icons installed: npm install react-icons
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './css-modules/footer.module.css';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container text-center">

        {/* Social Links with Icons */}
        <div className={`mb-3 ${styles.socialIcons}`}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mirza-danish-baig-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:mirzadanish8109@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className={`mb-0 small ${styles.copyrightText}`}>
          &copy; {currentYear} Mirza Danish. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;