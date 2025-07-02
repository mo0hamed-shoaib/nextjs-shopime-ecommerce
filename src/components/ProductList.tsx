"use client"

import Products from "@/types/product";
import ProductCard from "@/components/ProductCard";

interface ProductListProps {
  products: Products[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div>
      {/* Product Count */}
      <div className="text-center mb-8">
        <p className="text-gray-300">
          {products.length} product
          {products.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* No products message */
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            No products found
          </h2>
          <p className="text-gray-400">
            No products match the selected filter.
          </p>
        </div>
      )}
    </div>
  );
}
