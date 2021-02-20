// @author William Shi

import React from 'react'
import Card from './shared/Card'

const Articles = ({ cards }) => {
  const articles = Object.keys(cards).map((card) => (
    <div className="m-3">
      <Card title={cards[card].title} img={cards[card].img}>
        {cards[card].text}
      </Card>
    </div>
  ))

  return (
    <>
      <div className="text-center">
        <h2 className="font-weight-bold">Articles</h2>
      </div>
      <div className="row mx-auto justify-content-center">{articles}</div>
    </>
  )
}

export default Articles
