import { Order } from "@/types";
import { fetchOrdersOnServer } from "@/utils/fetchOrdersOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
import { RedirectButton } from "@/components/RedirectButton";
export const metadata: Metadata = {
    title: "LUXry // Orders",
  };




export default async function OrdersPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const orders: Order[] = await fetchOrdersOnServer(token) || [];
    return (
        <>
            {orders.length > 0 ? (
                <div className="flex flex-col mt-24 w-full font-cinzel">
                    <div className="grid grid-cols-1 gap-8">
                        <h1 className="font-cinzel text-center text-4xl pb-2 border-b border-gray-500 w-[90%] place-self-center">Orders</h1>
                        {orders.map((order) => (
                            <Link href={`/orders/${order.id}`} className="flex text-black flex-col p-3 rounded-lg bg-white shadow-md shadow-gray-800 w-[85%] place-self-center">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h1>ID: <b className="relative bottom-[1px]">{order.id}</b></h1>
                                    <span className="text-sm text-center font-bold text-blue-600 bg-gray-300/80 rounded-md w-24 mt-1 py-1">{new Date(order.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex text-sm flex-col space-y-1 mt-4">
                                    <h1>Total Cost: <b className="font-cinzel">${order.totalAmount}</b></h1>
                                    <h1>Estimated Delivery: <b className="font-cinzel">3-5 business days</b></h1>
                                </div>

                                <Link href={`/orders/${order.id}`} className="text-center text-white font-cinzel font-bold bg-black rounded-md shadow-md shadow-gray-900 py-2 text-sm mt-4 w-[60%] self-center">
                                    View Details
                                </Link>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-xl text-center pb-6 border-b border-gray-500">You haven't placed any orders.</h1>
                    <Image src="/animated/noorders.svg" alt="noorders" width={650} height={650} className="h-80" />
                    <RedirectButton href="/shop" text="Find Some Items">
                </div>
            )}

        </>

    );
}