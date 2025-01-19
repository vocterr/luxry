"use client";

import { Cart } from '@/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CartItemCartPage } from './CartItem/CartItemCartPage';
import Link from 'next/link';
import { useRedirect } from '@/hooks/useRedirect';
import { PageLoading } from '../PageLoading';

export const CartPageOnClient = ({ initialCart }: { initialCart: Cart }) => {
    const [cart, setCart] = useState(initialCart);
    const [total, setTotal] = useState(0);
    const {pending, redirectUser} = useRedirect();

    useEffect(() => {
        setTotal(cart.cartItems.reduce((acc, item) => acc + item.product.price, 0));
    }, []);

    

    return (
        <>
        <div className='flex flex-col mt-24 w-full'>
            <div className='flex scrollbar-none flex-col max-h-[350px] sm:max-h-[450px] lg:max-h-[520px] overflow-y-auto p-4  '>
                {cart.cartItems.map((item) => (
                    <CartItemCartPage key={item.id} item={item} setTotal={setTotal}/>
                ))}
            </div>

            <div className='border-b  md:w-[80%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] 3xl:w-[40%] md:self-center border-gray-700 w-[90%] self-center flex flex-col p-4 '>
                <h1 className='font-bold text-xl font-inter mb-8'>Order Summary</h1>
                <div className='grid grid-cols-2 gap-y-3  font-inter text-gray-400'>
                    <h1>Original Price</h1>
                    <p className='text-white font-bold justify-self-end'>${total.toFixed(2)}</p>
                    <h1>Tax</h1>
                    <p className='text-white font-bold justify-self-end'>${(total * 0.23).toFixed(2)}</p>
                </div>
            </div>

            <div className='flex md:w-[80%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] 3xl:w-[40%] md:self-center px-4 font-bold font-inter w-[90%] self-center mt-3 items-center justify-between'>
                <h1>Total</h1>
                <p>${(total + total * 0.23).toFixed(2)}</p>
            </div>

            <div  className='flex flex-col w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] 3xl:w-[40%] md:self-center self-center mt-6'>
                <button onClick={() => redirectUser("/shop")} className='bg-gray-800/85 hover:bg-gray-800/75 hover:scale-[1.03] transition-all duration-300 border border-gray-500 text-center rounded-lg text-gray-400 font-inter py-2 w-full'>
                    Continue Shopping
                </button>

                <button onClick={() => redirectUser("/checkout")} className='bg-indigo-600/90 hover:bg-indigo-600/80 hover:scale-[1.03] transition-all duration-300 mt-4 text-center rounded-lg text-white font-bold  font-inter py-2 w-full'>
                    Proceed to Checkout
                </button>
            </div>

        </div>
                {pending && <PageLoading/>}
        </>
        );

}
