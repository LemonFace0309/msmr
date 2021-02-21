// @author William Shi

import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

/**
 * A carousel, or a slideshow
 * @param {React.Component} slides - the slides to display
 */

const AppCarousel = ({ slides }) => {
  let carousel = []
  console.log(slides)
  for (var i = 0; i < slides.length; i = i + 3) {
    console.log(i)
    console.log(slides.length)
    if (slides.length % 3 === 1 && i + 3 >= slides.length) {
      carousel[i] = (
        <Carousel.Item key={i}>
          <div className="row justify-content-center">
            <img
              className="d-block w-30"
              src={slides[i].img}
              alt={slides[i].alt}
            />
          </div>
        </Carousel.Item>
      )
    } else if (slides.length % 3 === 2 && i + 3 >= slides.length) {
      carousel[i] = (
        <Carousel.Item key={i}>
          <div className="row justify-content-center align-items-center">
            <img
              className="d-block w-30"
              src={slides[i].img}
              alt={slides[i].alt}
            />
            <img
              className="d-block w-30"
              src={slides[i + 1].img}
              alt={slides[i + 1].alt}
            />
          </div>
        </Carousel.Item>
      )
    } else {
      carousel[i] = (
        <Carousel.Item key={i}>
          <div className="row justify-content-center align-items-center">
            <img
              className="d-block w-30"
              src={slides[i].img}
              alt={slides[i].alt}
            />
            <img
              className="d-block w-30"
              src={slides[i + 1].img}
              alt={slides[i + 1].alt}
            />
            <img
              className="d-block w-30"
              src={slides[i + 2].img}
              alt={slides[i + 2].alt}
            />
          </div>
        </Carousel.Item>
      )
    }
  }

  return <Carousel>{carousel.map((item) => item)}</Carousel>
}

export default AppCarousel
