import { FormCreateProductPage } from "@/components/CreateProduct/Form/FormCreateProductPage";
import { Gemstone, Material } from "@/types";
import { fetchGemstonesOnServer } from "@/utils/fetchGemstonesOnServer";
import { fetchMaterialsOnServer } from "@/utils/fetchMaterialsOnServer";
import { fetchUserRoleOnServer } from "@/utils/fetchUserRoleOnServer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Create Product",
  };



export default async function CreateProductPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const [materials, gemstones, userRole] = await Promise.all([await fetchMaterialsOnServer(token), await fetchGemstonesOnServer(token), await fetchUserRoleOnServer(token)]);

    if (userRole?.role !== "ADMIN") {
        redirect("/");
    }
    return (
        <div className="mt-24 md:px-12 lg:px-36 xl:px-72 2xl:px-[470px] 3xl:px-[550px] flex flex-col w-full">
            <div className=" mb-24 flex flex-col p-4 md:px-6 rounded-md sm:border border-gray-600 sm:shadow-md shadow-gray-800 w-[95%] sm:w-[85%] self-center">
                <h1 className="font-cinzel mb-8 text-3xl text-center self-center w-full pb-2 border-b border-gray-500">Create Product</h1>
                <FormCreateProductPage  materials={materials} gemstones={gemstones}/>
            </div>

        </div>
    );
}