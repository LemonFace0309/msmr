// @author Jimmy Yang
import React from 'react'
import Title from './Title'
import Button from './Button'

function ResearchingResilience() {
  return (
    <section className="container py-5 d-flex flex-column justify-content-center align-items-center">
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
      <img className="order-0 order-md-1" width="50%" src="images/researchingres.jpeg" />

      <div className="order-1 order-md-0 d-flex flex-column mx-3 py-2">
        <Title
          title="Researching Resilience"
          position="start"
        />

        <p> MSMR conceptualizes resilience as a multi-dimensional capacity to respond to challenges across different domains. </p>
        <p> Our team of researchers have conducted studiesto validate and examine the model in several publications. </p>

        <Button type="purpleWhite" link="/">
          <p>LEARN MORE</p>
        </Button>
      </div>
    </div>
  </section>
  )
}

export default ResearchingResilience