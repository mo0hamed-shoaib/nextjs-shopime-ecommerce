"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  let className = "rounded-md px-3 py-2 text-sm font-medium transition-colors";
  
  if (isActive) {
    className += " bg-indigo-600 text-white";
  } else {
    className += " text-gray-300 hover:bg-gray-700 hover:text-white";
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
} 