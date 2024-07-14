// Assuming this file is under pages/products.tsx or similar location in your Next.js project

import type { NextPage } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Button from "@/shared/button";

const inter = Inter({ subsets: ["latin"] });

const ProductsPage: NextPage = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Products | Zomato clone</title>
      </Head>

      <div className={inter.className}>
        <Button
          extraClasses="float-right m-4 "
          accent="primary"
          children="Checkout order"
        />
        {children}
      </div>
    </>
  );
};

export default ProductsPage;
