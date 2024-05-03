import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        `${inter.variable}` +
        " flex h-screen w-screen min-w-[400px] flex-col overflow-hidden bg-white"
      }
    >
      <div className="flex flex-1 flex-col overflow-y-auto lg:flex-row">
        <Menu />
        <div className="hidden w-[1px] bg-slate-100 lg:block" />
        <Navbar />
        <main className="flex-1 overflow-y-scroll bg-white">{children}</main>
      </div>
    </div>
  );
}
