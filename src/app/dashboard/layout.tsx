import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Head from "next/head";

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
        " h-screen max-h-screen w-screen min-w-[400px] overflow-hidden"
      }
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <div className="flex h-full w-full flex-col overflow-hidden lg:flex-row">
        <Menu />
        <div className="hidden w-[1px] bg-slate-100 lg:block" />
        <Navbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
