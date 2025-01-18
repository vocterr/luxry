"use client"

import { Cart, Product } from '@/types'
import { addToCart } from '@/utils/addToCart'
import { deleteCartItem } from '@/utils/deleteCartItem'
import { fetchCartOnClient } from '@/utils/fetchCartOnClient'
import { handleBuyNow } from '@/utils/handleBuyNow'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FiCreditCard, FiShoppingCart } from 'react-icons/fi'
import { CartItemProductPage } from './CartItem/CartItemProductPage'

export const ButtonsMainInfoProduct = ({ product }: { product: Product }) => {
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [cart, setCart] = useState<Cart>();
    const [total, setTotal] = useState<number | null>(null);

    useEffect(() => {
        const fetchCart = async () => {
            const fetchedCart = await fetchCartOnClient();
            setCart(fetchedCart);
            
        }
        fetchCart();
    }, []);

    useEffect(() => {
        if (!cart) return;
        setTotal(cart!.cartItems.reduce((acc, item) => acc + item.product.price, 0));
    }, [cart]);
    return (
        <>
            <div className="flex flex-col space-y-6 mt-6">
                <button onClick={() => handleBuyNow(product.id)} className="flex items-center justify-center space-x-2 shadow-md shadow-gray-700 font-bold border border-white rounded-lg py-2 w-[60%] self-center hover:bg-white hover:text-black transition-all duration-500 hover:scale-[1.04]">
                    <p>Buy Now</p>
                    <FiCreditCard className="h-5 w-5 " />
                </button>
                <button onClick={() => { addToCart(product.id); setIsCartOpened(true) }} className="flex items-center justify-center space-x-2 shadow-md shadow-green-900 font-bold bg-green-600 text-black rounded-lg py-2 w-[60%] self-center hover:bg-green-600/90  transition-all duration-500 hover:scale-[1.04]">
                    <p>Add to Cart</p>
                    <FiShoppingCart className="h-5 w-5" />
                </button>
            </div>

            {isCartOpened && (
                <div className="relative z-[9999]" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">


                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">



                                <div className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button onClick={() => setIsCartOpened(false)} type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                        <span className="absolute -inset-0.5"></span>
                                                        <span className="sr-only">Close panel</span>
                                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cart?.cartItems.map((cartItem) => (
                                                            <CartItemProductPage setTotal={setTotal} cartItem={cartItem} key={cartItem.id}/>
                                                        ))}
                                                        


                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex font-inter justify-between text-base font-medium text-gray-900">
                                                <p className='font-semibold text-gray-800'>Subtotal</p>
                                                <p className='font-semibold'>${total?.toFixed(2)}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <a href="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or
                                                    <button onClick={() => setIsCartOpened(false)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>

    )
}
