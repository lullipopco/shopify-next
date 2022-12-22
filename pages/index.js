import { getProductsInCollection } from "../lib/shopify"
import Head from 'next/head'

export default function Home({ products}) {
  return (
    <h1 className="text-3xl font-bold underline">
      FUCK THIS SHIT
    </h1>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: { products }, // will be passed to the page component as props
  }
}