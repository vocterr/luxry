"use client"

import { Cart, Product } from '@/types'
import { addToCart } from '@/utils/addToCart'
import { deleteCartItem } from '@/utils/deleteCartItem'
import { fetchCartOnClient } from '@/utils/fetchCartOnClient'
import { handleBuyNow } from '@/utils/handleBuyNow'
import Image from 'next/image'
import React, { useEffect, useState, useTransition } from 'react'
import { FiCreditCard, FiShoppingCart } from 'react-icons/fi'
import { CartItemProductPage } from './CartItem/CartItemProductPage'
import { CartProductPage } from './Cart/CartProductPage'
import { PageLoading } from '@/components/PageLoading'

export const ButtonsMainInfoProduct = ({ product }: { product: Product }) => {
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleNavigation = () => {

            setLoading(true);
            handleBuyNow(product.id)

    }
    

    
    return (
        <>
            <div className="flex flex-col space-y-6 mt-6">
                <button onClick={handleNavigation} className="flex items-center justify-center space-x-2 shadow-md shadow-gray-700 font-bold border border-white rounded-lg py-2 w-[60%] self-center hover:bg-white hover:text-black transition-all duration-500 hover:scale-[1.04]">
                    <p>Buy Now</p>
                    <FiCreditCard className="h-5 w-5 " />
                </button>
                <button onClick={() => { addToCart(product.id); setIsCartOpened(true) }} className="flex items-center justify-center space-x-2 shadow-md shadow-green-900 font-bold bg-green-600 text-black rounded-lg py-2 w-[60%] self-center hover:bg-green-600/90  transition-all duration-500 hover:scale-[1.04]">
                    <p>Add to Cart</p>
                    <FiShoppingCart className="h-5 w-5" />
                </button>
            </div>

            {isCartOpened && (
                <CartProductPage setIsCartOpened={setIsCartOpened}/>

            )}

            {loading && <PageLoading/>}
        </>

    )
}
