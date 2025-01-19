import Link from 'next/link'
import React from 'react'
import { ShopButtonHomePage } from './ShopButton/ShopButtonHomePage'

export const ShopDownHomePage = () => {
    
    return (
        <div className="flex flex-col  px-4 items-center justify-center w-full bg-gray-900 text-white py-16">
            <h2 className="text-4xl font-cinzel mb-6 text-center">Ready to Find Your Perfect Piece?</h2>
            <p className="text-lg text-gray-200/80 text-center font-playfair mb-8 px-4 sm:px-8 max-w-2xl">
                Explore our collection of timeless, handcrafted jewelry that adds elegance to every moment.
                Discover your perfect match today.
            </p>
            <ShopButtonHomePage/>
        </div>
    )
}
