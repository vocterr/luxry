



export const registerUser = async (name: string, email: string, password: string, repeatPassword: string, termsAgree: boolean) => {
    if (password !== repeatPassword) {
        return {success: false, message: "Your passwords doesnt match."};
    }
    if (!termsAgree) {
        return {success: false, message: "You have to agree to our Terms of Service."};
    }
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, email, password}),
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully registered!" };
        }
        else {
            return { success: false, message: "Registering failed. Please try Again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}