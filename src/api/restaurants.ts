import axios from "axios";

const baseEndPoint = process.env.NEXT_PUBLIC_ZOMATO_CLONE_SERVICE;

export const getAllRestaurants = async (): Promise<{
  data: IGetRestautant[];
  message: string;
}> => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseEndPoint}/restaurents`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export interface IGetRestautant {
  id: number;
  name: string;
  isOpen: boolean;
  location: string;
  phoneNumber: number;
  email: string;
  timingsOpen: string;
  timingsClose: string;
  ownerName: string;
  rating: string;
  createdAt: string;
  updatedAt: string;
}
