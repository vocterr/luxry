



export const logoutUser = async () => {
    
    try {
        const res = await fetch(`/api/logout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully Logged Out!" };
        }
        else {
            return { success: false, message: "Logging Out failed. Please try Again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}