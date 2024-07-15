"use client";
import { IGetProduct } from "@/api/products";
import Image from "next/image";
import React from "react";
import Rating from "./rating";
import Button from "./button";
import { addToCart, removeFromToCart } from "@/api/cart";

const Product = ({
  data,
  addedCount,
  onAdd,
  onRemove,
  isLoading,
}: {
  data: IGetProduct;
  addedCount: number;
  onAdd: (productId: number) => void;
  onRemove: (productId: number) => void;
  isLoading: boolean;
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
        {addedCount === 0 ? (
          <Button
            accent="primary"
            onClick={() => {
              onAdd(id);
            }}
            extraClasses="mt-4 !w-full float-right"
          >
            Add to Cart
          </Button>
        ) : (
          <div className=" flex items-center justify-around w-1/2 m-auto">
            <Button
              accent="primary"
              onClick={() => {
                onRemove(id);
              }}
              extraClasses="mt-4 w-full"
            >
              -
            </Button>
            <span className="w-full text-3xl items-center justify-center flex mt-3">
              {addedCount}
            </span>

            <Button
              accent="primary"
              onClick={() => {
                onAdd(id);
              }}
              extraClasses="mt-4 w-full"
            >
              +
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
