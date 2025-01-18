


export const updateRoleAdmin = async (role: string, userId: string) => {
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateRoleAdmin/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({role})
        });
        if (res.ok) {
            return {success: true, message: "Role Updated successully!"};
        }
        else {
            return {success: false, message: "Updating Role failed! Please try again."}
        }
    }
    catch(error) {
        console.error(error);
    }
}