import type { Metadata } from "next";
import "./assets/sass/globals.scss";
import "jquery-ui-dist/jquery-ui.min.css";
import { inter } from "@/app/components/Fonts/Fonts";
import BootstrapClientJS from "./components/BootstrapClientJS/BootstrapClientJS";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
  title: "XYZ Company",
  description: "XYZ company site",
};

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
          <Header />
          {children}
          <Footer />
          <BootstrapClientJS />
      </body>
    </html>
  );
}
