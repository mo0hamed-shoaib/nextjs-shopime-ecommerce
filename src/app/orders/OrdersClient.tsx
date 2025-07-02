"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface OrdersClientProps {
  email: string;
}

interface OrderItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  shipping: number;
  grandTotal: number;
  date: string;
}

export default function OrdersClient({ email }: OrdersClientProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    if (!email) return;
    const orderKey = `orders_${email}`;
    const stored = localStorage.getItem(orderKey);
    setOrders(stored ? JSON.parse(stored) : []);
  }, [email]);

  if (!orders.length) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 mt-8 [background-color:#1e2939] rounded-xl shadow-lg flex flex-col items-center">
        <div className="text-3xl font-bold text-white text-center mb-8">Order History</div>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-indigo-400 text-6xl mb-4">📦</div>
          <div className="text-lg text-gray-300 mb-2 text-center">You have no orders yet.</div>
          <a href="/products" className="btn btn-primary px-6 py-2 rounded-full text-lg font-semibold shadow hover:scale-105 transition-transform mt-2">Shop Now</a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-8 [background-color:#1e2939] rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Order History</h1>
      <ul className="space-y-8">
        {orders.map((order) => (
          <li key={order.id} className="bg-gray-800 rounded-lg p-6 shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Order Date: {new Date(order.date).toLocaleString()}</span>
              <span className="text-indigo-400 font-bold">Total: ${order.grandTotal.toFixed(2)}</span>
            </div>
            <ul className="divide-y divide-gray-700">
              {order.items.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-3">
                  <Image src={item.image} alt={item.title} width={48} height={48} className="rounded" />
                  <div className="flex-1">
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-400 text-sm">${item.price} x {item.quantity}</div>
                  </div>
                  <div className="text-indigo-400 font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
} 