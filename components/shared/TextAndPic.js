// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Fade from 'react-reveal'

import styles from './TextAndPic.module.css'

/**
 * A component with that pairs text and an image together in a row.
 * @param {React.Component } children - should be the text contained within the <TextAndPic>...<TextAndPic/> Tag
 * @param {Num} textWidth - is the width of the text component at the md breakpoint
 * @param {Num} imageWidth - is the width of the image component at the md breakpoint
 * @param {String} image - is the url of the image
 * @param {Bool} isImageFirst - true if image comes before text, false by default
 * note: textWidth and imageWidth shuold add up to 12
 */
function TextAndPic({ children, textWidth, imageWidth, image, isImageFirst }) {
  const imageOrder = isImageFirst ? { span: 12, order: 'first' } : 12

  return (
    <Container fluid className={styles.Container}>
      <Row className={styles.Row}>
        <Col xs={12} md={textWidth}>
          <Fade bottom>{children}</Fade>
        </Col>
        <Col xs={imageOrder} md={imageWidth}>
          <Fade bottom>
            <div className={styles.ImageWrapper}>
              <Image
                src={image}
                layout="fill"
                objectFit="contain"
                objectPosition="center center"
              />
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  )
}

export default TextAndPic
