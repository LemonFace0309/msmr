import React from 'react'
import styles from '../styles/Landing.module.css'
import { Button } from 'react-bootstrap';

export default function Landing() {
  return (
    <div className={styles.LandingRoot}>
      <div className={styles.LandingContent}>
        <h1> A comprehensive model, inventory, and digital tool that measures and tracks our ability to cope with everyday challenges </h1>
        <Button className="mr-3 mt-3" variant="secondary"> Button </Button>
        <Button variant="dark mt-3"> Button </Button>
      </div>

      <div className={styles.LandingImage}>
        <div className={styles.LandingCircle}>
          <img
            className={styles.LandingCircle}
            src="/images/landing-circle.png"
          />
        </div>
        <div className={styles.LandingPhone}>
          <img
            width="600"
            height="600"
            src="/images/landing-phone.png"
          />
        </div>
      </div>
    </div>
  )
}

