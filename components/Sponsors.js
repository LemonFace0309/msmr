// @author Jimmy Yang
import React from 'react'
import Title from './Title'
import SponsorItem from './SponsorItem'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
}

function Sponsors({ sponsors }) {
  return (
    <section className="container py-5 d-flex flex-column justify-content-center align-items-center">
      <Title title="Sponsors" position="middle" />

      <Carousel
        responsive={responsive}
        ssr={true}
        additionalTransfrom={0}
        arrows
        autoPlay={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {sponsors.map((sponsor, i) => {
          return <SponsorItem key={i} img={sponsor.img} alt={sponsor.alt} />
        })}
      </Carousel>
    </section>
  )
}

Sponsors.defaultProps = {
  sponsors: [
    {
      img: '/images/sponsors/Ryerson.jpg',
      alt: 'Ryerson University',
    },
    {
      img: '/images/sponsors/RBC.jpg',
      alt: 'Royal Bank of Canada',
    },
    {
      img: '/images/sponsors/CPA.jpg',
      alt: 'Canadian Psychological Association',
    },
    {
      img: '/images/sponsors/Mitacs.jpg',
      alt: 'Mitacs',
    },
    {
      img: '/images/sponsors/PFC-300x300.jpg',
      alt: 'The Psychology Foundation of Canada',
    },
    {
      img:
        '/images/sponsors/1200px-American_Psychological_Association_logo.jpg',
      alt: 'American_Psychological_Association_logo',
    },
    {
      img: '/images/sponsors/cihr-logo-300x168.jpg',
      alt: 'Canadian Institutes of Health Research',
    },
    {
      img: '/images/sponsors/download-300x85.jpg',
      alt: 'Global Alliance for Chronic Diseases',
    },
    {
      img: '/images/sponsors/FIT_ID_Eng_Horiz_CMYK-300x106.jpg',
      alt: 'Fund for Innovation and Transformation',
    },
    {
      img: '/images/sponsors/foundation-logo-1-300x236.jpg',
      alt: 'Hong Fook Mental Health Foundation',
    },
    {
      img:
        '/images/sponsors/Social_Sciences_and_Humanities_Research_Council_of_Canada_Govern-300x120.jpg',
      alt: 'New Frontiers in Research Fund',
    },
  ],
}

export default Sponsors
