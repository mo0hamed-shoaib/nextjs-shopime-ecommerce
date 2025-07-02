import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to <span className="text-indigo-400">ShopiMe</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover amazing products across various categories. From
            electronics to home appliances, we have everything you need to
            enhance your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/products"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 text-lg rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Browse All Products
            </Link>
            <Link
              href="/category"
              className="bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold px-8 py-3 text-lg rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl border border-gray-600"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
