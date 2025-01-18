import { ManageOrderCard } from "@/components/ManageOrders/ManageOrderCard/ManageOrderCard";
import { Order } from "@/types";
import { fetchManageOrdersOnServer } from "@/utils/fetchManageOrdersOnServer";
import { fetchUserRoleOnServer } from "@/utils/fetchUserRoleOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Manage Orders",
  };



export default async function ManageOrdersPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const userRole = await fetchUserRoleOnServer(token);
    if (userRole?.role !== "ADMIN") {
        redirect("/");
    }
    const orders: Order[] = await fetchManageOrdersOnServer(token) || [];
    return (
        <>
            {orders.length > 0 ? (
                <div className="flex flex-col mt-24  md:px-16 lg:px-32 xl:px-56 2xl:px-72 3xl:px-96 w-full">
                    <h1 className="font-cinzel mb-8 text-4xl text-center self-center w-[90%] pb-2 border-b border-gray-500">List Of Orders</h1>
                    <div className="flex flex-col space-y-4 text-black w-[90%] self-center">
                        {orders.map((order) => (
                            <ManageOrderCard key={order.id} order={order} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-xl text-center pb-6 border-b border-gray-500">There are currently not any orders available</h1>
                    <Image src="/animated/noorders.svg" alt="noorders" width={650} height={650} className="h-80"/>
                    <Link href="/" className="submitButton text-center">Go To The Main Page</Link>
                </div>
            )}

        </>

    );
}