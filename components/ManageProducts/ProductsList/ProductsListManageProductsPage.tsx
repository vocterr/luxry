"use client";

import { ProductCardShopPage } from '@/components/Shop/ProductCard/ProductCardShopPage';
import { Product } from '@/types'
import React, { useState } from 'react'
import { ManageProductCard } from './ManageProductCard/ManageProductCard';

export const ProductsListManageProductsPage = ({initialProducts}: {initialProducts: Product[]}) => {
   const [products, setProducts] = useState(initialProducts);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-6 sm:gap-12 w-[90%] sm:w-[65%] md:w-[55%] lg:w-[75%] xl:w-[60%] 2xl:w-[75%] 3xl:w-[80%] self-center">
            {products.map((product) => (
                <ManageProductCard product={product}/>
            ))}
        </div>
    )
}
