import React from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <h1>Welcome to ReachOut!</h1>
        <p>Your go-to platform for connecting with international communities.</p>
        <button className={styles.ctaButton}>Try ReachOut</button>
      </div>
    </div>
  );
};

export default Home;
