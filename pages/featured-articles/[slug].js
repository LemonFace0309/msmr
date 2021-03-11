import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

import { fetchAPI } from '../../lib/api'

function Article({article}) {
  return (
    <div>
      <h1>{article.title}</h1>
    </div>
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
