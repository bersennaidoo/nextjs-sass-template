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
    <div className="row">
      {children}
    </div>
  );
}
