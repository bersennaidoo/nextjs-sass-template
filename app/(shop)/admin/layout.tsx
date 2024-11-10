import SideNav from "@/app/components/Shop/Admin/sidenav"
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
    <div className="row">
      <SideNav />
      {children}
    </div>
  );
}
