// @author William Shi

import Button from './Button'
import { Card } from 'react-bootstrap'

/* NOTE: image sizing in bootstrap sucks balls, so we have to
    make sure that all images on relevant cards are the same size. */

/* PROPS:
    title: title of the card
    img: image link
    children: card's paragraph content
    */

function AppCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${props.img}`} className="px-2 pt-2" />
      <Card.Body className="text-center">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.children}</Card.Text>
        <div className="d-flex justify-content-center">
          <Button type="purpleWhite" link="/">
            <p>LEARN MORE</p>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default AppCard
