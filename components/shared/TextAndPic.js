// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'

import styles from './TextAndPic.module.css'

// children should be the text contained within the <TextAndPic>...<TextAndPic/> Tag

// textWidth and imageWidth are the width of their respective section at the md breakpoint
// image is the url of the image
// isImageFirst true if image comes before text, false by default
function TextAndPic({ children, textWidth, imageWidth, image, isImageFirst}) {
  const imageOrder = isImageFirst ? { span: 12, order: 'first' } : 12

  return (
    <Container fluid className={styles.Container}>
      <Row className={styles.Row}>
        <Col xs={12} md={textWidth}>
          {children}
        </Col>
        <Col xs={imageOrder} md={imageWidth}>
          <div className={styles.ImageWrapper}>
            <Image
              src={image}
              layout="fill"
              objectFit="contain"
              objectPosition="center center"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TextAndPic
