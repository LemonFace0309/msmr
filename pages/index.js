import Head from 'next/head'
import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'
import MaxResilience from '../components/MaxResilience'
import AboutMSMR from '../components/AboutMSMR'
import Articles from '../components/Articles'
import NewsAndMedia from '../components/NewsAndMedia'
import ResearchingResilience from '../components/ResearchingResilience'
import Sponsors from '../components/Sponsors'

export default function Home({ articles, sponsors }) {
  return (
    <>
      <Landing />
      <Jumbotron />
      <AboutMSMR />
      <MaxResilience />
      <ResearchingResilience />
      <NewsAndMedia />
      <Articles cards={articles} />
      <Sponsors sponsors={sponsors} />
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
  sponsors: [
    {
      img: '/images/sponsors/Ryerson.jpg',
      alt: 'Ryerson University',
    },
    {
      img: '/images/sponsors/RBC.png',
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
      img: '/images/sponsors/PFC-300x300.png',
      alt: 'The Psychology Foundation of Canada',
    },
    {
      img:
        '/images/sponsors/1200px-American_Psychological_Association_logo.png',
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
      img: '/images/sponsors/foundation-logo-1-300x236.png',
      alt: 'Hong Fook Mental Health Foundation',
    },
    {
      img:
        '/images/sponsors/Social_Sciences_and_Humanities_Research_Council_of_Canada_Govern-300x120.jpg',
      alt: 'New Frontiers in Research Fund',
    },
  ],
}
