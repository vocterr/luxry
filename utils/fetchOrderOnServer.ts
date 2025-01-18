


export const fetchOrderOnServer = async (token: string | undefined, orderId: string) => {
    if (!token) {
        console.log("no token");
        return;
    };
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                Cookie: `token=${token}`
            }
        });
        const data = await res.json();
        return data;
    }
    catch(error) {
        console.error(error);
    }
}