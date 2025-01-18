"use client"

import { useProducts } from '@/context/ProductContext';
import { fetchProductsSearch } from '@/utils/fetchProductsSearch';
import React, { KeyboardEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export const SearchDesktop = () => {
    const [search, setSearch] = useState("");
    const {setProducts} = useProducts();

    const handleSearch = async () => {
        const newProducts = await fetchProductsSearch(search);
        setProducts(newProducts);
    }

    const handleKeyDown = async (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }
    return (
        <div className='flex items-center px-2 justify-between h-[34px] rounded-full w-96 border-2 border-gray-400'>
            <input
                className='w-[90%] bg-transparent focus:outline-none px-3 py-1'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                
            />
            <FiSearch className='hover:cursor-pointer' onClick={handleSearch} />
        </div>
    )
}
