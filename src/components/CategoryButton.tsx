"use client";
import React from "react";
import Link from "next/link";

interface CategoryButtonProps {
  category: string;
}

export default function CategoryButton({ category }: CategoryButtonProps) {
  return (
    <Link href={`/category/${category}`} className="btn btn-primary">
      Browse this category
    </Link>
  );
} 