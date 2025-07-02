import React, { Suspense } from "react";
import ProductList from "@/components/ProductList";
import FilterButtons from "@/components/FilterButtons";

export const metadata = {
  title: "Products",
  description: "Available products at ShopiMe",
};

async function ProductListServer({ category }: { category: string }) {
  let url = "https://fakestoreapi.in/api/products";
  if (category !== "all") {
    url = `https://fakestoreapi.in/api/products/category?type=${category}`;
  }
  const res = await fetch(url);
  const data = await res.json();

  const products = data.products;
  return <ProductList products={products} />;
}

export default function Page({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams?.category || "all";
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Explore Our Products
        </h1>
        <FilterButtons currentFilter={category} />
        <Suspense
          fallback={
            <div className="text-white text-center py-8">
              Loading products...
            </div>
          }
        >
          <ProductListServer category={category} />
        </Suspense>
      </div>
    </div>
  );
}
