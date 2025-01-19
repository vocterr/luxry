import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";



export const redirectUser = (router: AppRouterInstance,  href: string) => {
    router.push(href);
}