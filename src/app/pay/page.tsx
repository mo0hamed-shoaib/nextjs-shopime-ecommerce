"use client";
import { useEffect, useState } from "react";
import { CheckCircle2, CreditCard } from "lucide-react";
import Link from "next/link";

export default function PayPage() {
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setProcessing(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-8 [background-color:#1e2939] rounded-xl shadow-lg flex flex-col items-center">
      {processing ? (
        <>
          <CreditCard className="w-16 h-16 text-indigo-400 animate-pulse mb-4" />
          <div className="text-3xl font-bold text-white text-center mb-8">Processing Payment…</div>
          <div className="w-8 h-8 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mb-2" />
          <div className="text-lg text-gray-300">Please wait while we process your payment.</div>
        </>
      ) : (
        <>
          <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
          <div className="text-3xl font-bold text-white text-center mb-8">Payment Successful!</div>
          <div className="text-lg text-gray-300 mb-6">Thank you for your order. Your payment has been processed.</div>
          <div className="flex gap-4">
            <Link href="/orders" className="btn btn-primary text-lg font-semibold">View Orders</Link>
            <Link href="/products" className="btn btn-outline text-lg font-semibold">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
} 