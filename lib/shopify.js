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
        collection(handle: "frontpage") {
          id
          title
          products(first: 25) {
            edges {
              node {
                title
                handle
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