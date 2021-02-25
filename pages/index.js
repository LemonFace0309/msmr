import Head from 'next/head'
import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'
import MaxResilience from '../components/MaxResilience'
import AboutMSMR from '../components/AboutMSMR'
import Articles from '../components/Articles'
import NewsAndMedia from '../components/NewsAndMedia'
import ResearchingResilience from '../components/ResearchingResilience'
import Contact from '../components/Contact'

export default function Home({ articles }) {
  return (
    <>
      <Landing />
      <Jumbotron />
      <AboutMSMR />
      <MaxResilience />
      <ResearchingResilience />
      <NewsAndMedia />
      <Articles cards={articles} />
      <Contact />
    </>
  )
}

Home.defaultProps = {
  articles: {
    one: {
      title: 'IPPA Leader Series Welcomes Dr. Jenny Liu',
      img: '/images/aboutmsmr.png',
      text:
        'UPDATED: January 5, 2020 Dr. Jenny Liu delivers a presentation on resilience and how it can be strengthened...',
    },
    two: {
      title: 'Resilience is More than your Mindset',
      img: '/images/maxres.jpeg',
      text:
        'Wellness Solutions podcast hosts Mary Mangos and Danny Blackford explore the topic of resistance with Dr. Jenny Liu.',
    },
    three: {
      title: 'What Does it Take to Increase Our Resilience?',
      img: '/images/jumbotron.png',
      text:
        'Dr. Jenny Liu’s work is featured at the Society of Clinical Psychology. A small excerpt from her article is quoted below...',
    },
  },
}
