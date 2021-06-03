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
      title:
        'MacHERE Event — Anti Asian Canadian Racism in the Era of COVID 19 ft. Dr. Jenny Liu',
      img: '/images/jumbotron.jpg',
      text:
        'Dr. Jenny Liu brings attention to the discrimination against East Asian Canadians in the era of Covid-19.',
      link: '/msmr-articles/machere-event',
    },
    {
      title: 'Aligning Resilience to Support Your Needs',
      img: '/images/aboutmsmr.jpg',
      text:
        'Amid a global pandemic, it can be outright daunting. In these pursuits, the word “resilience” appears...',
      link:
        '/msmr-articles/aligning-resilience-to-support-your-needs',
    },
    {
      title: 'Eyes Open: An Anti-Asian Racism PSA',
      img: '/images/maxres.jpg',
      text:
        'This #AsianHeritageMonth, we are calling on our allies to confront the injustices facing our communities, and #FaceRace.',
      link: '/msmr-articles/eyes-open-an-anti-asian-racism-psa',
    },
  ],
  posts: [
    {
      url: 'https://instagram.com/p/CIyfthJBJmJ',
      picture_url: '/images/instagram/one.jpg',
    },
    {
      url: 'https://instagram.com/p/CIjN3ZRht-W',
      picture_url: '/images/instagram/two.jpg',
    },
    {
      url: 'https://instagram.com/p/CHMCiGoBwhZ',
      picture_url: '/images/instagram/three.jpg',
    },
    {
      url: 'https://instagram.com/p/CG1NMsyhawK',
      picture_url: '/images/instagram/four.jpg',
    },
    {
      url: 'https://instagram.com/p/CGlJXEYBlrY',
      picture_url: '/images/instagram/five.jpg',
    },
    {
      url: 'https://instagram.com/p/CGffci4BiQM',
      picture_url: '/images/instagram/six.jpg',
    },
    {
      url: 'https://instagram.com/p/CF2q8-1hmTS',
      picture_url: '/images/instagram/seven.jpg',
    },
    {
      url: '',
      picture_url: '/images/instagram/eight.jpg',
    },
    {
      url: 'https://instagram.com/p/CAx_FAJBIuL',
      picture_url: '/images/instagram/nine.jpg',
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
