





export const sendPin = async (email: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-pin`, {
            method: "POST",
            body: JSON.stringify({email}),
            credentials: "include"
        });
        if (res.ok) return true;
        else return false;
    }
    catch(error) {
        console.error(error);
    }
}