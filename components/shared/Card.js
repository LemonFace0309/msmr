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
 * @param {String} link - link to where the button leads
 * @param {Boolean} disabled - true if button should be disabled
 * @param {React.Component} children - is the paragraph text
 */
function AppCard({ title, img, btnText, disabled, link, children }) {
  btnText = btnText ? btnText : 'READ MORE'
  title = title ? <Card.Title>{title}</Card.Title> : null
  link = link ? link : '#'
  disabled = disabled ? true : false

  return (
    <Card style={{ maxWidth: '18rem' }} className="shadow-sm h-100">
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
            <Button type="purpleWhite" link={link} disabled={disabled}>
              <p>{btnText}</p>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default AppCard
