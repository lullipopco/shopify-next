import { getProductsInCollection } from "../lib/shopify"
import ProductsList from "../components/ProductList"

export default function Home({ products }) {
  console.log(products)
  return (
    <h1 className="text-xl">
      <ProductsList/>
    </h1>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: { products }, // will be passed to the page component as props
  }
}