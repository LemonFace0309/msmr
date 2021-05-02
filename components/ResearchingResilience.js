// @author Jimmy Yang
import React from 'react'
import Title from './Title'
import Button from './shared/Button'
import TextAndPic from './shared/TextAndPic'

function ResearchingResilience() {
  return (
    <TextAndPic textWidth={6} imageWidth={6} image="/images/researchingres.jpg">
      <Title title="Researching Resilience" position="middle" />

      <p>
        {' '}
        MSMR conceptualizes resilience as a multi-dimensional capacity to
        respond to challenges across different domains.{' '}
      </p>
      <p>
        {' '}
        Our team of researchers have conducted studies to validate and examine
        the model in several publications.{' '}
      </p>

      <Button type="purpleWhite" link="/research">
        <p>LEARN MORE</p>
      </Button>
    </TextAndPic>
  )
}

export default ResearchingResilience
