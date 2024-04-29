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
    <html lang="en">
      <body
        className={
          `${inter.variable}` + " flex h-screen w-screen flex-col bg-white"
        }
      >
        <div className="flex flex-1 flex-col overflow-y-auto lg:flex-row">
          <Menu />
          <div className="hidden w-[1px] bg-slate-100 lg:block" />
          <Navbar />
          <main className="flex-1 overflow-y-scroll bg-white">{children}</main>
        </div>
      </body>
    </html>
  );
}
