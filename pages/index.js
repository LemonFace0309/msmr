import Head from 'next/head'
import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'
import MaxResilience from '../components/MaxResilience'
import AboutMSMR from '../components/AboutMSMR'
import Articles from '../components/Articles'
import NewsAndMedia from '../components/NewsAndMedia'
import ResearchingResilience from '../components/ResearchingResilience'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'

export default function Home({ articles, posts }) {
  return (
    <>
      <Landing />
      <Jumbotron />
      <AboutMSMR />
      <MaxResilience />
      <ResearchingResilience />
      <NewsAndMedia posts={posts} />
      <Articles cards={articles} />
      <Sponsors />
      <Contact />
    </>
  )
}

Home.defaultProps = {
  articles: [
    {
      title: 'IPPA Leader Series Welcomes Dr. Jenny Liu',
      img: '/images/aboutmsmr.png',
      text:
        'UPDATED: January 5, 2020 Dr. Jenny Liu delivers a presentation on resilience and how it can be strengthened...',
      link:
        '/msmr-articles/international%20-positive-psychology-association-leader-series-welcomes-dr-jenny-liu',
    },
    {
      title: 'Resilience is More than your Mindset',
      img: '/images/maxres.jpeg',
      text:
        'Wellness Solutions podcast hosts Mary Mangos and Danny Blackford explore the topic of resistance with Dr. Jenny Liu.',
      link: '/msmr-articles/resilience-is-more-than-your-mindset',
    },
    {
      title: 'What Does it Take to Increase Our Resilience?',
      img: '/images/jumbotron.png',
      text:
        'Dr. Jenny Liu’s work is featured at the Society of Clinical Psychology. A small excerpt from her article is quoted below...',
      link: '/msmr-articles/what-does-it-take-to-increase-our-resilience',
    },
  ],
  posts: [
    {
      url: 'https://instagram.com/p/CIyfthJBJmJ',
      picture_url:
        '/images/instagram/one.jpg',
    },
    {
      url: 'https://instagram.com/p/CIjN3ZRht-W',
      picture_url:
        '/images/instagram/two.jpg',
    },
    {
      url: 'https://instagram.com/p/CHMCiGoBwhZ',
      picture_url:
        '/images/instagram/three.jpg',
    },
    {
      url: 'https://instagram.com/p/CG1NMsyhawK',
      picture_url:
        '/images/instagram/four.jpg',
    },
    {
      url: 'https://instagram.com/p/CGlJXEYBlrY',
      picture_url:
        '/images/instagram/five.jpg',
    },
    {
      url: 'https://instagram.com/p/CGffci4BiQM',
      picture_url:
        '/images/instagram/six.jpg',
    },
    {
      url: 'https://instagram.com/p/CF2q8-1hmTS',
      picture_url:
        '/images/instagram/seven.jpg',
    },
    {
      url: '',
      picture_url:
        '/images/instagram/eight.jpg',
    },
    {
      url: 'https://instagram.com/p/CAx_FAJBIuL',
      picture_url:
        '/images/instagram/nine.jpg',
    },
  ],
}

// export async function getStaticProps() {
//   const res = await fetch(
//     'https://instagram-rest-soratbesxq-uc.a.run.app/getMockPost',
//   )
//   const data = await res.json()
//   const posts = data.posts

//   return {
//     props: {
//       posts,
//     },
//   }
// }
