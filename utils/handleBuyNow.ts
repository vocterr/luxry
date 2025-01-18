import { stripePromise } from "@/stripe";



export const handleBuyNow = async (productId: string) => {
    try {
        const res = await fetch(`/api/buy-now`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({productId})
        });
        const data = await res.json();
        console.log(data);

        const stripe = await stripePromise;

        if (stripe) {
            stripe.redirectToCheckout({sessionId: data.id});
        }
    }
    catch (error) {
        window.location.href = "http://localhost:3000/signin";
        console.error("Error during Buy Now:", error);
      }
}