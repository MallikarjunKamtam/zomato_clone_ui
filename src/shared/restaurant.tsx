import { IGetRestautant } from "@/api/restaurants";
import Link from "next/link";

interface RestaurantCardProps {
  restaurant: IGetRestautant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x300"
        alt={restaurant.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900">
          {restaurant.name}
        </div>
        <p className="text-gray-700 text-base mb-2">
          <strong>Owner:</strong> {restaurant.ownerName}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Location:</strong> {restaurant.location}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Phone:</strong> {restaurant.phoneNumber}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${restaurant.email}`}
            className="text-blue-500 underline"
          >
            {restaurant.email}
          </a>
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Timings:</strong> {restaurant.timingsOpen} -{" "}
          {restaurant.timingsClose}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Rating:</strong> {restaurant.rating}
        </p>
        <p
          className={`text-base font-semibold mb-2 ${
            restaurant.isOpen ? "text-green-500" : "text-red-500"
          }`}
        >
          <strong>Status:</strong> {restaurant.isOpen ? "Open" : "Closed"}
        </p>
        <p className="text-gray-500 text-sm">
          <strong>Created At:</strong>{" "}
          {new Date(restaurant.createdAt).toLocaleString()}
        </p>
        <p className="text-gray-500 text-sm">
          <strong>Updated At:</strong>{" "}
          {new Date(restaurant.updatedAt).toLocaleString()}
        </p>
        <div className="mt-4">
          <Link className="" href={`/restaurants/${restaurant.id}`}>
            <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
              Open
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
