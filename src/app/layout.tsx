import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zomato clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="h-14 bg-yellow-300 flex items-center justify-between px-6">
          <h1 className="font-bold text-xl text-[#111]">Zomato Clone</h1>
          <ShoppingCartOutlinedIcon className="cursor-pointer" />
        </nav>
        {children}
      </body>
    </html>
  );
}
