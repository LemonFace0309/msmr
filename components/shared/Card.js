// @author William Shi

import Button from './Button'
import { Card } from 'react-bootstrap'
import Image from 'next/image'

import styles from './Card.module.css'

/* NOTE: image sizing in bootstrap sucks balls, so we have to
    make sure that all images on relevant cards are the same size. */

/**
 * A card component which displays an image, a title, some text, and a
 * "read more" button
 * @param {String} title - is the title of the card
 * @param {String} img - the link to the image
 * @param {React.Component} children - is the paragraph text
 */
function AppCard({ title, img, children }) {
  return (
    <Card style={{ width: '20rem' }} className="shadow-sm">
      <div className={styles.imageSize}>
        <Image
          src={img}
          layout="fill"
          className="px-2 pt-2"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
        <div className="d-flex justify-content-center">
          <Button type="purpleWhite" link="/">
            <p>READ MORE</p>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default AppCard
