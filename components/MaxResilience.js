// @author Jimmy Yang
import React from 'react'
import Title from './Title'
import Button from './shared/Button'
import TextAndPic from './shared/TextAndPic'

export default function MaxResilience() {
  return (
    <section className="container py-md-5 d-flex flex-column justify-content-center align-items-center">
      <Title title="Maximizing Resilience" position="middle" />
      <p className="text-center ">
        {' '}
        There are multiple areas from which we draw our resilience. These
        include external resilience, coping pursuits, and external resilience.
        MSMR offers the tool and knowledge to improve in each of these areas.{' '}
      </p>

      <TextAndPic
        textWidth={6}
        imageWidth={6}
        image="/images/maxres.jpg"
        isImageFirst={true}
      >
        <div className="py-5 py-md-0">
          <h2 className="text-warning font-weight-bold">
            {' '}
            Internal Resilience{' '}
          </h2>
          <p>
            {' '}
            The ability to take care of yourself. This means identifying and
            prioritizing mental health and physical health.{' '}
          </p>

          <h2 className="text-primary font-weight-bold"> Coping Pursuits </h2>
          <p>
            {' '}
            The ability to address everyday challenges and goals. This means
            identifying strengths, exploring and learning from new
            opportunities.{' '}
          </p>

          <h2 className="text-success font-weight-bold">
            {' '}
            External Resilience{' '}
          </h2>
          <p>
            {' '}
            The ability to define your role within your community. Being active
            in your community can help create your own identity.{' '}
          </p>
        </div>

        <Button type="purpleWhite" link="/resilience">
          <p>LEARN MORE</p>
        </Button>
      </TextAndPic>
    </section>
  )
}
