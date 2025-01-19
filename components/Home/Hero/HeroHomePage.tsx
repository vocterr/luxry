import Link from 'next/link'
import React from 'react'

export const HeroHomePage = () => {
    return (
        <div
            className="relative h-screen flex w-full items-center bg-cover justify-center"
            style={{ backgroundImage: `url('/images/herobackground.jpg')` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 text-white text-center">
                <h1 className="text-5xl font-playfair mb-4">
                    Welcome to <b className="font-cinzel leading-5">LUXry</b>
                </h1>
                <p className="text-xl font-cinzel">
                    Discover exquisite jewelry pieces crafted for elegance.
                </p>
                
            </div>
        </div>
    )
}
