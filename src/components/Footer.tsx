import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)] mt-auto px-4 py-8 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#6366F1" />
              <text
                x="16"
                y="21"
                textAnchor="middle"
                fontSize="16"
                fill="#fff"
                fontFamily="Montserrat, sans-serif"
              >
                S
              </text>
            </svg>
            <span className="text-xl font-bold tracking-wide">ShopiMe</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Your trusted online shop for electronics and more.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="flex flex-col gap-2" aria-label="Company">
            <h6 className="text-lg font-semibold mb-2 text-indigo-400">
              Company
            </h6>
            <Link
              href="/"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              Products
            </Link>
            <Link
              href="/category"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              Categories
            </Link>
          </nav>
          <nav className="flex flex-col gap-2" aria-label="Legal">
            <h6 className="text-lg font-semibold mb-2 text-indigo-400">
              Legal
            </h6>
            <Link
              href="/terms"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              Privacy Policy
            </Link>
            <Link
              href="/user-data-deletion"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              User Data Deletion
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-sm text-gray-400">Follow us</span>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .592 23.405 0 22.675 0" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-indigo-400 focus-visible:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              tabIndex={0}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37c-.967.967-1.24 2.14-1.298 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.058 1.277.331 2.45 1.298 3.417.967.967 2.14 1.24 3.417 1.298C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.331 3.417-1.298.967-.967 1.24-2.14 1.298-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.331-2.45-1.298-3.417-.967-.967-2.14-1.24-3.417-1.298C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] mt-8 pt-4 text-center text-xs text-gray-500">
        <span>
          Thanks for shopping with us - Created by Mohamed Gamal &copy;{" "}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
