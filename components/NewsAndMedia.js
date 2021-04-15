// @author Jimmy Yang, Charles Liu
import React from 'react'
import Title from './Title'

import Instagram from './Instagram'

function NewsAndMedia({ posts }) {
  return (
    <section
      id="media"
      className="container py-5 d-flex flex-column justify-content-center align-items-center"
    >
      <Title title="News and Media" position="middle" />
      <div className="row w-100">
        <div
          className="col-12 col-md-7"
          style={{
            width: '700',
            height: '600px',
            border: '1px solid black',
            position: 'relative',
            margin: '0px',
            padding: '0px',
          }}
        >
          <Instagram posts={posts} />
        </div>
        <div className="col-12 col-md-5">
          <a
            className="twitter-timeline"
            data-width="500"
            data-height="600"
            href="https://twitter.com/resilient_u?ref_src=twsrc%5Etfw"
          >
            Tweets by resilient_u
          </a>{' '}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </div>
    </section>
  )
}

export default NewsAndMedia
