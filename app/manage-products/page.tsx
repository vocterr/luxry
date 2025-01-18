import { ProductsListManageProductsPage } from "@/components/ManageProducts/ProductsList/ProductsListManageProductsPage";
import { Product } from "@/types";
import { fetchManageProductsOnServer } from "@/utils/fetchManageProductsOnServer";
import { fetchUserRoleOnServer } from "@/utils/fetchUserRoleOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Manage Products",
  };



export default async function ManageProductsPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const userRole = await fetchUserRoleOnServer(token);
    if (userRole?.role !== "ADMIN") {
        redirect("/");
    }
    const products: Product[] = await fetchManageProductsOnServer(token) || [];
    return (
        <>
            {products.length > 0 ? (
                <div className="flex flex-col mt-24 w-full font-inter">
                    <h1 className="font-cinzel mb-8 text-4xl text-center self-center w-[90%] pb-2 border-b border-gray-500">List Of Products</h1>
                    <ProductsListManageProductsPage initialProducts={products} />
                </div>
            ) : (
                <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg  xl:text-xl text-center pb-6 border-b border-gray-500">You've not added any products yet, add one!</h1>
                    <Image src="/animated/noproducts.svg" alt="noproducts" width={650} height={650} className="h-80"/>
                    <Link href="/create-product" className="bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 rounded-lg shadow-md shadow-gray-800 py-2 text-center w-[70%] xl:w-[80%] font-bold text-lg mt-6 self-center">Add Product</Link>
                </div>
            )}

        </>

    );
}