import { FormMainInfoManageProduct } from "@/components/ManageProduct/FormMainInfo/FormMainInfoManageProduct";
import { Product } from "@/types";
import { fetchProductOnServer } from "@/utils/fetchProductOnServer";
import { fetchUserRoleOnClient } from "@/utils/fetchUserRoleOnClient";
import { fetchUserRoleOnServer } from "@/utils/fetchUserRoleOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FiEdit } from "react-icons/fi";



export default async function ManageProductPage({ params }: { params: any }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const userRole = await fetchUserRoleOnServer(token);
    if (userRole.role !== "ADMIN") {
        redirect("/");
    }
    const awaitedParams = await params;
    const product: Product = await fetchProductOnServer(awaitedParams.id);

    return (
        <>
            {product ? (
                <div className="flex flex-col mt-20 w-full">
                    <FormMainInfoManageProduct initialProduct={product} />
                    
                </div>
            ) : (
                <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-xl text-center pb-6 border-b border-gray-500">There is an issue with our server, please try again later.</h1>
                    <Image src="/animated/nousers.svg" alt="nousers" width={650} height={650} className="h-80" />
                    <Link href="/shop" className="submitButton text-center">Go To The Main Page</Link>
                </div>
            )}

        </>

    );
}