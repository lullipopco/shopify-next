import '../styles/globals.css'
import '@shopify/shopify-api/adapters/node'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  <Layout>
  return <Component {...pageProps} />
  </Layout>
}
