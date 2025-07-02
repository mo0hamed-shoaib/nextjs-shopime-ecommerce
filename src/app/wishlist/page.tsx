"use client"
import { useWishlist, useCart } from "@/components/CartContext"
import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Trash2 } from "lucide-react"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login")
    }
  }, [status, router])

  if (status === "loading") return <div>Loading...</div>
  if (!session) return null

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-8 [background-color:#1e2939] rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Wishlist</h1>
        <span className="text-lg font-medium text-gray-400">
          {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-6xl mb-4 text-pink-400">💖</div>
          <div className="text-gray-300 text-lg mb-6 text-center">Your wishlist is empty.</div>
          <Link href="/products" className="btn btn-primary px-6 py-2 rounded-full text-lg font-semibold shadow hover:scale-105 transition-transform">Browse Products</Link>
        </div>
      ) : (
        <div className="space-y-6">
          <ul className="divide-y divide-base-200 mb-6">
            {wishlist.map((item) => (
              <li key={item.id} className="flex items-center py-4 gap-4">
                <Image src={item.image} alt={item.title} width={64} height={64} className="rounded" />
                <div className="flex-1">
                  <Link href={`/products/${item.id}`} className="text-white font-semibold hover:underline">{item.title}</Link>
                  <div className="text-gray-400">${item.price}</div>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="ml-4 text-red-400 hover:text-red-600 flex items-center gap-1 cursor-pointer"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => addToCart(item, 1)}
                  className="ml-2 text-indigo-400 hover:text-indigo-600 flex items-center gap-1 font-semibold border border-indigo-500 rounded px-3 py-1 transition-colors cursor-pointer"
                  title="Add to Cart"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
          <button onClick={clearWishlist} className="btn btn-outline btn-error w-full mb-4">Clear Wishlist</button>
          <div className="mt-6 text-center">
            <Link href="/products" className="btn btn-ghost text-pink-400 hover:text-pink-500">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 