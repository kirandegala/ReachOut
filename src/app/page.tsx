
// src/app/page.tsx
"use client"; // Ensure this is at the very top of the file

import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Logo from '../components/atoms/Logo';
import { signIn } from 'next-auth/react';

const Home: React.FC = () => {
  const [typing2Visible, setTyping2Visible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTyping2Visible(true);
    }, 3500); // Adjusted delay to 3.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.videoContainer}>
      <Logo className={styles.logo} />
      
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <h1 className={styles['do-hyeon-regular']}>Welcome to ReachOut!</h1>
        <p className={`${styles['do-hyeon-regular']} ${typing2Visible ? styles['typing2'] : ''}`}>
          Your go-to platform for connecting with international communities.
        </p>
        <button onClick={() => signIn('google')} className={styles.ctaButton}>Try ReachOut</button>
        <button onClick={() => signIn('google')} className={styles.loginButton}>Login</button>
      </div>
    </div>
  );
};

export default Home;
