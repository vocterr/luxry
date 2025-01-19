import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ManageProductCard = ({product}: {product: Product}) => {
    return (
        <div
            key={product.id}
            className="flex flex-col border border-gray-600 rounded-lg overflow-hidden shadow-lg shadow-gray-900/50"
        >

            <Image
                src={`/images/${product.image.url}`}
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


                <Link href={`/manage-products/${product.id}`} className="w-full flex items-center justify-center">
                    <button className="w-full submitButton self-center">
                        Manage
                    </button>
                </Link>
            </div>
        </div>
    )
}
