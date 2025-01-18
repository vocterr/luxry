





export const validatePin = async (email: string, pin: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/validate-pin`, {
            method: "POST",
            body: JSON.stringify({email, pin}),
            credentials: "include"
        });
        if (res.ok) return true;
        else return false;
    }
    catch(error) {
        console.error(error);
    }
}