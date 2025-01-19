"use client";
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useTransition } from 'react'

import { FiTool } from 'react-icons/fi'
import { ButtonsProductCardShopPage } from './Buttons/ButtonsProductCardShopPage';
import { useRouter } from 'next/navigation';
import { PageLoading } from '@/components/PageLoading';

export const ProductCardShopPage = ({ product, userRole }: { product: Product, userRole?: "ADMIN" | "USER" | "" }) => {
    const [pending, startTransition] = useTransition();
    const router = useRouter();

    const handleNavigation = () => {
        startTransition(() => {
            router.push(`/products/${product.id}`);
        })
    }

    return (
        <>
            <div
                key={product.id}
                className="relative flex flex-col border border-gray-600 rounded-lg overflow-hidden shadow-lg shadow-gray-900/50"
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


                    <div onClick={handleNavigation} className="w-full flex items-center justify-center">
                        <button className="submitButton text-center">
                            View Details
                        </button>
                    </div>
                    <ButtonsProductCardShopPage product={product} />

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
