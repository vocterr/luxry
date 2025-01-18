


export const fetchCarouselProductsOnServer = async (name: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carousel?collectionName=${name}`, {
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