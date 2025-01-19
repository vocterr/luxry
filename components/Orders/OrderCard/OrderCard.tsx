"use client";

import { PageLoading } from '@/components/PageLoading';
import { useRedirect } from '@/hooks/useRedirect';
import { Order } from '@/types';
import React from 'react'

export const OrderCard = ({ order }: { order: Order }) => {
    const { pending, redirectUser } = useRedirect();
    return (
        <>
         <div onClick={() => redirectUser(`/orders/${order.id}`)} className="flex text-black flex-col p-3 rounded-lg bg-white shadow-md shadow-gray-800 w-[85%] place-self-center">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h1>ID: <b className="relative bottom-[1px]">{order.id}</b></h1>
                <span className="text-sm text-center font-bold text-blue-600 bg-gray-300/80 rounded-md w-24 mt-1 py-1">{new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex text-sm flex-col space-y-1 mt-4">
                <h1>Total Cost: <b className="font-cinzel">${order.totalAmount}</b></h1>
                <h1>Estimated Delivery: <b className="font-cinzel">3-5 business days</b></h1>
            </div>

            <div onClick={() => redirectUser(`/orders/${order.id}`)} className="text-center text-white font-cinzel font-bold bg-black rounded-md shadow-md shadow-gray-900 py-2 text-sm mt-4 w-[60%] self-center">
                View Details
            </div>
        </div>

        {pending && <PageLoading/>}
        </>
       
    )
}
