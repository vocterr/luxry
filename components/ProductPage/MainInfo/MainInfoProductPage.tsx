import { Product } from '@/types'
import { calculateStars } from '@/utils/calculateStars'
import Image from 'next/image'
import React from 'react'
import { ButtonsMainInfoProduct } from './Buttons/ButtonsMainInfoProduct'

export const MainInfoProductPage = ({ product }: { product: Product }) => {
    return (
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-36 3xl:gap-48">
            <Image src={`/images/${product.image.url}`} alt="jewelry" width={2000} height={2000} className="h-[450px] w-full rounded" />
            <div className="flex flex-col px-4 pt-4 font-playfair">
                <h1 className="text-2xl font-cinzel">{product.name}</h1>
                <p className="text-xl  mt-4"><b className="relative top-[3px] mr-[2px]">$</b>{product.price.toFixed(2)}</p>
                <div className="flex items-center mt-4 justify-between w-[85%] self-center">
                    <p className="text-gray-400">{product.category}</p>
                    <div className="flex items-center space-x-1 text-yellow-500">{calculateStars(product.rating)}</div>
                </div>
                <p className="text-center tracking-wider mt-4 text-gray-400"><b className="text-gray-300 relative bottom-[1px]">{product.stock}</b> currently in stock</p>
                <ButtonsMainInfoProduct product={product}/>
            </div>
        </div>
    )
}
