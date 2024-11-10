import type { Metadata } from "next";
import dynamic from "next/dynamic"
import "./assets/sass/globals.scss";
import "jquery-ui-dist/jquery-ui.min.css";
import { inter } from "@/app/components/Fonts/Fonts";
import BootstrapClientJS from "./components/BootstrapClientJS/BootstrapClientJS";
//import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import JqueryClient from "@/app/components/JqueryClient/JqueryClient";

export const metadata: Metadata = {
  title: "XYZ Company",
  description: "XYZ company site",
};

const DynamicHeaderWithNoSSR = dynamic(
  () => import("@/app/components/Header/Header"),
  { ssr: false }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`container-fluid ${inter.className} antialiased body`}>
          <DynamicHeaderWithNoSSR />
          {children}
          <Footer />
          <BootstrapClientJS />
      </body>
    </html>
  );
}
