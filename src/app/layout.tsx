import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Providers from "./providers";
import Button from "@/shared/button";

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
        <Providers>
          <nav className="h-16 bg-yellow-300 flex items-center justify-between px-6">
            <h1 className="font-bold text-xl text-[#111]">Zomato Clone</h1>
            <div className=" flex items-center relative justify-center border cursor-pointer border-black rounded pr-4">
              <Button extraClasses="font-semibold text-[12px]" accent="link">
                Checkout
              </Button>

              <ShoppingCartOutlinedIcon className="cursor-pointer relative" />
              <span className="absolute top-1 right-2 text-[6px] bg-black text-white p-1 rounded-full">
                23
              </span>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
