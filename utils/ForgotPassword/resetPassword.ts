





export const resetPassword = async (newPassword: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reset-password`, {
            method: "POST",
            body: JSON.stringify({newPassword}),
            credentials: "include"
        });
        if (res.ok) return true;
        else return false;
    }
    catch(error) {
        console.error(error);
    }
}