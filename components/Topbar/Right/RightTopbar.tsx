"use client";

import { fetchUserRoleOnClient } from '@/utils/fetchUserRoleOnClient';
import { fetchUserRoleOnServer } from '@/utils/fetchUserRoleOnServer';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi'

export const RightTopbar = () => {
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const fetchRole = async () => {
            const role = await fetchUserRoleOnClient();
            setUserRole(role.role);
        }
        fetchRole();
    }, []);
    return (
        <div className='lg:flex items-center space-x-1 hidden '>
            {userRole === "ADMIN" && (
                <Link href="/dashboard" className='text-black font-bold hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.03] py-1 px-4 border bg-white border-white rounded-lg'>
                    Admin
                </Link>
            )}

            <Link href="/wishlist" className='p-2 rounded-full hover:bg-gray-900 hover:scale-[1.04] transition-all duration-300 cursor-pointer'>
                <FiHeart className='h-6 w-6' />
            </Link>

            <Link href="/cart" className='p-2 rounded-full hover:bg-gray-900 hover:scale-[1.04] transition-all duration-300 cursor-pointer'>
                <FiShoppingCart className='h-6 w-6' />
            </Link>

            <Link href="/profile" className='p-2 rounded-full hover:bg-gray-900 hover:scale-[1.04] transition-all duration-300 cursor-pointer'>
                <FiUser className='h-6 w-6' />
            </Link>

        </div>
    )
}
