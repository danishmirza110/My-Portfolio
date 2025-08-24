import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './css-modules/Contact.module.css';

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for submission status
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    try {
      const response = await fetch('https://formspree.io/f/mrbazqal', { // <-- PASTE YOUR FORMspree URL HERE
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container py-5">
        <h2 className={`text-center fw-bold mb-5 ${styles.sectionTitle}`} data-aos="fade-up">
          Get in Touch
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <div className={styles.contactCard}>
              {/* --- UPDATED FORM --- */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name" // Added name attribute
                    className={`form-control ${styles.formInput}`}
                    placeholder="Your Name"
                    value={formData.name} // Controlled component
                    onChange={handleChange} // Handle changes
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email" // Added name attribute
                    className={`form-control ${styles.formInput}`}
                    placeholder="Your Email"
                    value={formData.email} // Controlled component
                    onChange={handleChange} // Handle changes
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message" // Added name attribute
                    className={`form-control ${styles.formInput}`}
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message} // Controlled component
                    onChange={handleChange} // Handle changes
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className={styles.submitButton} disabled={status === 'Submitting...'}>
                    {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              {/* --- Display Submission Status --- */}
              {status && <p className={styles.statusMessage}>{status}</p>}
            </div>
          </div>
        </div>

        <div className={`text-center mt-5 ${styles.socialIcons}`} data-aos="fade-up">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;