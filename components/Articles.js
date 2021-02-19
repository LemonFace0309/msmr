import React from 'react'
import Card from './shared/Card'

const Articles = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="font-weight-bold">Articles</h2>
      </div>
      <div className="row mx-auto justify-content-center">
        <div className="m-3">
          <Card
            title="IPPA Leader Series Welcomes Dr. Jenny Liu"
            img="/images/aboutmsmr.png"
          >
            UPDATED: January 5, 2020 Dr. Jenny Liu delivers a presentation on
            resilience and how it can be strengthened...
          </Card>
        </div>
        <div className="m-3">
          <Card
            title="Resilience is More than your Mindset"
            img="/images/maxres.jpeg"
          >
            Wellness Solutions podcast hosts Mary Mangos and Danny Blackford
            explore the topic of resistance with Dr. Jenny Liu.
          </Card>
        </div>
        <div className="m-3">
          <Card
            title="What Does it Take to Increase Our Resilience?"
            img="/images/jumbotron.png"
          >
            Dr. Jenny Liu’s work is featured at the Society of Clinical
            Psychology. A small excerpt from her article is quoted below...
          </Card>
        </div>
      </div>
    </>
  )
}

export default Articles
