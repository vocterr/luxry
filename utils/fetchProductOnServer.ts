


export const fetchProductOnServer = async (productId: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
            }
        });
        const data = await res.json();
        return data;
    }
    catch(error) {
        console.error(error);
    }
}