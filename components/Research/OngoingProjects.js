// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './OngoingProjects.module.css'
import Card from '../shared/Card'

function OngoingProjects() {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col xs={12} className="text-center">
          <h2>Ongoing Projects</h2>
          <h6 className="pb-4">
            The following projects are using the MSMR and MSMR-I in the capacity
            to assess and track resilience over time:
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3} className={styles.col}>
<<<<<<< HEAD
            <Card img="/images/articles/placeholder.png" btnText="VIEW SITE">
              Project PROTECH: Pandemic Rapid-response Optimization To Enhance
              Community-resilience and Health
            </Card>
=======
          <Card img="/images/articles/placeholder.png" btnText="VIEW SITE">
            Project PROTECH: Pandemic Rapid-response Optimization To Enhance
            Community-resilience and Health
          </Card>
>>>>>>> 7014def18a1227e13448eee03132b7dfa9032a1f
        </Col>
        <Col xs={12} md={3} className={styles.col}>
          <Card
            className={styles.card}
            img="/images/articles/placeholder.png"
            btnText="VIEW SITE"
          >
            Linking Hearts: Advancing Mental Health Care of University Students,
            a Canada-China international collaborative implementation project
          </Card>
        </Col>
        <Col xs={12} md={3} className={styles.col}>
          <Card
            className={styles.card}
            img="/images/articles/placeholder.png"
            btnText="VIEW SITE"
          >
            Women Empowerment – Caregiver Acceptance & Resilience E-Learning:
            Web-based Acceptance and Commitment Therapy for Stress Reduction
            Among Migrant Live-in Caregivers (WE-CARE).
          </Card>
        </Col>
        <Col xs={12} md={3} className={styles.col}>
          <Card
            className={styles.card}
            img="/images/articles/placeholder.png"
            btnText="VIEW SITE"
          >
            CHAMPS in Action: Advancing Community Health through Evidence-Based
            HIV Stigma Interventions
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default OngoingProjects
