"use client";
import React from "react";
import CartItemClient from "./CartItemClient";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemsClientProps {
  cart: CartItem[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItemsClient({ cart, onIncrement, onDecrement, onRemove }: CartItemsClientProps) {
  return (
    <div className="divide-y divide-base-200">
      {cart.map((item) => (
        <CartItemClient
          key={item.id}
          item={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
} 