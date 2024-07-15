import axios from "axios";

const baseEndPoint = process.env.NEXT_PUBLIC_ZOMATO_CLONE_SERVICE;

export const getAllProducts = async (): Promise<{
  data: IGetProduct[];
  message: string;
}> => {
  try {
    const res = await axios({ method: "get", url: `${baseEndPoint}/products` });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProductsForResturant = async (
  id: number
): Promise<{
  data: IGetProduct[];
  message: string;
}> => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseEndPoint}/restaurents/${id}/products`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export interface IGetProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  currency: string;
  restaurentId: number;
  rating: number; // out of 5s
  tag: string;
}
