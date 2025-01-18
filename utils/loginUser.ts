



export const loginUser = async (email: string, password: string) => {
    
    try {
        const res = await fetch(`/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email, password}),
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully Logged In!" };
        }
        else {
            return { success: false, message: "Logging In failed. Please try Again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}