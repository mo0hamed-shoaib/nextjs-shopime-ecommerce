"use client";
import React, { useState } from "react";
import Products from "@/types/product";
import { useCart } from "@/components/CartContext";
import { CheckCircle } from "lucide-react";

interface AddToCartButtonProps {
  product: Products;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      addToCart(product, 1);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (error) {
      // Optionally handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
            Adding...
          </>
        ) : (
          "Add to Cart"
        )}
      </button>
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-700 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 z-50 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-white" />
          Added to cart!
        </div>
      )}
    </>
  );
}
