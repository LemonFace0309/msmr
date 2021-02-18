// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'

import styles from '../../styles/Using.module.css'

function Using() {
  return (
    <Container fluid className={styles.Container}>
      <Row className={styles.Row}>
        <Col xs={12} md={8}>
          <div>
            <h2>Using the MSMR</h2>
            <p>
              The Multi-System Model of Resilience (MSMR) is a
              copyright-protected and empirically-validated, multi-dimensional
              model and measure of resilience capacity across different areas in
              your life. For more information on the process of validation, see
              researching resilience. The MSMR digital application provides an
              opportunity for users to engage and learn about their personal
              resilience capacity – where they stand, and how they can improve
              their resilience.
            </p>
            <p>
              For organizations, scholars, and/or service providers, this
              digital assessment application can be used to measure and track
              resilience, with instant feedback provided on individual
              resilience results. Users can export results confidentially and
              anonymously, if needed.
            </p>
            <p>
              In addition, we can offer tailored feedback regarding aggregate
              data collected using the MSMR in relation to onboarding, program
              evaluations, and service utilization through our consultation
              services, as well as customize application builds to serve the
              needs of different organizations. To inquire about the use of the
              MSMR, please contact us.
            </p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className={styles.ImageWrapper}>
              <Image src="/logo.png" layout="fill" objectFit="contain" objectPosition="center center" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Using
