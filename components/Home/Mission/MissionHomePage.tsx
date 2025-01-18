import Image from 'next/image'
import React from 'react'

export const MissionHomePage = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse xl:justify-center items-center gap-8 lg:gap-16 2xl:gap-24 px-4 xl:px-16 2xl:px-52 sm:px-8 mt-16 w-full">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-right">
                <h1 className="text-5xl font-cinzel mb-8 ">Our Mission</h1>
                <p className="font-playfair text-gray-300 tracking-wider leading-relaxed">
                    At LUXry, our mission is to create exquisite jewelry that transcends
                    trends and becomes a symbol of timeless elegance. We strive to
                    deliver exceptional craftsmanship, blending creativity with
                    precision to design pieces that resonate with beauty and
                    individuality. By celebrating life's most cherished moments, we aim
                    to inspire confidence and joy in every person who wears our
                    creations.
                </p>
            </div>



            <Image
                src="/images/jewelry2.avif"
                alt="jewelry"
                height={2000}
                width={2000}
                className="h-[500px] sm:h-[600px] sm:w-[400px]  sm:rounded-md object-cover rounded"
            />

        </div>
    )
}
