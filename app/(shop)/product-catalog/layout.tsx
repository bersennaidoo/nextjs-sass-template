import ProductCatalogNav from "@/app/components/Shop/ProductCatalogNav/ProductCatalogNav"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop Product Catalog",
    description: "Shop product catalog",
  };
  
  export default function ProductCatalogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="container admin-root">
          <header><ProductCatalogNav /></header>
          <main id="admin-main-section" className="container product-main-container">{children}</main>
        </div>
    );
  }