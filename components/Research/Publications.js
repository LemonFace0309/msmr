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
          <Card
            img="/images/articles/featured-article.jpg"
            btnText="Site Unavailable"
            title="Featured Articles"
            disabled={true}
          />
        </Col>
        <Col xs={12} md={6}>
          <Card
            img="/logo.png"
            btnText="VIEW MORE"
            title="News"
            link="/news"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Publications
