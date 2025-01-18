"use client";

import { useProducts } from '@/context/ProductContext';
import { fetchProductsSearch } from '@/utils/fetchProductsSearch';
import React, { KeyboardEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io';

export const SearchMobile = () => {
    const [isSearchOpened, setIsSearchOpened] = useState(false);
    const [search, setSearch] = useState("");
    const {setProducts} = useProducts();

    const handleSearch = async () => {
            const newProducts = await fetchProductsSearch(search);
            setProducts(newProducts);
            setIsSearchOpened(false);
        }
    
        const handleKeyDown = async (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                handleSearch();
            }
        }
  return (
    <>
        <FiSearch onClick={() => setIsSearchOpened(true)} className='lg:hidden h-6 w-6 mr-2'/> 

        {isSearchOpened && (
            <div className='bg-black fixed top-0 left-0 h-20 w-full z-[999] flex items-center space-x-4 justify-start sm:justify-center'>
                <IoIosArrowBack onClick={() => setIsSearchOpened(false)} className='h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-gray-300 hover:text-white'/>
                <div className='flex items-center w-[80%] justify-between py-1 px-3 border border-white rounded-lg'>
                    <input
                        className='w-[90%] bg-transparent focus:outline-none'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <FiSearch onClick={() => handleSearch()} className='h-5 w-5 text-gray-300 cursor-pointer hover:text-white'/>
                </div>
            </div>
        )}
    </>
  )
}
