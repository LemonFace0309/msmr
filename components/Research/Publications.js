// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './Publications.module.css'
import Card from '../shared/Card'

function Publications() {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col xs={12} className="text-center">
          <h2 className="pb-4">Publications</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
<<<<<<< HEAD
          <Card img="/images/articles/placeholder.png" btnText="VIEW MORE" title="Featured Articles" />
        </Col>
        <Col xs={12} md={6}>
          <Card img="/images/articles/placeholder.png" btnText="VIEW MORE" title="MSMR Articles" />
=======
          <Card
            img="/images/articles/placeholder.png"
            btnText="VIEW MORE"
            title="Featured Articles"
          />
        </Col>
        <Col xs={12} md={6}>
          <Card
            img="/images/articles/placeholder.png"
            btnText="VIEW MORE"
            title="MSMR Articles"
          />
>>>>>>> 7014def18a1227e13448eee03132b7dfa9032a1f
        </Col>
      </Row>
    </Container>
  )
}

export default Publications
