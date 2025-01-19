"use client";
import { ButtonsProductCardShopPage } from '@/components/Shop/ProductCard/Buttons/ButtonsProductCardShopPage';
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import {FiTool } from 'react-icons/fi'
import { ButtonsWishlistItem } from './Buttons/ButtonsWishlistItem';
import { useRedirect } from '@/hooks/useRedirect';
import { PageLoading } from '@/components/PageLoading';


export const WishlistItemWishlistPage = ({ product, userRole }: { product: Product, userRole?: "ADMIN" | "USER" | "" }) => {
    const [deleted, setDeleted] = useState(false);
    const {redirectUser, pending} = useRedirect();
    return (
        <>
        <div
            key={product.id}
            className={`relative flex flex-col border border-gray-600 rounded-lg overflow-hidden shadow-lg shadow-gray-900/50 ${deleted ? "hidden" : ""}`}
        >

            <Image
                src={`/images/${product.image?.url}` || "/animated/nousers.svg"}
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


                <button onClick={() => redirectUser(`/products/${product.id}`)} className="w-full flex items-center justify-center">
                    <button className="submitButton text-center">
                        View Details
                    </button>
                </button>
                <ButtonsWishlistItem setDeleted={setDeleted} product={product}/>
                
            </div>
            {
                userRole === 'ADMIN' && (
                    <Link href={`/manage-products/${product.id}`} className='absolute top-2 right-2 z-50 p-2  rounded-full bg-gray-800 hover:bg-gray-800/95 hover:scale-[1.04] transition-all duration-300'>
                        <FiTool className='h-7 w-7' />
                    </Link>
                )
            }
        </div >
        {pending && <PageLoading/>}
        </>
        
    )
}
