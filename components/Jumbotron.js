import React from 'react'
import JumboStyles from '../styles/Jumbotron.module.css'
import { Jumbotron, Container } from 'react-bootstrap'

const Jumbo = () => {
  return (
    <div id="jumbotron">
      <Jumbotron fluid className="py-5" id={JumboStyles.imageHolder}>
        <div>
          <Container className="py-5">
            <h1 className={JumboStyles.Text}>
              “Resilience involves internal resources such as one’s ability to
              care for themselves and have emotional control. It means coping
              with everyday challenges, and knowing when, and how to access
              support systems and services. Understanding our sources of
              resilience is the first step in expanding our resilience
              capacities.”
            </h1>
          </Container>
        </div>
      </Jumbotron>
    </div>
  )
}

export default Jumbo
