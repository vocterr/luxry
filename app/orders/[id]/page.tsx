import { Order } from "@/types";
import { fetchOrderOnServer } from "@/utils/fetchOrderOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
import { RedirectButton } from "@/components/RedirectButton";
export const metadata: Metadata = {
    title: "LUXry // Order",
  };



export default async function OrderPage({ params }: { params: any }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const awaitedParams = await params;
    const order: Order = await fetchOrderOnServer(token, awaitedParams.id);
    return (
        <>
            {order ? (
                <div className="flex flex-col w-full mt-24 text-gray-400">
                    <h1 className="pb-2 border-b text-white border-gray-500 text-center w-[90%] self-center text-4xl font-cinzel mb-8">Order Details</h1>
                    <div className="flex flex-col space-y-2 w-[85%] self-center">
                        <div className="flex items-center justify-between border-b pb-2 border-gray-700">
                            <h1>Order ID</h1>
                            <p className="text-white">{order.id}</p>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2 border-gray-700">
                            <h1>Order Status</h1>
                            <p className="text-white">{`${order.orderStatus[0].toUpperCase()}${order.orderStatus.substring(1).toLowerCase()}`}</p>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2 border-gray-700">
                            <h1>Payment Status</h1>
                            <p className="text-white">{`${order.paymentStatus[0].toUpperCase()}${order.paymentStatus.substring(1).toLowerCase()}`}</p>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2 border-gray-700">
                            <h1>First Name</h1>
                            <p className="text-white">{order.shippingInformation.firstName}</p>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2 border-gray-700">
                            <h1>Last Name</h1>
                            <p className="text-white">{order.shippingInformation.lastName}</p>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2 border-gray-700">
                            <h1>City</h1>
                            <p className="text-white">{order.shippingInformation.city}</p>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2 border-gray-700">
                            <h1>Phone Number</h1>
                            <p className="text-white font-cinzel">{order.shippingInformation.phoneNumber}</p>
                        </div>

                    </div>

                    <div className="mt-8 flex flex-col space-y-3 w-[85%] self-center">
                        <h1 className="text-lg font-cinzel pb-2 border-b border-gray-700">Ordered Items</h1>
                        {order.orderItems.map((item) => (
                            <div key={item.id} className="flex rounded-md h-24 w-full bg-gradient-to-r from-gray-400 via-gray-300 to-white">
                                <Image src="/images/jewelry1.jpg" alt="jewelry" width={2000} height={2000} className="h-full rounded-l-sm w-24" />
                                <div className="flex flex-col p-2 text-black">
                                    <div className="flex items-start justify-between">
                                        <h1 className="line-clamp-1 font-cinzel leading-tight max-w-32">{item.product.name}</h1>
                                        <p className="font-cinzel font-bold">${item.product.price}</p>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-gray-700 pb-1">
                                        <h1>Quantity</h1>
                                        <p>|</p>
                                        <h1>Total Cost</h1>
                                    </div>
                                    <div className="flex items-center justify-between w-[75%] self-center">
                                        <h1 className="font-cinzel font-bold">{item.quantity}</h1>
                                        <h1 className="max-w-32 font-bold line-clamp-1 font-cinzel">${item.quantity * item.product.price}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8 space-x-4 mb-8">
                        {order.orderStatus === "DELIVERED" && (
                            <button className="bg-green-500 text-white px-6 py-2 rounded shadow">Confirm Delivery</button>
                        )}
                        <button className="bg-white font-bold shadow-gray-900 text-black px-6 py-2 rounded shadow-md">Contact Support</button>
                    </div>
                </div>
            ) : (
                <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-xl text-center pb-6 border-b border-gray-500">There is an error with our server, please try again later.</h1>
                    <Image src="/animated/nousers.svg" alt="noorder" width={650} height={650} className="h-80" />
                    <RedirectButton href="/shop" text="Find Some Products"/>
                </div>
            )}
        </>

    );
}