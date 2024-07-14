"use client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
type props = {
  priceId: string;
  children: any;
};
const CheckoutComponent = ({ priceId, children }: props) => {
  const makePayment = async function () {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );

    if (!stripe) {
      return;
    }

    try {
      const response = await axios.post("/api/stripe/checkout", {
        priceId: priceId,
      });
      const data = response.data;
      if (!data.ok) throw new Error("Something went wrong");
      await stripe.redirectToCheckout({
        sessionId: data.result.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return <div onClick={makePayment}>{children}</div>;
};
export default CheckoutComponent;
