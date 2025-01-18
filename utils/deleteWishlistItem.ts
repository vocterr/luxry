


export const deleteWishlistItem = async (productId: string) => {
    
    try {
        const res = await fetch(`/api/wishlistItem/${productId}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        });
        if (res.ok) {
            return {success: true, message: "Item deleted successully!"};
        }
        else {
            return {success: false, message: "Item deleting failed! Please try again."}
        }
    }
    catch(error) {
        console.error(error);
    }
}