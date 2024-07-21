"use client";
import { resetCart } from "@/api/cart";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

type props = {
  children: any;
};
const CheckoutComponent = ({ children }: props) => {
  const stripeEndPoint = `${process.env.NEXT_PUBLIC_ZOMATO_CLONE_SERVICE}/stripe/create-checkout-session`;
  const makePayment = async function () {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );

    if (!stripe) {
      return;
    }

    try {
      const session = await axios({
        method: "post",
        url: stripeEndPoint,
        headers: { "Content-Type": "application/json" },
      });

      if (!session) throw new Error("Something went wrong");

      await stripe.redirectToCheckout({
        sessionId: session.data.data.id,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return <div onClick={makePayment}>{children}</div>;
};
export default CheckoutComponent;
