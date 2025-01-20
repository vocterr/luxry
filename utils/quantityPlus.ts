
export const quantityPlus = async (cartItemId: string) => {
    try {
        const res = await fetch(`/api/quantityplus/${cartItemId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully updated quantity" };
        }
        else {
            return { success: false, message: "Editing quantity failed! Please try again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}