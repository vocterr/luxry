import Image from 'next/image'
import React from 'react'

export const WhoAreWeHomePage = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center xl:justify-center  gap-16 2xl:gap-24 px-4 sm:px-8 xl:px-16 2xl:px-52 mt-16 w-full">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-5xl font-cinzel mb-8">Who Are We?</h1>
                <p className="font-playfair text-gray-300 leading-relaxed tracking-wider">
                    At LUXry, we specialize in crafting timeless jewelry pieces that blend elegance and sophistication. With a passion for perfection and an eye for detail, our mission is to bring you creations that celebrate life's most precious moments. Every piece tells a story, designed to complement your unique style and make you shine.
                </p>
            </div>

            {/* Image Section */}

            <Image
                src="/images/jewelry1.jpg"
                alt="jewelry"
                height={2000}
                width={2000}
                className="h-[500px] sm:h-[600px] sm:w-[400px]  sm:rounded-md object-cover rounded"
            />

        </div>
    )
}
