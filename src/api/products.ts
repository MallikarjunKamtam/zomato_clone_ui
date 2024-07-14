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

export const addToCart = async (data: ICartPayload) => {
  try {
    const res = await axios({
      method: "post",
      url: `${baseEndPoint}/cart`,
      data,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const removeFromToCart = async (data: ICartPayload) => {
  try {
    const res = await axios({
      method: "delete",
      url: `${baseEndPoint}/cart`,
      data,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCartList = async (): Promise<{
  data: { productId: number; quantity: number }[];
  message: string;
}> => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseEndPoint}/cart`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export interface ICartPayload {
  id: number;
}

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
