// @author Jimmy Yang
import React from 'react'
import Title from './Title'
import Button from './shared/Button'

export default function AboutMSMR() {
  return (
    <section className="container py-5 d-flex flex-column justify-content-center align-items-center">
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
      <img width="50%" src="images/aboutmsmr.png" />

      <div className="d-flex flex-column ml-5 py-2">
        <Title
          title="About MSMR"
          position="start"
        />

        <p> The Multi-System Model of Resilience (MSMR) is a copyright-protected and empirically-validated, multi-dimensional model and measure of resilience capacity across different areas in your life. </p>
        <p> The MSMR digital application provides an opportunity for users to engage and learn about their personal resilience capacity - where they stand, and how they can improve their resilience. </p>

        <Button type="purpleWhite" link="/">
          <p>LEARN MORE</p>
        </Button>
      </div>
    </div>
  </section>
  )
}
