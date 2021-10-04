import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'
import MaxResilience from '../components/MaxResilience'
import AboutMSMR from '../components/AboutMSMR'
import News from '../components/News'
import Media from '../components/Media'
import ResearchingResilience from '../components/ResearchingResilience'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'

export default function Home({ news, posts }) {
  return (
    <>
      <Landing />
      <Jumbotron />
      <AboutMSMR />
      <MaxResilience />
      <ResearchingResilience />
      <Media posts={posts} />
      <News cards={news} />
      <Sponsors />
      <Contact />
    </>
  )
}

Home.defaultProps = {
  news: [
    {
      title: 'Aligning Resilience to Support Your Needs',
      img: '/images/aboutmsmr.jpg',
      text:
        'Amid a global pandemic, it can be outright daunting. In these pursuits, the word “resilience” appears...',
      link: '/msmr-articles/aligning-resilience-to-support-your-needs',
    },
    {
      title: 'Eyes Open: An Anti-Asian Racism PSA',
      img: '/images/maxres.jpg',
      text:
        'This #AsianHeritageMonth, we are calling on our allies to confront the injustices facing our communities, and #FaceRace.',
      link: '/msmr-articles/eyes-open-an-anti-asian-racism-psa',
    },
    {
      title:
        'MacHERE Event — Anti Asian Canadian Racism in the Era of COVID 19 ft. Dr. Jenny Liu',
      img: '/images/jumbotron.jpg',
      text:
        'Dr. Jenny Liu brings attention to the discrimination against East Asian Canadians in the era of Covid-19.',
      link: '/msmr-articles/machere-event',
    },
  ],
  posts: [
    {
      url: 'https://www.instagram.com/p/CSfB6DsrN1l/',
      picture_url: '/images/instagram/one.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CSVc2EDNAHm/',
      picture_url: '/images/instagram/two.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CR6bk5UBJxK/',
      picture_url: '/images/instagram/three.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CQ1JBpfhVDt/',
      picture_url: '/images/instagram/four.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CQdvkF6Bfh_/',
      picture_url: '/images/instagram/five.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CPmWstJBa3l/',
      picture_url: '/images/instagram/six.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CPWo9s_BGRy/',
      picture_url: '/images/instagram/seven.jpg',
    },
    {
      url: 'https://www.instagram.com/p/COk_rnNBfa-/',
      picture_url: '/images/instagram/eight.jpg',
    },
    {
      url: 'https://www.instagram.com/p/COk2YpIhR4e/',
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
