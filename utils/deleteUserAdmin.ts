


export const deleteUserAdmin = async (userId: string) => {
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deleteUserAdmin/${userId}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        });
        if (res.ok) {
            return {success: true, message: "User deleted successully!"};
        }
        else {
            return {success: false, message: "User deleting failed! Please try again."}
        }
    }
    catch(error) {
        console.error(error);
    }
}