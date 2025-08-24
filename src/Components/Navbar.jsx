import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// --- IMPORT THE ICON ---
import { VscMenu } from "react-icons/vsc"; 
import styles from "./css-modules/navbar.module.css";

const Navbar = ({ selectedTab, setSelectedTab }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <a className={`navbar-brand fw-bold ${styles.navBrand}`} href="#home" onClick={() => setSelectedTab("Home")}>
          MirzaDanish
        </a>
        
        {/* --- UPDATED BUTTON --- */}
        <button
          className={`navbar-toggler ${styles.customToggler}`} // Added a new custom class
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* We replaced <span className="navbar-toggler-icon"></span> with our own icon */}
          <VscMenu />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navbarNav}`}>
            {navLinks.map((tab) => (
              <li className="nav-item" key={tab}>
                <a
                  className={`nav-link ${styles.navLink} ${selectedTab === tab ? styles.active : ''}`}
                  href={`#${tab.toLowerCase()}`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;