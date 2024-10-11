import AdminNav from "@/app/components/Shop/AdminNav/AdminNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop Administration",
    description: "CRUD for shop inventory",
  };
  
  export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="admin-root">
          <header className="container admin-root__header"><AdminNav /></header>
          <main id="admin-main-section" className="container admin-main-container">{children}</main>
        </div>
    );
  }