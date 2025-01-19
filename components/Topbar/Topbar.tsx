import Link from 'next/link'
import React from 'react'
import { FiBell, FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi"
import { MenuTopbar } from './Menu/MenuTopbar'
import { SearchDesktop } from './Search/SearchDesktop'
import { RightTopbar } from './Right/RightTopbar'
import { SearchMobile } from './Search/SearchMobile'
import { MidTopbar } from './Mid/MidTopbar'

export const Topbar = () => {


    return (
        <nav className="fixed w-full h-20 z-50 bg-opacity-80 bg-black">
            <div className="h-full px-5  md:px-6 max-w-screen-xl mx-auto w-full flex items-center justify-between">
                <Link className='font-cinzel text-3xl font-bold' href="/">
                    LUXry
                </Link>
                <MidTopbar/>
                

                <div className='flex items-center space-x-2'>
                    <SearchMobile/>
                    <MenuTopbar />
                    <RightTopbar/>
                </div>
            </div>


        </nav>
    )
}
