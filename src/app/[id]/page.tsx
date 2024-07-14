import {
  IGetProduct,
  getAllProducts,
  getAllProductsForResturant,
} from "@/api/products";
import Product from "@/shared/product";
import { GetServerSideProps } from "next";
import React from "react";

export default async function ({ params: { id } }: { params: { id: string } }) {
  const products = await getAllProductsForResturant(+id);

  const emptyPlaceHolder = () => {
    return <>Empty</>;
  };

  const content = () => {
    return (
      <main className="grid grid-cols-3 items-center justify-center gap-10 p-4">
        {products.data.map((product, index) => (
          <Product
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
