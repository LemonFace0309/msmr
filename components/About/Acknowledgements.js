// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './Acknowledgements.module.css'
import Acknowledgement from './Acknowledgement'
import Funder from './Funder'

function Acknowledgements({ title, subtitle, people, images }) {
  let peopleRecognition
  if (people) {
    peopleRecognition = Object.keys(people).map((person) => (
      <Col md={2} className="mb-4" key={person}>
        <Acknowledgement
          name={people[person].name}
          titles={people[person].titles}
        />
      </Col>
    ))
  }

  let imageRecognition
  if (images) {
    imageRecognition = Object.keys(images).map((img) => (
      <Col md={4} className="mb-4" key={img}>
        <Funder url={images[img].url} caption={images[img].caption} />
      </Col>
    ))
  }

  return (
    <Container fluid className={styles.container}>
      <Row className={styles.row}>
        <h1>{title}</h1>
      </Row>
      <Row className={styles.row}>
        <h6 className={styles.subtitle}>
          <em>{subtitle}</em>
        </h6>
      </Row>
      <Row className={styles.recogniationRow}>
        {peopleRecognition} {imageRecognition}
      </Row>
    </Container>
  )
}

export default Acknowledgements
