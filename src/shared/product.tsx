import { IGetProduct } from "@/api/products";
import Image from "next/image";
import React from "react";
import Rating from "./rating";
import Button from "./button";

const Product = ({
  data,
}: //   onAddButtonClick,
{
  data: IGetProduct;
  //   onAddButtonClick: (id: number) => void;
}) => {
  const { currency, id, imageUrl, name, price, rating, restaurentId, tag } =
    data;

  return (
    <div className="w-96 border rounded shadow-lg p-4 m-4 ">
      <Image src={imageUrl} alt={name} width={290} height={150} />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{tag}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-semibold">
            {currency} {price}
          </span>
          <span className=" text-white px-2 py-1 rounded">
            <Rating rating={rating} />
          </span>
        </div>
        <Button
          accent="primary"
          //   onClick={() => {
          //     onAddButtonClick(id);
          //   }}
          extraClasses="mt-4 !w-full float-right"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
