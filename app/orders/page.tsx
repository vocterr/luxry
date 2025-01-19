import { Order } from "@/types";
import { fetchOrdersOnServer } from "@/utils/fetchOrdersOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

import { Metadata } from "next";
import { RedirectButton } from "@/components/RedirectButton";
import { OrderCard } from "@/components/Orders/OrderCard/OrderCard";
export const metadata: Metadata = {
    title: "LUXry // Orders",
};




export default async function OrdersPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const orders: Order[] = await fetchOrdersOnServer(token) || [];
    return (
        <div>
            {orders && orders.length > 0 ? (
                <div className="flex flex-col mt-24 w-full font-cinzel">
                    <div className="grid grid-cols-1 gap-8">
                        <h1 className="font-cinzel text-center text-4xl pb-2 border-b border-gray-500 w-[90%] place-self-center">Orders</h1>
                        {orders.map((order) => (
                            <OrderCard order={order} key={order.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-xl text-center pb-6 border-b border-gray-500">You haven't placed any orders.</h1>
                    <Image src="/animated/noorders.svg" alt="noorders" width={650} height={650} className="h-80" />
                    <RedirectButton href="/shop" text="Find Some Items" />
                </div>
            )}

        </div>

    );
}