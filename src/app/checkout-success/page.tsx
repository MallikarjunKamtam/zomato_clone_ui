"use client";

import { resetCart } from "@/api/cart";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen bg-black w-full flex-col gap-4 flex items-center justify-center text-4xl overflow-hidden text-white">
      Success!
      <Link href={"/"}>
        <div
          onClick={async () => {
            await resetCart();
          }}
          className="cursor-pointer font-bold border p-2 rounded"
        >
          Go back to Homepage
        </div>
      </Link>
    </div>
  );
};

export default Page;
