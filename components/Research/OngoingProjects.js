// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './OngoingProjects.module.css'
import Card from '../shared/Card'
import Title from '../Title'

function OngoingProjects() {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col xs={12} className={styles.col}>
          <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
            <Title title="Ongoing Projects" position="middle" />
            <p className="text-center ">
              The following projects are using the MSMR and MSMR-I in the
              capacity to assess and track resilience over time:
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3} className={styles.col}>
          <Card
            img="/images/articles/ongoing-project.jpg"
            btnText="VIEW SITE"
            link="https://projectprotech.ca/"
          >
            Project PROTECH: Pandemic Rapid-response Optimization To Enhance
            Community-resilience and Health
          </Card>
        </Col>
        <Col xs={12} md={3} className={styles.col}>
          <Card
            className={styles.card}
            img="/images/articles/ongoing-project.jpg"
            btnText="Site Unavailable"
            disabled={true}
          >
            Linking Hearts: Advancing Mental Health Care of University Students,
            a Canada-China international collaborative implementation project
          </Card>
        </Col>
        <Col xs={12} md={3} className={styles.col}>
          <Card
            className={styles.card}
            img="/images/articles/ongoing-project.jpg"
            btnText="VIEW SITE"
            link="https://www.we2care.ca"
          >
            Women Empowerment – Caregiver Acceptance & Resilience E-Learning:
            Web-based Acceptance and Commitment Therapy for Stress Reduction
            Among Migrant Live-in Caregivers (WE-CARE).
          </Card>
        </Col>
        <Col xs={12} md={3} className={styles.col}>
          <Card
            className={styles.card}
            img="/images/articles/ongoing-project.jpg"
            btnText="VIEW SITE"
            link="http://acas.org/champs-in-action/"
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
