import axios from "axios";

const baseEndPoint = process.env.NEXT_PUBLIC_ZOMATO_CLONE_SERVICE;

export const addToCart = async (data: ICartPayload) => {
  try {
    const res = await axios({
      method: "post",
      url: `${baseEndPoint}/cart`,
      data,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resetCart = async () => {
  try {
    const res = await axios({
      method: "post",
      url: `${baseEndPoint}/cart/reset-cart`,
    });
    return res.data;
  } catch (error) {
    console.error(error);
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

export const getCartList = async (
  restaurantId: number
): Promise<{
  data: { [productId: string]: number };
  message: string;
}> => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseEndPoint}/cart/${restaurantId}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export interface ICartPayload {
  productId: number;
  restaurantId: number;
}
