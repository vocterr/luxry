import { useRouter } from "next/navigation"
import { useTransition } from "react";


export const useRedirect = () => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const redirectUser = (href: string) => {
        startTransition(() => {
            router.push(href);
        })
    }

    return {redirectUser, pending};
}