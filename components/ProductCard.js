import Link from "next/link"
import Image from "next/image"

const ProductCard = ({ product }) => {
    const { handle, title } = product.node
    const { altText, url } = product.node.images.edges[0].node
  
  
    return (
        <Link
        href={`/product/${handle}`}
        >
        
            <a className="group">
                <div className="w-full bg-gray-200 rounded-2xl overflow-hidden">
                    <div className="relative group-hover:opacity-75 h-72 objectfit-cover">
                    <Image
                    src={url}
                    alt={altText}
                    />
                    </div>
                </div>
            </a>
        </Link>
  )
}

export default ProductCard