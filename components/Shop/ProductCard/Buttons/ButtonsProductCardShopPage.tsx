import { PageLoading } from '@/components/PageLoading';
import { RedirectToSignIn } from '@/components/RedirectToSignIn';
import { Spinner } from '@/components/Spinner';
import { Product } from '@/types';
import { addToCart } from '@/utils/addToCart';
import { addToWishlist } from '@/utils/addToWishlist';
import { deleteCartItem } from '@/utils/deleteCartItem';
import { deleteItem } from '@/utils/deleteItem';
import { deleteWishlistItem } from '@/utils/deleteWishlistItem';
import { handleBuyNow } from '@/utils/handleBuyNow';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BsCartPlus, BsFillHeartFill } from 'react-icons/bs';
import { FiCreditCard, FiHeart, FiShoppingCart } from 'react-icons/fi';

export const ButtonsProductCardShopPage = ({ product }: { product: Product }) => {
    const [buyLoading, setBuyLoading] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const [inWishlist, setInWishlist] = useState(false);
    const [inCart, setInCart] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const redirectSignIn = () => {
        setError(true);
        setTimeout(() => {
            router.push('/signin');
        }, 1500);
        
    }


    const handleBuy = async () => {
        setLoading(true);
        setBuyLoading(true);
        await handleBuyNow(product.id);
        setBuyLoading(false);
    }

    const handleAddToCart = async () => {
        setCartLoading(true);
        const result = await addToCart(product.id);
        if (!result?.success) redirectSignIn();
        setCartLoading(false);
        setInCart(true);
    }

    const handleCartRemove = async () => {
        setCartLoading(true);
        const result = await deleteItem(product.id);
        if (!result?.success) redirectSignIn();
        setCartLoading(false);
        setInCart(false);
    }

    const handleWishlistAdd = async () => {
        setWishlistLoading(true);
        const result  = await addToWishlist(product.id);
        if (!result?.success) redirectSignIn();
        setWishlistLoading(false);
        setInWishlist(true);
    }

    const handleWishlistRemove = async () => {
        setWishlistLoading(true);
        const result =  await deleteWishlistItem(product.id);
        if (!result?.success) redirectSignIn
        setWishlistLoading(false);
        setInWishlist(false);
    }

    

    return (
        <>
        
        
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
                <Spinner />
            ) : (
                <AnimatePresence mode="wait">
                    {inWishlist ? (
                        <motion.div
                            key="inWishlist"
                            onClick={handleWishlistRemove}
                            className="p-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:scale-[1.03]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <BsFillHeartFill className="h-7 w-7 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="notInWishlist"
                            onClick={handleWishlistAdd}
                            className="p-2 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:scale-[1.03]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FiHeart className="h-7 w-7 text-red-500" />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}





        </div>
        {error && <RedirectToSignIn/>}
        {loading && <PageLoading/>}
        </>
    )
}
