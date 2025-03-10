"use client"

import { Star, Check } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const reviews = [
  {
    id: 1,
    author: "Mike T.",
    rating: 5,
    size: "L",
    color: "Black",
    verified: true,
    content: "This hoodie is absolutely fire! The fabric quality is insane and the fit is perfect. Already getting tons of compliments. Worth every penny! 🔥",
    images: [
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
    ],
    date: "2 days ago"
  },
  {
    id: 2,
    author: "Sarah K.",
    rating: 5,
    size: "M",
    color: "White",
    verified: true,
    content: "The attention to detail on this piece is incredible. The stitching, the materials, everything is top notch. Definitely size up if you want that oversized look.",
    date: "1 week ago"
  }
]

const summary = [
  "92% say this runs true to size",
  "Premium fabric quality with zero shrinkage",
  "Perfect for layering in all seasons"
]

export function ProductReviews() {
  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>
          <span className="font-bold">4.8</span>
          <span className="text-gray-400">(128 reviews)</span>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="bg-gray-900/50 rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-4">Quick Summary</h3>
        <ul className="space-y-2">
          {summary.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-800 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                {review.author[0]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{review.author}</span>
                  {review.verified && (
                    <span className="bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <span>Size: {review.size}</span>
                  <span>•</span>
                  <span>Color: {review.color}</span>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{review.content}</p>

            {review.images && (
              <div className="grid grid-cols-2 gap-4 mb-4">
                {review.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`Review image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}