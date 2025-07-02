import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Products from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { capitalizeFirst } from "@/utils/helpers";

// Props type for the page component
type Props = {
  params: { category: string };
};

// Generate page metadata
export async function generateMetadata({ params }: Props) {
  const category = params.category;

  return {
    title: `${capitalizeFirst(category)} - ShopiMe`,
    description: `Browse ${category} products at ShopiMe`,
  };
}

// Fetch products by category
async function getProductsByCategory(category: string): Promise<Products[]> {
  try {
    const response = await fetch(
      `https://fakestoreapi.in/api/products/category?type=${category}`
    );
    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}

async function CategoryProductsServer({ category }: { category: string }) {
  const products = await getProductsByCategory(category);

  if (products.length === 0) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function CategoryPage({ params }: Props) {
  const category = params.category;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {capitalizeFirst(category)}
          </h1>
          <Suspense
            fallback={
              <div className="text-white text-center py-8">
                Loading products...
              </div>
            }
          >
            <CategoryProductsServer category={category} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
