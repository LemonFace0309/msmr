// @author William Shi

import React from 'react'
import Card from './shared/Card'
import Title from './Title'

const Articles = ({ cards }) => {
  const articles = Object.keys(cards).map((card, i) => (
    <div className="m-3" key={i}>
      <Card title={cards[card].title} img={cards[card].img}>
        {cards[card].text}
      </Card>
    </div>
  ))

  return (
    <>
      <div className="d-flex justify-content-center">
        <Title title="Articles" position="middle" />
      </div>
      <div className="row mx-auto justify-content-center">{articles}</div>
    </>
  )
}

export default Articles
