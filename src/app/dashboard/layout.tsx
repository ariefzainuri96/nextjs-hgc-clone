import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  viewportFit: "cover",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        `${inter.variable}` + " h-screen max-h-screen w-screen overflow-hidden"
      }
    >
      <div className="flex h-full w-full flex-col overflow-hidden lg:flex-row">
        <Menu />
        <div className="hidden w-[1px] bg-slate-100 lg:block" />
        <Navbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
