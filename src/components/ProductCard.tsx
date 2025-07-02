'use client'

import Image from "next/image";
import Link from "next/link";
import Products from "@/types/product";
import AddToCartButton from "@/components/BuyNowButton";
import { useWishlist } from "@/components/CartContext";
import { Heart, Flame, Tag } from "lucide-react";

function capAndTrunc(str?: string) {
  if (!str) return "";
  const capped = str.charAt(0).toUpperCase() + str.slice(1);
  return capped.length > 12 ? capped.slice(0, 12) + "…" : capped;
}

interface ProductCardProps {
  product: Products;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const hasDiscount = !!product.discount && product.discount > 0;
  const oldPrice = hasDiscount ? (product.price / (1 - product.discount! / 100)) : undefined;

  return (
    <div className="[background-color:#1e2939] shadow-lg rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group h-full">
      <Link
        href={`/products/${product.id}`}
        className="block focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-t-xl"
      >
        <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.popular && (
            <div className="absolute top-2 right-2" title="Popular Item">
              <Flame className="w-7 h-7 text-orange-500 drop-shadow" />
            </div>
          )}
        </div>
        <div className="p-6 space-y-3">
          <h2 className="text-xl font-bold text-white mb-2 line-clamp-2 hover:text-indigo-400 transition-colors">
            {product.title}
          </h2>
          <p className="text-lg text-gray-300 mb-4 line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center gap-2 mb-4">
            {hasDiscount && (
              <span className="text-gray-400 line-through text-base">${oldPrice?.toFixed(2)}</span>
            )}
            <span className="text-indigo-400 font-bold text-lg">${product.price}</span>
            {hasDiscount && (
              <span className="flex items-center gap-1" title="Discount">
                <Tag className="w-4 h-4 text-green-400 inline-block" />
                <span className="text-green-400 font-semibold text-sm">{product.discount}% off</span>
              </span>
            )}
          </div>
          {product.brand && (
            <div>
              <span className="text-gray-400">Brand: </span>
              <span className="text-white font-semibold truncate whitespace-nowrap block max-w-[120px]">{capAndTrunc(product.brand)}</span>
            </div>
          )}
          {product.model && (
            <div>
              <span className="text-gray-400">Model: </span>
              <span className="text-white font-semibold truncate whitespace-nowrap block max-w-[120px]">{capAndTrunc(product.model)}</span>
            </div>
          )}
          {product.category && (
            <div>
              <span className="text-gray-400">Category: </span>
              <span className="text-white font-semibold capitalize truncate whitespace-nowrap block max-w-[120px]">{capAndTrunc(product.category)}</span>
            </div>
          )}
          {product.color && (
            <div>
              <span className="text-gray-400">Color: </span>
              <span className="text-white font-semibold capitalize truncate whitespace-nowrap block max-w-[120px]">{capAndTrunc(product.color)}</span>
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 px-6 pb-6 items-center justify-between">
        <AddToCartButton product={product} />
        <button
          className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
          onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={inWishlist ? "w-7 h-7 text-pink-500" : "w-7 h-7 text-pink-400"} fill={inWishlist ? '#f472b6' : 'none'} />
        </button>
      </div>
    </div>
  );
}
