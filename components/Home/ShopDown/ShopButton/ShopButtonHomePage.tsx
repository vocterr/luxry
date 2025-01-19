"use client"

import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'

export const ShopButtonHomePage = () => {
    const [pending, startTransition] = useTransition();
        const router = useRouter();
    
        const handleNavigation = () => {
            startTransition(() => {
                router.push("/shop")
            })
        }
  return (
    <button onClick={handleNavigation} className="px-8 py-3 bg-white text-black font-bold font-cinzel uppercase rounded-md hover:bg-gray-700 hover:text-white transition duration-300">
    Visit Our Shop
</button>
  )
}
