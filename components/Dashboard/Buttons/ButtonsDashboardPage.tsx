"use client"

import { PageLoading } from '@/components/PageLoading';
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { AiOutlineProduct } from 'react-icons/ai';
import { FiBox, FiUsers } from 'react-icons/fi';

export const ButtonsDashboardPage = () => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const handleNavigation = (href: string) => {
        startTransition(() => {
            router.push(href);
        })
    }
    return (
        <>
            <div className="grid grid-cols-1 gap-4 mt-12 w-[70%] self-center">
                <button onClick={() => handleNavigation("/manage-products")} className="flex items-center bg-amber-500 hover:bg-amber-500/90 hover:scale-[1.03] transition-all duration-300 rounded-lg py-2 shadow-md shadow-gray-800 text-black font-bold text-lg justify-center space-x-2" >
                    <AiOutlineProduct className="h-6 w-6" />
                    <h1>Manage Products</h1>
                </button>
                <button onClick={() => handleNavigation("/manage-orders")} className="flex items-center bg-green-500 hover:bg-green-500/90 hover:scale-[1.03] transition-all duration-300 rounded-lg py-2 shadow-md shadow-gray-800 text-black font-bold text-lg justify-center space-x-2" >
                    <FiBox className="h-6 w-6" />
                    <h1>Manage Orders</h1>
                </button>
                <button onClick={() => handleNavigation("/manage-users")} className="flex items-center bg-blue-500 hover:bg-blue-500/90 hover:scale-[1.03] transition-all duration-300 rounded-lg py-2 shadow-md shadow-gray-800 text-black font-bold text-lg justify-center space-x-2" >
                    <FiUsers className="h-6 w-6" />
                    <h1>Manage Users</h1>
                </button>
            </div>
            {pending && <PageLoading/>}
        </>

    )
}
