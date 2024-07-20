import axios from "axios";

const baseEndPoint = process.env.NEXT_PUBLIC_ZOMATO_CLONE_SERVICE;

export const getAllRestaurants = async (): Promise<{
  data: IGetRestaurant[];
  message: string;
}> => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseEndPoint}/restaurents`,
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export interface IGetRestaurant {
  id: number;
  name: string;
  isOpen: boolean;
  location: string;
  phoneNumber: string;
  email: string;
  timingsOpen: string;
  timingsClose: string;
  ownerName: string;
  rating: string;
  createdAt: string;
  updatedAt: string;
  cartCount: number;
  imageUrl: string;
}
