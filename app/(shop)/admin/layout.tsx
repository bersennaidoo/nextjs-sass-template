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
    <>
      <AdminNav />
      {children}
    </>
  );
}
