"use client";
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemClientProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItemClient({ item, onIncrement, onDecrement, onRemove }: CartItemClientProps) {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <Image src={item.image} alt={item.name} width={64} height={64} className="rounded" />
          <div>
            <h3 className="text-lg font-semibold text-base-content">{item.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-base-content/70">${item.price}</span>
              <span className="text-base-content/50">×</span>
              <span className="text-base-content/70">{item.quantity}</span>
              <span className="text-base-content/50">=</span>
              <span className="font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-base-200 rounded-lg p-1">
            <button
              className="btn btn-ghost btn-sm min-h-0 h-8 w-8 p-0 hover:bg-yellow-500/30"
              onClick={() => onDecrement(item.id)}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="size-5" />
            </button>
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            <button
              className="btn btn-ghost btn-sm min-h-0 h-8 w-8 p-0 hover:bg-green-500/30"
              onClick={() => onIncrement(item.id)}
              aria-label="Increase quantity"
            >
              <Plus className="size-5" />
            </button>
          </div>
          <button
            className="btn btn-ghost btn-sm min-h-0 h-8 w-8 p-0 text-error hover:bg-error/10"
            onClick={() => onRemove(item.id)}
            aria-label="Remove item"
          >
            <Trash2 className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 