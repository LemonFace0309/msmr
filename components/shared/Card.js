// @author William Shi
// revised @Charles Liu 2021-02-25 - added btnText prop

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
 * @param {String} btnText - inner text for button
 * @param {React.Component} children - is the paragraph text
 */
function AppCard({ title, img, children, btnText }) {
  btnText = btnText ? btnText : 'READ MORE'
  title = title ? <Card.Title>{title}</Card.Title> : null

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
        <div className={styles.cardTextContainer}>
          {title}
          <Card.Text>{children}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button type="purpleWhite" link="/">
              <p>{btnText}</p>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default AppCard
