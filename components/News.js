// @author William Shi

import React from 'react'
import Card from './shared/Card'
import Title from './Title'

const News = ({ cards }) => {
  const news = cards.map((card, i) => (
    <div className="m-3" key={i}>
      <Card title={card.title} img={card.image[0].url} link={`/news/${card.slug}`}>
        {card.snippet.slice(0, 100)}...
      </Card>
    </div>
  ))

  return (
    <>
      <div className="d-flex justify-content-center">
        <Title title="News" position="middle" />
      </div>
      <div className="row mx-auto justify-content-center">{news}</div>
    </>
  )
}

export default News
