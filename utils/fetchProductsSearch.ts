


export const fetchProductsSearch = async (search: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/searchProducts?search=${search}`, {
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