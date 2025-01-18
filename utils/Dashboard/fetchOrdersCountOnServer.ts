


export const fetchOrdersCountOnServer = async (token: string | undefined) => {
    if (!token) {
        console.log("no token");
        return;
    };
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ordersCount`, {
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