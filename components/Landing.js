import React from 'react'

import Button from './Button'
import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.LandingRoot}>
      <div className={styles.LandingContent}>
        <h1>
          A comprehensive model, inventory, and digital tool that measures and
          tracks our ability to cope with everyday challenges{' '}
        </h1>
        <div className={styles.ButtonContainer}>
          <Button type="whitePurple" link="/">
            <h6>DOWNLOAD</h6>
          </Button>
          <Button type="purpleWhite" link="/">
            <h6>LEARN MORE</h6>
          </Button>
        </div>
      </div>

      <div className={styles.LandingImage}>
        <div className={styles.LandingCircle}>
          <img
            className={styles.LandingCircle}
            src="/images/landing-circle.png"
          />
        </div>
        <div className={styles.LandingPhone}>
          <img width="600" height="600" src="/images/landing-phone.png" />
        </div>
      </div>
    </div>
  )
}
