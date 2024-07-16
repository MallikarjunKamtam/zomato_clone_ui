import { getAllRestaurants } from "@/api/restaurants";
import NavBarHome from "@/shared/navBar";

import RestaurantCard from "@/shared/restaurant";

import React from "react";

export default async function () {
  const response = await getAllRestaurants();

  const emptyPlaceHolder = () => {
    return <>Empty</>;
  };

  const content = () => {
    return (
      <section>
        <NavBarHome />
        <main className="grid grid-cols-3 items-center justify-center gap-10 p-4">
          {response.data.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.id + index}
              restaurant={restaurant}
            />
          ))}
        </main>
      </section>
    );
  };

  return response.data.length === 0 ? emptyPlaceHolder() : content();
}
