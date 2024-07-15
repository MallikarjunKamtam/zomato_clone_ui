import { IGetRestaurant } from "@/api/restaurants";
import Link from "next/link";

interface RestaurantCardProps {
  restaurant: IGetRestaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-101 hover:shadow-2xl">
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={restaurant.imageUrl}
          alt={restaurant.name}
        />
        {restaurant.cartCount > 0 && (
          <div className="absolute bottom right-0 bg-[gold]   text-[darkblue] p-2 rounded-bl-lg">
            <span className="text-xs font-semibold uppercase">
              {restaurant.cartCount}
            </span>
          </div>
        )}
        <div
          className={`absolute top-0 right-0 m-2 text-xs font-semibold uppercase px-2 py-1 rounded ${
            restaurant.isOpen ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {restaurant.isOpen ? "Open" : "Closed"}
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {restaurant.name}
        </h2>
        <p className="text-gray-600 text-base mb-2">
          <strong>Owner:</strong> {restaurant.ownerName}
        </p>
        <p className="text-gray-600 text-base mb-2">
          <strong>Location:</strong> {restaurant.location}
        </p>
        <p className="text-gray-600 text-base mb-2">
          <strong>Phone:</strong> {restaurant.phoneNumber}
        </p>
        <p className="text-gray-600 text-base mb-2">
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${restaurant.email}`}
            className="text-blue-500 underline"
          >
            {restaurant.email}
          </a>
        </p>
        <p className="text-gray-600 text-base mb-2">
          <strong>Timings:</strong> {restaurant.timingsOpen} -{" "}
          {restaurant.timingsClose}
        </p>
        <p className="text-gray-600 text-base mb-2">
          <strong>Rating:</strong> {restaurant.rating}
        </p>

        <div className="mt-4">
          <Link href={`/${restaurant.id}`}>
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
