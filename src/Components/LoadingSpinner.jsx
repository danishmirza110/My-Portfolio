import React from 'react';
import styles from './css-modules/LoadingSpinner.module.css'; // Adjust path if needed

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer}></div>
    </div>
  );
};

export default LoadingSpinner;