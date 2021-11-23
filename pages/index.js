import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'
import MaxResilience from '../components/MaxResilience'
import AboutMSMR from '../components/AboutMSMR'
import News from '../components/News'
import Media from '../components/Media'
import ResearchingResilience from '../components/ResearchingResilience'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'
import { fetchAPI } from '../lib/api'

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
  posts: [
    {
      url: 'https://www.instagram.com/p/CWJhSlAvWom/',
      picture_url: '/images/instagram/one.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CVxkxIxLbrF/',
      picture_url: '/images/instagram/two.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CUz3DWtLSmP/',
      picture_url: '/images/instagram/three.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CUqnOLbN7wE/',
      picture_url: '/images/instagram/four.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CUNV6w6rsHA/',
      picture_url: '/images/instagram/five.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CT8MyMXr8P0/',
      picture_url: '/images/instagram/six.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CTj8c1nLmT-/',
      picture_url: '/images/instagram/seven.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CTaaMMdJXiY/',
      picture_url: '/images/instagram/eight.jpg',
    },
    {
      url: 'https://www.instagram.com/p/CTSF2d2LnsQ/',
      picture_url: '/images/instagram/nine.jpg',
    },
  ],
}

export async function getStaticProps() {
  const news = await fetchAPI('/articles')
  const sortedNews = news.reverse().slice(0, 3)
  return {
    props: {
      news: sortedNews ?? [],
    },
    revalidate: 21600,
  }
}
