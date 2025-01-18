import { ShippingInformation } from "@/types";



export const editShippingInformation = async (shippingInformation: ShippingInformation) => {
    try {
        const res = await fetch(`/api/shippingInformation`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({shippingInformation}),
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully edited your informations!" };
        }
        else {
            return { success: false, message: "Editing informations failed! Please try again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}