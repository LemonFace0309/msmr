import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import config from 'react-reveal/globals'

config({ ssrFadeout: true })

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
