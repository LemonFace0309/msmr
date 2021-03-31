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
      <a target="_blank">
        <Image
          src={posts[idx].picture_url}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </a>
    </Link>
  )

  return (
    <Container fluid className={styles.container}>
      <div className={styles.imageContainer}> {renderImage(0)}</div>
      <div className={styles.imageContainer}> {renderImage(1)}</div>
      <div className={styles.imageContainer}> {renderImage(2)}</div>
      <div className={styles.imageContainer}> {renderImage(3)}</div>
      <div className={styles.imageContainer}> {renderImage(4)}</div>
      <div className={styles.imageContainer}> {renderImage(5)}</div>
      <div className={styles.imageContainer}> {renderImage(6)}</div>
      <div className={styles.imageContainer}> {renderImage(7)}</div>
      <div className={styles.imageContainer}> {renderImage(8)}</div>

      {/* <Row className={styles.instagramRow}>
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
      <Row className="d-none d-md-flex">
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
      <Row className="d-none d-md-flex">
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(6)}
        </Col>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(7)}
        </Col>
        <Col xs={12} md={4} className={styles.imageContainer}>
          {renderImage(8)}
        </Col>
      </Row> */}
    </Container>
  )
}

export default Instagram
