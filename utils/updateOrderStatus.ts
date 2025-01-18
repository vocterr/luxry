import { OrderStatus } from "@/types";



export const updateOrderStatus = async (orderId: string, orderStatus: OrderStatus) => {
    
    try {
        const res = await fetch(`/api/updateOrderStatus/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({orderStatus})

        });
        if (res.ok) {
            return {success: true, message: "You've successfully updated the order status!"};
        }
        else {
            return {success: false, message: "Updating Status Failed! Please try again."};
        }
    }
    catch(error) {
        console.error(error);
    }
}