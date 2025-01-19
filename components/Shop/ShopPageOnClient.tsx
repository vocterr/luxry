"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useProducts } from "@/context/ProductContext";
import { Product } from "@/types";
import React, { Suspense, useEffect, useState } from "react";
import { CarouselShopPage } from "./Carousel/CarouselShopPage";
import { ProductCardShopPage } from "./ProductCard/ProductCardShopPage";
import { ProductCardShopPageSkeleton } from "./ProductCard/ProductCardShopPageSkeleton";
import { SortShopPage } from "./Sort/SortShopPage";

export const ShopPageOnClient = ({
    carouselProducts,
    initialProducts,
    userRole,
}: {
    carouselProducts: Product[];
    initialProducts: Product[];
    userRole?: "ADMIN" | "USER" | "";
}) => {
    const { products, setProducts } = useProducts();

    // Set initial products and stop the loading state
    useEffect(() => {
        if (initialProducts && initialProducts.length > 0) {
            setProducts(initialProducts || []);
        }
    }, [initialProducts, setProducts]);

    return (
        <div className="flex flex-col w-full">

            <>
                <h1 className="font-cinzel text-5xl text-center mt-32 mb-8">
                    Our Collection
                </h1>

                <CarouselShopPage carouselProducts={carouselProducts} />

                <hr className="border-gray-500 w-[90%] mt-16 self-center" />

                <div className="flex flex-col items-center justify-between mt-16 px-2 mb-8">
                    <h1 className="font-cinzel text-4xl text-center">
                        Find Your Dream Jewelry
                    </h1>
                    <p className="font-playfair text-center text-gray-400 mt-2">
                        We've made our best to find the most exquisite offers for you!
                    </p>
                </div>

                <SortShopPage />

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[75%] xl:w-[90%] 2xl:w-[78%] 3xl:w-[85%] self-center">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <Suspense
                                key={product.id}
                                fallback={<ProductCardShopPageSkeleton />}
                            >
                                <ProductCardShopPage
                                    userRole={userRole}
                                    product={product}
                                />
                            </Suspense>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 col-span-full">
                            No products found.
                        </p>
                    )}
                </div>
            </>

        </div>
    );
};
