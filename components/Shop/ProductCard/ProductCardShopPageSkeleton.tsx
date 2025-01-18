import React from 'react'

export const ProductCardShopPageSkeleton = () => {
    return (
        <div
            className="relative flex flex-col border  border-gray-600  rounded-lg overflow-hidden shadow-lg shadow-gray-900/50"
        >

            <div className='bg-gray-800 h-80 w-full animate-pulse '></div>


            <div className="p-4 flex flex-col">
                <h1 className="font-cinzel rounded-md animate-pulse w-[90%] h-8 bg-gray-800 text-xl text-gray-100 line-clamp-1">

                </h1>
                <p className="font-playfair rounded-md animate-pulse w-[30%] h-6 bg-gray-800 text-gray-400 text-sm mt-2">

                </p>

                <p className="font-cinzel rounded-md animate-pulse w-[40%] h-7 bg-gray-800 text-lg text-gray-100 mt-4">

                </p>


                <div className='self-center rounded-md animate-pulse w-[60%] h-10 bg-gray-800 mt-6 '></div>

                <div className='flex items-center justify-between mt-6 px-10'>

                    <div className='rounded-lg animate-pulse bg-gray-800 h-12 w-12'></div>
                    <div className='rounded-lg animate-pulse bg-gray-800 h-12 w-12'></div>
                    <div className='rounded-lg animate-pulse bg-gray-800 h-12 w-12'></div>



                </div>
            </div>

        </div>
    )
}
