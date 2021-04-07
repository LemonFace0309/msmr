// @author Charles Liu

import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from '../shared/Button'
import styles from './Post.module.css'

/**
 * A post component which displays an image, a title, some text, and a
 * "view more" button
 * @param {String} img - the link to the post
 * @param {String} title - is the title of the post
 * @param {String} link= the link to the detailed article page
 * @param {React.Component} children - is the description text
 */
function Post({ img, title, link, children }) {
  return (
    <Container fluid className={styles.postContainer}>
      <Row className={styles.postRow}>
        <Col xs={12} md={3} xl={2} className="position-relative">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </Col>
        <Col xs={12} md={9} xl={10} className={styles.postContent}>
          <div>
            <h2>{title}</h2>
            <ReactMarkdown children={children} />
          </div>
          <div className="pb-2">
            <Button type="purpleWhite" link={link}>
              View More
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Post
