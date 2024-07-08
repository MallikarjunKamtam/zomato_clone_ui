import { getAllProducts } from "@/api/products";
import Product from "@/shared/product";
import React from "react";

export default async function () {
  const response = await getAllProducts();

  const emptyPlaceHolder = () => {
    return <>Empty</>;
  };

  const content = () => {
    return (
      <main className="grid grid-cols-3 items-center justify-center gap-10 p-4">
        {response.data.map((product, index) => (
          <Product
            key={product.id + index}
            data={product}
            // onAddButtonClick={(id) => {}}
          />
        ))}
      </main>
    );
  };

  return response.data.length === 0 ? emptyPlaceHolder() : content();
}
