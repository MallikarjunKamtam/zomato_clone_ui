import { getCartList } from "@/api/cart";
import { getAllProductsForResturant } from "@/api/products";
import Product from "@/shared/product";

import React from "react";

export default async function ({ params: { id } }: { params: { id: string } }) {
  const products = await getAllProductsForResturant(+id);
  const cartDetails = await getCartList(+id);

  const emptyPlaceHolder = () => {
    return <>Empty</>;
  };

  const content = () => {
    return (
      <main className="grid grid-cols-3 items-center justify-center gap-10 p-4">
        {products.data.map((product, index) => (
          <Product
            addedCount={cartDetails.data[product.id] ?? 0}
            key={product.id + index}
            data={product}
            // onAddButtonClick={(id) => {}}
          />
        ))}
      </main>
    );
  };

  return products?.data?.length > 0 ? content() : emptyPlaceHolder();
}
