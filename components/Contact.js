// @author William Shi, Charles Liu

import React from 'react'
import { useState } from 'react'
import Title from './Title'
import { Form, Col } from 'react-bootstrap'
import Flip from 'react-reveal/Flip';

import Success from './shared/Success'
import styles from '../styles/Contact.module.css'

const Contact = ({name, email, subject, message}) => {
  const [validated, setValidated] = useState(false)

  const [contactForm, setContactForm] = useState({
    name: name,
    email: email,
    subject: subject,
    message: message,
  })

  const inputChangedHandler = (e, key) => {
    const updatedContactForm = { ...contactForm }

    const updatedContactEl = { ...updatedContactForm[key] }
    updatedContactEl.value = e.target.value
    updatedContactForm[key] = updatedContactEl
    setContactForm(updatedContactForm)
  }

  const submitHandler = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <section className="px-5 mx-5">
      <div className="row justify-content-center">
        <Title title="Contact Us" position="middle" />
      </div>
      <div className="px-5 mx-5">
        {validated ? <Flip top><Success>Succesfully submitted contact form!</Success></Flip> : null}
        <Form noValidate validated={validated} onSubmit={submitHandler}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control
                type={contactForm.name.type}
                placeholder={contactForm.name.placeholder}
                onChange={(e) => inputChangedHandler(e, 'name')}
                value={contactForm.name.value}
                className={styles.input}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type={contactForm.email.type}
                placeholder={contactForm.email.placeholder}
                onChange={(e) => inputChangedHandler(e, 'email')}
                value={contactForm.email.value}
                className={styles.input}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your email.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridSubject">
              <Form.Control
                type={contactForm.subject.type}
                placeholder={contactForm.name.subject}
                onChange={(e) => inputChangedHandler(e, 'subject')}
                value={contactForm.subject.value}
                placeholder="Subject"
                className={styles.input}
              />
              <Form.Control.Feedback type="invalid">
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.Text">
              <Form.Control
                as={contactForm.message.type}
                placeholder={contactForm.message.placeholder}
                onChange={(e) => inputChangedHandler(e, 'message')}
                value={contactForm.message.value}
                rows={5}
                className={styles.input}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid message.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <button type="submit" className={styles.submitButton}>
            SUBMIT
          </button>
        </Form>
      </div>
    </section>
  )
}

Contact.defaultProps = {
  name: {
    type: 'text',
    placeholder: 'Name*',
    value: '',
  },
  email: {
    type: 'email',
    placeholder: 'Email*',
    value: '',
  },
  subject: {
    type: 'text',
    placeholder: 'Name*',
    value: '',
  },
  message: {
    type: 'textarea',
    placeholder: 'Message*',
    value: '',
  },
}

export default Contact
