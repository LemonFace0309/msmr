// @author Charles Liu

import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import Banner from '../components/shared/Banner'
import Post from '../components/FeaturedArticles/Post'
import styles from '../styles/Featured-Articles.module.css'

function featuredArticles({ posts }) {
  const router = useRouter()

  const renderPost = (post) => {
    const url = getStrapiMedia(post.image[0]) // 'http://localhost:8080/uploads/jihyo_852a4651cd.jpg' 
    return (
      <Row className="w-100" key={post.id}>
        <Post
          img={url}
          title={post.title}
          link={`${router.pathname}/${post.slug}`}
        >
          {post.snippet}
        </Post>
      </Row>
    )
  }

  return (
    <div>
      <Banner
        url="/images/iphone_background_landscape.png"
        title="Featured Articles"
      />
      <Container fluid className={styles.container}>
        <Row className="w-100">
          <Post img="/images/portrait.jpg" title="Featured Article 1" link="/">
            blah blah blah
          </Post>
        </Row>
        <Row className="w-100">
          <Post img="/images/portrait.jpg" title="Featured Article 2" link="/">
            blah blah blah
          </Post>
        </Row>
        {posts.map((post) => renderPost(post))}
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await fetchAPI('/articles')
  console.log(posts)
  return {
    props: {
      posts: posts,
    },
  }
}

export default featuredArticles
