"use client";
import React from "react";

interface ErrorProps {
  error: Error;
}

export default function error({ error }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-4">
          An unexpected error has occurred. Please try again later.
        </p>
        <p className="text-red-500 text-sm">{error.message}</p>
      </div>
    </div>
  );
}
