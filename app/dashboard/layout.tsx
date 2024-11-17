import CSideBar from "@/app/components/c-sidebar/c-sidebar"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "XYZ Company",
    description: "XYZ company site",
  };
  
  
  export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="c-dashboard-layout">
            <CSideBar />
            {children}
        </div>
    );
  }
  