



export const updateMainInfo = async (productId: string, name: string, description: string, price: number, stock: number) => {
    try {
        const res = await fetch(`/api/updateMainInfo/${productId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, description, price, stock}),
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully updated product!" };
        }
        else {
            return { success: false, message: "Editing product failed! Please try again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}