import React from 'react'

import Button from './shared/Button'
import styles from '../styles/Landing.module.css'
import { Fade, Slide } from 'react-reveal'

export default function Landing() {
  return (
    <div className={styles.LandingRoot}>
      <div className={styles.LandingContent}>
        <Fade top>
          <h1>
            A comprehensive model, inventory, and digital tool that measures and
            tracks our ability to cope with everyday challenges{' '}
          </h1>
        </Fade>
        <div className={styles.ButtonContainer}>
          <Button type="whitePurple" link="/">
            <p>DOWNLOAD</p>
          </Button>
          <Button type="purpleWhite" link="/">
            <p>LEARN MORE</p>
          </Button>
        </div>
      </div>

      <div className={styles.LandingImage}>
        <div>
          <img
            className={styles.LandingCircle}
            src="/images/landing-circle.png"
          />
        </div>
        <div className="d-none d-lg-block">
          <Slide right delay={500}>
            <img
              className={styles.LandingPhone}
              src="/images/landing-phone.png"
            />
          </Slide>
        </div>
      </div>
    </div>
  )
}
