"use client";

import { PageLoading } from '@/components/PageLoading';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'

export const ExplortButton = () => {
    const [pending, startTransition] = useTransition();
    const router = useRouter();

    const handleNavigation = () => {
        startTransition(() => {
            router.push("/shop")
        })
    }
    return (
        <>
            <button onClick={handleNavigation} className="relative top-8 px-6 py-3 border border-white text-white uppercase tracking-widest rounded-md hover:bg-white hover:text-black transition duration-[500ms]">
                Explore Collection
            </button>
            {pending && <PageLoading/>}
        </>

    )
}
