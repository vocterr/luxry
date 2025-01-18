



export const addToCart = async (productId: string) => {
    try {
        const res = await fetch(`/api/cartItem`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({productId}),
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully added product to cart!" };
        }
        else {
            return { success: false, message: "Adding to Cart Failed! Please try again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}