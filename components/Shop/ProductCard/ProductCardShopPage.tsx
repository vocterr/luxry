"use client";

import { Product } from '@/types'
import { addToCart } from '@/utils/addToCart'
import { addToWishlist } from '@/utils/addToWishlist';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiCreditCard, FiHeart, FiShoppingCart, FiTool } from 'react-icons/fi'

export const ProductCardShopPage = ({ product, userRole }: { product: Product, userRole?: "ADMIN" | "USER" | "" }) => {


    return (
        <div
            key={product.id}
            className="relative flex flex-col border border-gray-600 rounded-lg overflow-hidden shadow-lg shadow-gray-900/50"
        >

            <Image
                src={"/images/jewelry1.jpg"}
                alt={"Jewelry"}
                width={2000}
                height={2000}
                className="w-full h-80 object-cover"
            />


            <div className="p-4">
                <h1 className="font-cinzel text-xl text-gray-100 line-clamp-1">
                    {product.name}
                </h1>
                <p className="font-playfair text-gray-400 text-sm mt-2">
                    {product.category}
                </p>

                <p className="font-cinzel text-lg text-gray-100 mt-4">
                    ${product.price.toFixed(2)}
                </p>


                <Link href={`/products/${product.id}`} className="w-full flex items-center justify-center">
                    <button className="submitButton text-center">
                        View Details
                    </button>
                </Link>

                <div className='flex items-center justify-between mt-6 px-10'>
                    <div className=' p-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:scale-[1.03]'>
                        <FiCreditCard className='h-7 w-7 text-green-500' />
                    </div>
                    <div onClick={() => addToCart(product.id)}  className=' p-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:scale-[1.03]'>
                        <FiShoppingCart className='h-7 w-7 text-amber-500' />
                    </div>

                    <div onClick={() => addToWishlist(product.id)} className=' p-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:scale-[1.03]'>
                        <FiHeart className='h-7 w-7 text-red-500' />
                    </div>


                </div>
            </div>
            {userRole === 'ADMIN' && (
                <Link href={`/manage-products/${product.id}`} className='absolute top-2 right-2 z-50 p-2  rounded-full bg-gray-800 hover:bg-gray-800/95 hover:scale-[1.04] transition-all duration-300'>
                    <FiTool className='h-7 w-7' />
                </Link>
            )}
        </div>
    )
}
