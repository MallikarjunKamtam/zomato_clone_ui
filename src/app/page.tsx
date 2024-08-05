"use client";

import "react-toastify/dist/ReactToastify.css";
import { getAllRestaurants } from "@/api/restaurants";
import NavBarHome from "@/shared/navBar";
import { useQuery } from "@tanstack/react-query";
import RestaurantCard from "@/shared/restaurant";
import FcmTokenComp from "../lib/firebaseForeground";
import React from "react";
import dotenv from "dotenv";

export default function () {
  dotenv.config();
  const { data } = useQuery({
    queryFn: getAllRestaurants,
    queryKey: ["getAllRestaurants"],
  });

  const emptyPlaceHolder = () => {
    return <>Empty</>;
  };

  const content = () => {
    return (
      <section>
        <NavBarHome />
        <FcmTokenComp />
        <main className="grid grid-cols-3 items-center justify-center gap-10 p-4">
          jhavfdsfjs
          {data.data.map((restaurant, index) => (
            <RestaurantCard key={"key" + index} restaurant={restaurant} />
          ))}
        </main>
      </section>
    );
  };

  return data?.data?.length > 0 ? content() : emptyPlaceHolder();
}
