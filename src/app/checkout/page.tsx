"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCart } from "@/components/CartContext"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { cart, clearCart } = useCart()
  const [placingOrder, setPlacingOrder] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login")
    }
  }, [status, router])

  if (status === "loading") return <div>Loading...</div>
  if (!session) return null

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = total > 100 ? 0 : 10
  const grandTotal = total + shipping

  const handlePlaceOrder = () => {
    setPlacingOrder(true)
    setTimeout(() => {
      // Save order to localStorage
      if (session?.user?.email && cart.length > 0) {
        const orderKey = `orders_${session.user.email}`;
        const prevOrders = JSON.parse(localStorage.getItem(orderKey) || '[]');
        const newOrder = {
          id: Date.now(),
          items: cart,
          total,
          shipping,
          grandTotal,
          date: new Date().toISOString(),
        };
        localStorage.setItem(orderKey, JSON.stringify([newOrder, ...prevOrders]));
      }
      clearCart()
      router.push("/pay")
    }, 1200)
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-8 [background-color:#1e2939] rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Checkout</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-gray-300 text-lg mb-6 text-center">Your cart is empty. <Link href="/products" className="text-indigo-400 underline">Shop now</Link></div>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-700 mb-6">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center py-4 gap-4">
                <Image src={item.image} alt={item.title} width={64} height={64} className="rounded" />
                <div className="flex-1">
                  <div className="text-white font-semibold">{item.title}</div>
                  <div className="text-gray-400">${item.price} x {item.quantity}</div>
                </div>
                <div className="text-indigo-400 font-bold">${(item.price * item.quantity).toFixed(2)}</div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-gray-300">Total:</span>
            <span className="text-2xl font-bold text-indigo-400">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-base text-gray-400">Shipping:</span>
            <span className="text-base font-medium text-gray-300">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-semibold text-gray-300">Grand Total:</span>
            <span className="text-2xl font-bold text-indigo-400">${grandTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="btn btn-success w-full text-lg font-semibold flex items-center justify-center gap-2"
            disabled={placingOrder}
          >
            {placingOrder ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>Place Order</>
            )}
          </button>
        </>
      )}
    </div>
  )
} 