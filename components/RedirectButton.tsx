"use client"

import { useRedirect } from '@/hooks/useRedirect'
import React from 'react'
import { PageLoading } from './PageLoading';

export const RedirectButton = ({href, text}: {href: string, text: string}) => {
    const {pending, redirectUser} = useRedirect();
    return (
        <>
        <button onClick={() => redirectUser(href)}  className="bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 rounded-lg shadow-md shadow-gray-800 py-2 text-center w-[70%] xl:w-[55%] font-bold text-lg mt-6 self-center">
            {text}
        </button>
        {pending && <PageLoading/>}
        </>
        
    )
}
