// @author Charles Liu

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Banner from '../components/shared/Banner'
import Post from '../components/FeaturedArticles/Post'
import styles from '../styles/Featured-Articles.module.css'

function featuredArticles() {
  return (
    <div>
      <Banner
        url="/images/iphone_background_landscape.png"
        title="Featured Articles"
      />
      <Container fluid className={styles.container}>
        <Row className="w-100">
          <Post img="/images/portrait.jpg" title="Featured Article 1" link="/">
            <p>blah blah blah</p>
          </Post>
        </Row>
        <Row className="w-100">
          <Post img="/images/portrait.jpg" title="Featured Article 2" link="/">
            <p>blah blah blah</p>
          </Post>
        </Row>
      </Container>
    </div>
  )
}

export default featuredArticles
