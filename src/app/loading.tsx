import React from 'react'

export default function loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <div className="text-center space-y-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
