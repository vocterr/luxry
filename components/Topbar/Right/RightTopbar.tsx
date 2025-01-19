"use client";

import { PageLoading } from '@/components/PageLoading';
import { fetchUserRoleOnClient } from '@/utils/fetchUserRoleOnClient';
import { fetchUserRoleOnServer } from '@/utils/fetchUserRoleOnServer';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useTransition } from 'react'
import { FiHeart, FiShoppingCart, FiTruck, FiUser } from 'react-icons/fi'

export const RightTopbar = () => {
    const [userRole, setUserRole] = useState("");
    const [pending, startTransition] = useTransition();
    const router = useRouter();

    useEffect(() => {
        const fetchRole = async () => {
            const role = await fetchUserRoleOnClient();
            setUserRole(role.role);
        }
        fetchRole();
    }, []);

    const handleNavigation = (href: string) => {
        startTransition(() => {
          router.push(href);
        });
      };
    return (
        <div className='lg:flex items-center space-x-1 hidden '>
            {userRole === "ADMIN" && (
                <button onClick={() => handleNavigation("/dashboard")}  className='text-black font-bold hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.03] py-1 px-4 border bg-white border-white rounded-lg'>
                    Admin
                </button>
            )}

            <button onClick={() => handleNavigation("/wishlist")}   className='p-2 rounded-full hover:bg-gray-900 hover:scale-[1.04] transition-all duration-300 cursor-pointer'>
                <FiHeart className='h-6 w-6' />
            </button>

            <button onClick={() => handleNavigation("/cart")}   className='p-2 rounded-full hover:bg-gray-900 hover:scale-[1.04] transition-all duration-300 cursor-pointer'>
                <FiShoppingCart className='h-6 w-6' />
            </button>

            <button onClick={() => handleNavigation("/orders")}   className='p-2 rounded-full hover:bg-gray-900 hover:scale-[1.04] transition-all duration-300 cursor-pointer'>
                <FiTruck className='h-6 w-6' />
            </button>

            <button onClick={() => handleNavigation("/profile")}   className='p-2 rounded-full hover:bg-gray-900 hover:scale-[1.04] transition-all duration-300 cursor-pointer'>
                <FiUser className='h-6 w-6' />
            </button>

            {pending && (
                <PageLoading/>
            )}

        </div>
    )
}
