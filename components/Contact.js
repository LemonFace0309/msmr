import React from 'react'
import Title from './Title'
import HomeMadeButton from './shared/Button'
import { Form, Col } from 'react-bootstrap'

import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <section className="px-5 mx-5">
      <div className="row justify-content-center">
        <Title title="Contact Us" position="middle" />
      </div>
      <div className="px-5 mx-5">
        <Form className="px-5 mx-5">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control
                placeholder="Name*"
                className={styles.input}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="email"
                placeholder="Email*"
                className={styles.input}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridSubject">
              <Form.Control placeholder="Subject" className={styles.input} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.Text">
              <Form.Control
                as="textarea"
                placeholder="Message*"
                rows={5}
                className={styles.input}
                required
              />
            </Form.Group>
          </Form.Row>
          <HomeMadeButton type="purpleWhite" link="/">
            SUBMIT
          </HomeMadeButton>
        </Form>
      </div>
    </section>
  )
}

export default Contact
