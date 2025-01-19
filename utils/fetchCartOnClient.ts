
export const fetchCartOnClient = async () => {
    
    try {
        const res = await fetch(`/api/cart`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        });
        if (res.status === 401) {
            return null;
        }
        const data = await res.json();
        return data;
    }
    catch(error) {
        console.error(error);
    }
}