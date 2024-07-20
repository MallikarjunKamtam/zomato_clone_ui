"use client";

import { getAllRestaurants } from "@/api/restaurants";
import NavBarHome from "@/shared/navBar";
import { useQuery } from "@tanstack/react-query";
import RestaurantCard from "@/shared/restaurant";

import React from "react";

export default function () {
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
        <main className="grid grid-cols-3 items-center justify-center gap-10 p-4">
          {data.data.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.id + index}
              restaurant={restaurant}
            />
          ))}
        </main>
      </section>
    );
  };

  return data?.data?.length > 0 ? content() : emptyPlaceHolder();
}
