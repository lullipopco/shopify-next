import { Shopify } from "@shopify/shopify-api";

const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

async function ShopifyData(query) {
    const url = `https://${domain}/api/2022-10/graphql.json`

    const options = {
        endpoint: url,
        method: "POST",
        headers: {
            "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query })
    };

    try {
        const data = await fetch(url, options).then(response => {
            return response.json()
        });

        return data
    } catch (error) {
        throw new Error("Products not fetched")
    }
}

export async function getProductsInCollection() {
    const query = `
    {
      collection(handle: "frontpage"){
        id
        title
        products(first: 25) {
          edges {
            node {
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }`

      const response = await ShopifyData(query)

      const allProducts = response.data.collection.products.edges
      ? response.data.collection.products.edges
      : [];

      return allProducts;
}

export async function getAllProducts() {
  const query = `
  {
    products(first: 25) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const slugs = response.data.products.edges ? response.data.prodcuts.edges : []

  return slugs
}

export async function getProduct(handle) {
  const query = `{
    product(handle: "${handle}") {
      id
      title
      handle
      description
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
            title
            id
            price {
              amount
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const product = response.data.product ? response.data.product : []

  return product
}