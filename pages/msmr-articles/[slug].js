// @author Charles Liu

import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WeiboShareButton,
  WeiboIcon,
} from 'react-share'

import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'
import Banner from '../../components/shared/Banner'
import styles from '../../styles/Article.module.css'

function Article({ article }) {
  const router = useRouter()
  const shareUrl = `${process.env.NEXT_PUBLIC_HOST}/featured-artciles/${router.query.slug}`

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta
          name="description"
          content={article.description || article.title}
        ></meta>
        <meta name="keywords" content={article.keywords}></meta>

        <meta name="og:title" content={article.title}></meta>
        <meta
          name="og:description"
          content={article.description || article.title}
        ></meta>

        <meta name="twitter:title" content={article.title}></meta>
        <meta
          name="twitter:description"
          content={article.description || article.title}
        ></meta>
      </Head>
      <Banner url={getStrapiMedia(article.image[0])} />
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
                <Image
                  src={getStrapiMedia(article.author.image)}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                />
              </div>
              <div className={styles.authorMeta}>
                <p>{article.author.name}</p>
                <Moment className="text-secondary" format="MMM Do YYYY">
                  {article.published_at}
                </Moment>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} className={styles.socialMedia}>
            <FacebookShareButton url={shareUrl} className={styles.shareButton}>
              <FacebookIcon size={32} round={true}></FacebookIcon>
            </FacebookShareButton>
            <FacebookMessengerShareButton
              url={shareUrl}
              className={styles.shareButton}
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <TwitterShareButton url={shareUrl} className={styles.shareButton}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} className={styles.shareButton}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WeiboShareButton url={shareUrl} className={styles.shareButton}>
              <WeiboIcon size={32} round />
            </WeiboShareButton>
          </Col>
        </Row>
        <Row className="mt-4 py-4">
          <ReactMarkdown allowDangerousHtml={true} children={article.content} />
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
    revalidate: 1,
  }
}

export default Article
