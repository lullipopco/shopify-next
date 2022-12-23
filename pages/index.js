import { getProductsInCollection } from "../lib/shopify"
import Head from 'next/head'

export default function Home({ }) {
  return (
    <h1 className="text-3xl font-bold underline">
      Dear sweetbabyjeebs
    </h1>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: {  }, // will be passed to the page component as props
  }
}