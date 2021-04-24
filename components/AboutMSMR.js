// @author Jimmy Yang
import React from 'react'
import Title from './Title'
import Button from './shared/Button'
import TextAndPic from './shared/TextAndPic'

export default function AboutMSMR() {
  return (
    <TextAndPic textWidth={6} imageWidth={6} image="/images/aboutmsmr.jpg">
      <Title title="About MSMR" position="start" />
      <p>
        {' '}
        The Multi-System Model of Resilience (MSMR) is a copyright-protected and
        empirically-validated, multi-dimensional model and measure of resilience
        capacity across different areas in your life.{' '}
      </p>
      <p>
        {' '}
        The MSMR digital application provides an opportunity for users to engage
        and learn about their personal resilience capacity - where they stand,
        and how they can improve their resilience.{' '}
      </p>

      <Button type="purpleWhite" link="/about">
        <p>LEARN MORE</p>
      </Button>
    </TextAndPic>
  )
}
