import React from "react";
import Products from "@/types/product";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Mobile Products",
  description: "Mobile products category",
};

export default async function page() {
  const res = await fetch(
    "https://fakestoreapi.in/api/products/category?type=mobile"
  );
  const mobileProducts = await res.json();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white text-center pt-8 pb-2">
          Explore Mobile Products
        </h1>
        <p className="text-gray-300 text-center pb-8 max-w-2xl mx-auto">
          Discover our premium collection of mobile phones
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8">
          {mobileProducts.products.map((product: Products) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
