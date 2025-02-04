import { PageLoading } from '@/components/PageLoading';
import { Spinner } from '@/components/Spinner';
import { Product } from '@/types';
import { addToCart } from '@/utils/addToCart';
import { addToWishlist } from '@/utils/addToWishlist';
import { deleteCartItem } from '@/utils/deleteCartItem';
import { deleteItem } from '@/utils/deleteItem';
import { deleteWishlistItem } from '@/utils/deleteWishlistItem';
import { handleBuyNow } from '@/utils/handleBuyNow';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { BsCartPlus, BsFillHeartFill } from 'react-icons/bs';
import { FiCreditCard, FiHeart, FiShoppingCart } from 'react-icons/fi';

export const ButtonsWishlistItem = ({ product, setDeleted }: { product: Product, setDeleted: Dispatch<SetStateAction<boolean>> }) => {
    const [buyLoading, setBuyLoading] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const [inCart, setInCart] = useState(false);
    const [loading, setLoading] = useState(false);
    


    const handleBuy = async () => {
        setLoading(true);
        setBuyLoading(true);
        await handleBuyNow(product.id);
        setBuyLoading(false);
    }

    const handleAddToCart = async () => {
        setCartLoading(true);
        await addToCart(product.id);
        setCartLoading(false);
        setInCart(true);
    }

    const handleCartRemove = async () => {
        setCartLoading(true);
        await deleteItem(product.id);
        setCartLoading(false);
        setInCart(false);
    }



    const handleWishlistRemove = async () => {
        setWishlistLoading(true);
        await deleteWishlistItem(product.id);
        setWishlistLoading(false);
        setDeleted(true);
    }

    return (
        <div className='flex items-center justify-between mt-6 px-10'>
            {buyLoading ? (
                <Spinner />
            ) : (
                <div onClick={handleBuy} className=' p-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:scale-[1.03]'>
                    <FiCreditCard className='h-7 w-7 text-green-500' />
                </div>
            )}

            {cartLoading ? (
                <Spinner />
            ) : (

                <AnimatePresence mode="wait">
                    {inCart ? (
                        <motion.div
                            key="notCartLoading"
                            onClick={handleCartRemove}
                            className="p-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:scale-[1.03]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FiShoppingCart className="h-7 w-7 text-amber-500" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="cartLoading"
                            onClick={handleAddToCart}
                            className="p-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:scale-[1.03]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <BsCartPlus className='h-7 w-7 text-amber-500'/>
                        </motion.div>
                    )}






                </AnimatePresence>
            )}
            
            {wishlistLoading ? (
                <Spinner/>
            ) : (
                <div onClick={handleWishlistRemove} className='p-2 rounded-full cursor-pointer'>
                <BsFillHeartFill className='text-white h-7 w-7'/>
            </div>
            ) }
            {loading && <PageLoading/>}




        </div>
    )
}
