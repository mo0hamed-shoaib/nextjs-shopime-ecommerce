import { PackageCheck } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartSummaryServer({ cart }: { cart: CartItem[] }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // Placeholder shipping logic
  const shipping = totalPrice > 100 ? 0 : 10;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="border-t border-base-200 pt-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold">Total:</span>
        <span className="text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-base text-gray-400">Shipping:</span>
        <span className="text-base font-medium text-gray-200">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-semibold">Grand Total:</span>
        <span className="text-2xl font-bold text-indigo-400">${grandTotal.toFixed(2)}</span>
      </div>
      <Link href="/checkout" className="btn btn-outline btn-success w-full">Proceed to Checkout</Link>
    </div>
  );
} 