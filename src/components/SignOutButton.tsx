"use client"
import { signOut } from "next-auth/react"

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Sign out
    </button>
  )
} 