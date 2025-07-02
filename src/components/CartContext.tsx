"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import type Products from "@/types/product";
import { useSession } from "next-auth/react";

export interface CartItem extends Products {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Products, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  wishlist: Products[];
  addToWishlist: (product: Products) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

export function useWishlist() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useWishlist must be used within a CartProvider");
  return {
    wishlist: ctx.wishlist,
    addToWishlist: ctx.addToWishlist,
    removeFromWishlist: ctx.removeFromWishlist,
    clearWishlist: ctx.clearWishlist,
    isInWishlist: ctx.isInWishlist,
  };
}

function getUserKey(email?: string | null) {
  return email ? `cart_${email}` : "cart_guest";
}
function getWishlistKey(email?: string | null) {
  return email ? `wishlist_${email}` : "wishlist_guest";
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email || null;
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Products[]>([]);

  // Load cart/wishlist for user on login
  useEffect(() => {
    if (status === "authenticated" && userEmail) {
      const stored = localStorage.getItem(getUserKey(userEmail));
      setCart(stored ? JSON.parse(stored) : []);
      const storedWishlist = localStorage.getItem(getWishlistKey(userEmail));
      setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
    } else if (status === "unauthenticated") {
      setCart([]);
      setWishlist([]);
    }
  }, [userEmail, status]);

  // Save cart/wishlist to localStorage per user
  useEffect(() => {
    if (status === "authenticated" && userEmail) {
      localStorage.setItem(getUserKey(userEmail), JSON.stringify(cart));
    }
  }, [cart, userEmail, status]);
  useEffect(() => {
    if (status === "authenticated" && userEmail) {
      localStorage.setItem(getWishlistKey(userEmail), JSON.stringify(wishlist));
    }
  }, [wishlist, userEmail, status]);

  const addToCart = (product: Products, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  // Wishlist logic
  const addToWishlist = (product: Products) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const clearWishlist = () => setWishlist([]);

  const isInWishlist = (id: number) => wishlist.some((item) => item.id === id);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, wishlist, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist }}>
      {children}
    </CartContext.Provider>
  );
} 