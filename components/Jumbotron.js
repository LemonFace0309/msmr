import React from 'react'
import JumboStyles from '../styles/Jumbotron.module.css'
import { Jumbotron, Container } from 'react-bootstrap'

const Jumbo = () => {
  return (
    <Jumbotron fluid className="py-5" id={JumboStyles.imageHolder}>
      <div>
        <Container className="py-5">
          <h1 className={JumboStyles.Text}>
            Resilience involves internal issues such as one’s ability to care
            for themselves and have emotional control. It means having the
            ability to cope with everyday challenges, and knowing how to access
            community supports. Understanding our sources of resilience is the
            first step in becoming more resilient.
          </h1>
        </Container>
      </div>
    </Jumbotron>
  )
}

export default Jumbo
