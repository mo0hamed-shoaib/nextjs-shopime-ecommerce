"use client";
import { useRouter, useSearchParams } from "next/navigation";

const categories = ["all", "gaming", "mobile", "audio", "tv"];

export default function FilterButtons({
  currentFilter,
}: {
  currentFilter: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
            currentFilter === category
              ? "bg-indigo-500 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
        >
          {category === "all"
            ? "All Products"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
