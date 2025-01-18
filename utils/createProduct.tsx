



export const createProduct = async (formData: FormData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-product`, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (res.ok) {
            return { success: true, message: "You've successfully created a product!" };
        }
        else {
            return { success: false, message: "Creating product failed! Please try again." };
        }
    }
    catch(error) {
        console.error(error);
    }
}