"use client";
import { useState } from "react";

export default function TestErrorPage() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("This is a test error!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="text-yellow-400 text-6xl mb-4">🧪</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Error Test Page
        </h1>
        <p className="text-gray-600 mb-6">
          Click the button below to simulate an error and test the global error
          handler.
        </p>
        <button
          onClick={() => setShouldThrow(true)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Throw Error
        </button>
      </div>
    </div>
  );
}
