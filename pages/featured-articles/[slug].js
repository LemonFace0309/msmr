// @author Charles Liu

import { useRouter } from 'next/router'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'
import Banner from '../../components/shared/Banner'
import styles from '../../styles/Article.module.css'

function Article({ article }) {
  return (
    <>
      <Banner url={getStrapiMedia(article.image[0])} title={article.title} />
      <Container>
        <Row className="mt-4">
          <h1>{article.title}</h1>
        </Row>
        {article.subtitle && (
          <Row>
            <h3 className="text-secondary font-italic">{article.subtitle}</h3>
          </Row>
        )}
        <Row>
          <Col xs={12} md={4} className="p-0">
            <div className={styles.authorContainer}>
              <div className={styles.avatar}>
                {console.log(article.author.image)}
                <Image
                  src={getStrapiMedia(article.author.image)}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                />
              </div>
              <div className={styles.authorMeta}>
                <p>{article.author.name}</p>
                <Moment className="text-secondary" format="MMM Do YYYY">{article.published_at}</Moment>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} className={styles.socialMedia}>
            Social Meida Icons
          </Col>
        </Row>
        <Row className="mt-4 py-4">
            <ReactMarkdown children={article.content}/>
        </Row>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles')
  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  return {
    props: { article: articles[0] },
  }
}

export default Article
