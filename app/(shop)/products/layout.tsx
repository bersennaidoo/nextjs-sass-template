import ProductsNav from "@/app/components/Shop/ProductsNav/ProductsNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Products",
  description: "Shop products",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProductsNav />
      {children}
    </>
  );
}
