


export const fetchCartOnClient = async () => {
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        });
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}