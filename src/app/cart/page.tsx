"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useCart } from "@/components/CartContext"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

const CartItemsClient = dynamic(() => import("@/components/CartItemsClient"), { ssr: false })
const CartSummaryServer = dynamic(() => import("./CartSummaryServer"))

export default function CartPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login")
    }
  }, [status, router])

  if (status === "loading") return <div>Loading...</div>
  if (!session) return null

  const handleIncrement = (id: number) => {
    updateQuantity(id, (cart.find(item => item.id === id)?.quantity || 1) + 1)
  }
  const handleDecrement = (id: number) => {
    updateQuantity(id, Math.max(1, (cart.find(item => item.id === id)?.quantity || 1) - 1))
  }
  const handleRemove = (id: number) => {
    removeFromCart(id)
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-8 [background-color:#1e2939] rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Shopping Cart</h1>
        <span className="text-lg font-medium text-gray-400">
          {cart.reduce((sum, item) => sum + item.quantity, 0)} {cart.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-6xl mb-4 text-indigo-400">🛒</div>
          <div className="text-gray-300 text-lg mb-6 text-center">Your cart is empty.</div>
          <Link href="/products" className="btn btn-primary px-6 py-2 rounded-full text-lg font-semibold shadow hover:scale-105 transition-transform">Browse Products</Link>
        </div>
      ) : (
        <div className="space-y-6">
          <CartItemsClient
            cart={cart.map(item => ({
              id: item.id,
              name: item.title,
              price: item.price,
              image: item.image,
              quantity: item.quantity,
            }))}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
          />
          <CartSummaryServer cart={cart.map(item => ({
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.image,
            quantity: item.quantity,
          }))} />
          <div className="mt-6 text-center">
            <Link href="/products" className="btn btn-ghost text-primary hover:text-primary-focus">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 