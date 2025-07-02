import React, { Suspense } from "react";
import Products from "@/types/product";
import { capitalizeFirst } from "@/utils/helpers";
import CategoryButton from "@/components/CategoryButton";
import { Gamepad2, Smartphone, Headphones, Monitor, Box, Tag } from "lucide-react";

export const metadata = {
  title: "Categories",
  description: "Shop by category",
};

const categoryIcons: Record<string, React.ReactNode> = {
  gaming: <Gamepad2 className="w-8 h-8 text-indigo-500" />,
  mobile: <Smartphone className="w-8 h-8 text-indigo-500" />,
  audio: <Headphones className="w-8 h-8 text-indigo-500" />,
  tv: <Monitor className="w-8 h-8 text-indigo-500" />,
  electronics: <Box className="w-8 h-8 text-indigo-500" />,
  default: <Tag className="w-8 h-8 text-indigo-500" />,
};

async function CategoryListServer() {
  const res = await fetch("https://fakestoreapi.in/api/products");
  const data = await res.json();
  const products = data.products;

  // Get unique categories with Set
  const categories = [
    ...new Set(products.map((product: Products) => product.category)),
  ] as string[];

  // Get product count for each category
  const categoryData = categories.map((category) => {
    const productCount = products.filter(
      (product: Products) => product.category === category
    ).length;

    return {
      category,
      productCount,
    };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-8">
      {categoryData.map(({ category, productCount }) => (
        <div
          key={category}
          className="bg-gray-800 shadow-lg rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group hover:scale-105"
        >
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600/30 transition-colors duration-300">
              {categoryIcons[category.toLowerCase()] || categoryIcons.default}
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              {capitalizeFirst(category)}
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              {productCount} products available
            </p>
            <div className="flex justify-center">
              <CategoryButton category={category} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center pt-8 pb-2">
        Browse by Category
      </h1>
      <p className="text-gray-300 text-center pb-8 max-w-2xl mx-auto px-4">
        Discover products organized by categories that suit your needs
      </p>
      <Suspense
        fallback={
          <div className="text-white text-center py-8">
            Loading categories...
          </div>
        }
      >
        <CategoryListServer />
      </Suspense>
    </div>
  );
}
