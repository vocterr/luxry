import { CartItem } from '@/types'
import { deleteCartItem } from '@/utils/deleteCartItem';
import { quantityMinus } from '@/utils/quantityMinus';
import { quantityPlus } from '@/utils/quantityPlus';
import Image from 'next/image'
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FiTrash } from 'react-icons/fi';

export const CartItemCartPage = ({item, setTotal}: {item: CartItem, setTotal: Dispatch<SetStateAction<number>>}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [deleted, setDeleted] = useState(false);

    const plus = () => {
        quantityPlus(item.id)
        setQuantity((prev) => prev + 1);
        setTotal((prev) => prev + item.product.price);
    }

    const minus = () => {
        if (quantity > 1) {
            quantityMinus(item.id)
            setQuantity((prev) => prev - 1);
            setTotal((prev) => prev - item.product.price);
        }
    }

    const handleDelete = async () => {
        const result = await deleteCartItem(item.id);
        if (result?.success) {
            setDeleted(true)
            setTotal((prev) => prev - item.product.price);
        }
    }
    return (
        <div className={`flex relative items-center justify-between p-6 md:w-[80%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] 3xl:w-[40%] md:self-center border-b border-gray-800 ${deleted ? "hidden" : ""}`}>
            <Link href={`/products/${item.productId}`} className='flex items-center w-[45%] space-x-2'>
                <Image src={`/images/${item.product.image.url}`} alt='jewelry' width={2000} height={2000} className='h-12 w-12 rounded-md' />
                <h1 className=' font-inter line-clamp-2 max-w-40'>{item.product.name}</h1>
            </Link>
            <div className='flex items-center w-[55%] justify-between'>
                <div className='flex items-center space-x-4'>
                    <button onClick={plus} className='flex items-center justify-center h-5 w-5 rounded-md bg-gray-900 hover:bg-gray-800/90'>+</button>
                    <h1>{quantity}</h1>
                    <button onClick={minus} className='flex items-center justify-center h-5 w-5 rounded-md bg-gray-900 hover:bg-gray-800/90 relative'>
                        <p className='relative bottom-[1px]'>-</p>
                    </button>
                </div>

                <h1 className='font-inter font-semibold'>${item.product.price}</h1>

                <FiTrash onClick={() => handleDelete()} className='absolute sm:static bottom-2 right-12 text-red-500 cursor-pointer hover:text-red-600 h-5 w-5'/>
            </div>
        </div>
    )
}
