import { Stripe } from "@stripe/stripe-js";
import { stripePromise } from "@/stripe";

export const handleCheckout = async (  cartId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartId
        }),
        credentials: "include"
      });

      const { id: sessionId } = await response.json();

      const stripe = await stripePromise;
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
        
      }
    } catch (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };