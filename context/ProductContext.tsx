"use client";

import { Product } from "@/types";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface ProductContextInterface {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>
}



const ProductContext = createContext<ProductContextInterface | null>(null);

export const ProductProvider = ({children}: {children: ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        console.log("Products in context after update:", products);
    }, [products]);
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("Must be wrapped with ProductProvider");
    }
    return context;
}