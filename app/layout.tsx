import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./assets/sass/local/main.scss";
import "jquery-ui-dist/jquery-ui.min.css";
//import { inter } from "@/app/components/Fonts/Fonts";
import BootstrapClientJS from "./components/BootstrapClientJS/BootstrapClientJS";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
  title: "XYZ Company",
  description: "XYZ Shop Site",
};

const DynamicHeaderWithNoSSR = dynamic(
  () => import("@/app/components/Header/Header"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="m-container">
            <DynamicHeaderWithNoSSR />
          {children}
            <Footer />
        </div>
        <BootstrapClientJS />
      </body>
    </html>
  );
}
