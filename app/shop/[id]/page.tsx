import { notFound } from "next/navigation"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"
import { ProductDetails } from "@/components/product-details"

// This would come from your API/database in a real app
const products = [
  {
    id: "1",
    name: "CYBER TECH Hoodie V2",
    price: 189.00,
    images: [
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800"
    ],
    colors: ["#000000", "#FFFFFF", "#FF6B6B"],
    sizes: ["M", "L", "XL"],
    type: "DROP EXCLUSIVE",
    stockCount: 5,
    viewerCount: 232,
    purchaseCount: 74,
    rating: 4.8,
    reviewCount: 128
  },
  {
    id: "2",
    name: "Pascal Oversized Hoodie",
    price: 650,
    images: [
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800"
    ],
    colors: ["#000000", "#FFFFFF", "#FF6B6B"],
    sizes: ["M", "L", "XL"],
    type: "LIMITED EDITION",
    stockCount: 3,
    viewerCount: 156,
    purchaseCount: 42,
    rating: 4.9,
    reviewCount: 86
  },
  {
    id: "3",
    name: "Box Logo Tee SS25",
    price: 450,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"
    ],
    colors: ["#000000", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    type: "NEW ARRIVAL",
    stockCount: 8,
    viewerCount: 98,
    purchaseCount: 23,
    rating: 4.7,
    reviewCount: 45
  }
]

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.id === params.id)
  
  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <ProductDetails product={product} />

        {/* Style Suggestions */}
        <RelatedProducts />

        {/* Reviews */}
        <ProductReviews />
      </div>

      <Footer />
    </main>
  )
}