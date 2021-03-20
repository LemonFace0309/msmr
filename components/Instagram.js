// @author Charles Liu
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from '../styles/Instagram.module.css'

function Instagram({ posts }) {
  const renderImage = (idx) => (
    <Link href={posts[idx].url}>
      <a>
        <Image
          src={posts[idx].image}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </a>
    </Link>
  )

  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(0)}
        </Col>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(1)}
        </Col>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(2)}
        </Col>
      </Row>
      <Row className="d-none d-md-block">
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(3)}
        </Col>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(4)}
        </Col>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(5)}
        </Col>
      </Row>
      <Row className="d-none d-md-block">
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(6)}
        </Col>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(7)}
        </Col>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(8)}
        </Col>
      </Row>
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://instagram-rest-soratbesxq-uc.a.run.app/getPost',
  )
  const posts = await res.json()['posts']

  return {
    props: {
      posts,
    },
  }
}

export default Instagram
