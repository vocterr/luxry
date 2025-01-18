



export const addToWishlist = async (productId: string) => {
    try {
        const res = await fetch(`/api/wishlistItem`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({productId}),
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully added product to wishlist!" };
        }
        else {
            return { success: false, message: "Adding to wishlist Failed! Please try again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}