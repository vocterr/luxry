import { CartItem } from '@/types'
import { deleteCartItem } from '@/utils/deleteCartItem';
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'

export const CartItemProductPage = ({cartItem, setTotal}: {cartItem: CartItem, setTotal: Dispatch<SetStateAction<number | null>>}) => {
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async () => {
        deleteCartItem(cartItem.id);
        setDeleted(true)
        setTotal((prev) => prev! - cartItem.product.price);
    }
    return (
        <li className={`flex py-6 ${deleted ? "hidden" : ""}`}>
            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image width={2000} height={2000} src={`/images/${cartItem.product.image.url}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="size-full object-cover" />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">{cartItem.product.name}</a>
                        </h3>
                        <p className="ml-4">${cartItem.product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{cartItem.product.category}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {cartItem.quantity}</p>

                    <div className="flex">
                        <button onClick={() => handleDelete()} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                </div>
            </div>
        </li>
    )
}
