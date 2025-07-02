import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Montserrat_Alternates } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/components/CartContext";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "600",
});

export const metadata = {
  title: "ShopiMe",
  description: "Online shop for electronics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratAlternates.className} min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}
      >
        <SessionProvider>
          <CartProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
