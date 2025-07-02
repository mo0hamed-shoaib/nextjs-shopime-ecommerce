import { Suspense } from "react";
import { notFound } from "next/navigation";
import Products from "@/types/product";
import ProductCard from "@/components/ProductCard";

// Props type for the page component
type Props = {
  params: { productid: string };
};

// API response type
type ApiResponse = {
  product: Products;
};

// Generate page metadata
export async function generateMetadata({ params }: Props) {
  const product = await getProduct(params.productid);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "Product not found",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

// Fetch product data
async function getProduct(id: string): Promise<Products | null> {
  try {
    const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);

    if (!response.ok) {
      return null;
    }

    const data: ApiResponse = await response.json();

    // Return the product if it exists
    return data.product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Component for main product details
async function ProductDetails({ productId }: { productId: string }) {
  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full">
        <ProductCard product={product} />
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function ProductPage({ params }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Suspense
          fallback={
            <div className="text-white text-center py-8">
              Loading product details...
            </div>
          }
        >
          <ProductDetails productId={params.productid} />
        </Suspense>
      </div>
    </div>
  );
}
