"use client"

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import logo from "@/app/icon.svg";
import NavLink from "./NavLink";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCart, useWishlist } from "@/components/CartContext";
import { ShoppingCart, Heart, User, ListOrdered, ChevronDown } from "lucide-react";

const NavItems = [
  { path: "/", name: "Home" },
  { path: "/products", name: "Products" },
  { path: "/category", name: "Categories" },
];

function IconBadge({ href, icon, count, label }: { href: string; icon: React.ReactNode; count: number; label: string }) {
  return (
    <Link href={href} className="relative flex items-center group" title={label}>
      {icon}
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
          {count}
        </span>
      )}
    </Link>
  );
}

function ProfileDropdown({ session }: { session: any }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-2 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="User menu"
      >
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt={session.user.name || "Profile"}
            width={32}
            height={32}
            className="rounded-full border border-white"
          />
        )}
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50 py-2 animate-fade-in">
          <Link
            href="/profile"
            className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            onClick={() => setOpen(false)}
          >
            <User className="w-5 h-5 text-indigo-400" /> Profile
          </Link>
          <Link
            href="/orders"
            className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            onClick={() => setOpen(false)}
          >
            <ListOrdered className="w-5 h-5 text-indigo-400" /> Order History
          </Link>
          <div className="border-t border-gray-800 my-2" />
          <div className="px-4 py-2">
            <SignOutButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const { data: session, status } = useSession();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded transition-shadow" aria-label="Home">
            <Image src={logo} alt="Logo" width={40} height={40} />
            <span className="text-white font-bold text-lg">ShopiMe</span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            {NavItems.map(({ path, name }) => (
              <li key={path}>
                <NavLink href={path}>{name}</NavLink>
              </li>
            ))}
          </ul>

          {/* Cart & Wishlist Icons */}
          <div className="flex items-center space-x-4">
            <IconBadge
              href="/wishlist"
              icon={<Heart className="w-7 h-7 text-pink-400 group-hover:text-pink-500 transition-colors" fill={wishlist.length > 0 ? '#f472b6' : 'none'} />}
              count={wishlist.length}
              label="Wishlist"
            />
            <IconBadge
              href="/cart"
              icon={<ShoppingCart className="w-7 h-7 text-indigo-400 group-hover:text-indigo-500 transition-colors" />}
              count={cart.reduce((sum, item) => sum + item.quantity, 0)}
              label="Cart"
            />
            {/* Divider for spacing */}
            <span className="mx-2 border-l border-gray-600 h-6"></span>
            {status === "authenticated" ? (
              <ProfileDropdown session={session} />
            ) : (
              <NavLink href="/login">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
