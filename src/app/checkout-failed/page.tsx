import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen bg-black flex-col gap-4 overflow-hidden w-full flex items-center justify-center text-4xl text-white">
      Checkout failed, please try again...
      <Link href={"/"}>
        <div className="cursor-pointer font-bold border p-2 rounded">
          Go back to Homepage
        </div>
      </Link>
    </div>
  );
};

export default Page;
