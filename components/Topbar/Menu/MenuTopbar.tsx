"use client";

import { logoutUser } from "@/utils/logoutUser";
import Link from "next/link";
import React, { useState } from "react";
import { BsShop } from "react-icons/bs";
import { FiHeart, FiLogIn, FiLogOut, FiMenu, FiShoppingCart, FiTruck, FiX } from "react-icons/fi";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

export const MenuTopbar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <>
            <FiMenu
                onClick={() => setIsMenuOpened(true)}
                className="h-6 w-6 lg:hidden text-white cursor-pointer"
            />
            {isMenuOpened && (
                <div className="fixed h-[100vh] w-[100vw] top-0 -left-2 bg-black text-white z-[999]">
                    {/* Close Button */}
                    <FiX
                        onClick={() => setIsMenuOpened(false)}
                        className="h-6 w-6 absolute top-5 right-5 cursor-pointer"
                    />

                    {/* Header / Logo */}
                    <div className="py-6 border-b border-gray-600">
                        <Link
                            onClick={() => setIsMenuOpened(false)}
                            href="/"
                            className="font-cinzel text-4xl font-bold text-center block"
                        >
                            LUXry
                        </Link>
                    </div>

                    {/* Menu Items */}
                    <div className="mt-8 flex flex-col space-y-6 px-6">
                        <Link
                            onClick={() => setIsMenuOpened(false)}
                            href="/shop"
                            className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
                        >
                            <BsShop />
                            <h1> Shop</h1>
                        </Link>
                        <Link
                            onClick={() => setIsMenuOpened(false)}
                            href="/cart"
                            className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
                        >
                            <FiShoppingCart />
                            <h1>Cart</h1>

                        </Link>
                        <Link
                            onClick={() => setIsMenuOpened(false)}
                            href="/wishlist"
                            className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
                        >
                            <FiHeart />
                            <h1>Wishlist</h1>
                        </Link>
                        <Link
                            onClick={() => setIsMenuOpened(false)}
                            href="/track-order"
                            className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
                        >
                            <FiTruck />
                            <h1>Track Order</h1>
                        </Link>
                        <Link
                            onClick={() => setIsMenuOpened(false)}
                            href="/signin"
                            className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
                        >
                            <FiLogIn />
                            <h1>Sign In</h1>
                        </Link>
                        <div
                            onClick={() => { logoutUser(); window.location.reload(); setIsMenuOpened(false) }}
                            className="text-xl text-rose-500 rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
                        >
                            <FiLogOut />
                            <h1>Log Out</h1>
                        </div>
                    </div>

                    {/* Footer / Extra Links */}
                    <div className="absolute bottom-6 left-0 w-full px-6">
                        <div className="flex flex-col space-y-3">
                            <Link
                                onClick={() => setIsMenuOpened(false)}
                                href="/contact"
                                className="text-sm font-playfair text-gray-400 hover:text-gray-300 transition-all"
                            >
                                Contact Us
                            </Link>
                            <Link
                                onClick={() => setIsMenuOpened(false)}
                                href="/faq"
                                className="text-sm font-playfair text-gray-400 hover:text-gray-300 transition-all"
                            >
                                FAQ
                            </Link>
                            <Link
                                onClick={() => setIsMenuOpened(false)}
                                href="/policy"
                                className="text-sm font-playfair text-gray-400 hover:text-gray-300 transition-all"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                onClick={() => setIsMenuOpened(false)}
                                href="/terms"
                                className="text-sm font-playfair text-gray-400 hover:text-gray-300 transition-all"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
