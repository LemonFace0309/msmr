// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './Acknowledgements.module.css'
import Acknowledgement from './Acknowledgement'

function Acknowledgements({ title, people }) {
  const recognition = Object.keys(people).map((person) => (
    <Col md={2} className="mb-4" key={people[person].name}>
      <Acknowledgement
        name={people[person].name}
        titles={people[person].titles}
      />
    </Col>
  ))

  return (
    <Container fluid className={styles.container}>
      <Row className={styles.row}>
        <h1 className={styles.title}>{title}</h1>
      </Row>
      <Row className={styles.recogniationRow}>{recognition}</Row>
    </Container>
  )
}

export default Acknowledgements
