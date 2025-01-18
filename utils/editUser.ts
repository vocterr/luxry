



export const editUser = async (name: string, email: string, password: string) => {
    try {
        const res = await fetch(`/api/profile`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, email, password}),
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully updated your account!" };
        }
        else {
            return { success: false, message: "Editing account failed! Please try again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}