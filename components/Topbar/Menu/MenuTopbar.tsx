"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/utils/logoutUser";
import { BsShop } from "react-icons/bs";
import {
  FiHeart,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiShoppingCart,
  FiTruck,
  FiX
} from "react-icons/fi";
import { PageLoading } from "@/components/PageLoading";

export const MenuTopbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    setIsMenuOpened(false);
    startTransition(() => {
      router.push(href);
    });
  };


  return (
    <>
      {/* Hamburger menu icon (only visible on small screens) */}
      <FiMenu
        onClick={() => setIsMenuOpened(true)}
        className="h-6 w-6 lg:hidden text-white cursor-pointer"
      />

      {/* Side menu overlay */}
      {isMenuOpened && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black text-white z-[999]">
          {/* Close icon */}
          <FiX
            onClick={() => setIsMenuOpened(false)}
            className="h-7 w-7 absolute top-5 right-5 cursor-pointer p-1 rounded bg-gray-900/80"
          />

          {/* Logo */}
          <div className="py-6 flex items-center justify-center border-b border-gray-600">
            <button
              onClick={() => handleNavigation("/")}
              className="font-cinzel text-4xl font-bold text-center self-center"
            >
              LUXry
            </button>
          </div>

          {/* Menu items */}
          <div className="mt-8 flex flex-col space-y-6 px-6">
            <button
              onClick={() => handleNavigation("/shop")}
              className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
            >
              <BsShop />
              <span>Shop</span>
            </button>

            <button
              onClick={() => handleNavigation("/cart")}
              className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
            >
              <FiShoppingCart />
              <span>Cart</span>
            </button>

            <button
              onClick={() => handleNavigation("/wishlist")}
              className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
            >
              <FiHeart />
              <span>Wishlist</span>
            </button>

            <button
              onClick={() => handleNavigation("/track-order")}
              className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
            >
              <FiTruck />
              <span>Track Order</span>
            </button>

            <button
              onClick={() => handleNavigation("/signin")}
              className="text-xl rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
            >
              <FiLogIn />
              <span>Sign In</span>
            </button>

            <button
              onClick={() => {
                logoutUser();
                window.location.reload(); // Hard‑reload after logout
                setIsMenuOpened(false);
              }}
              className="text-xl text-rose-500 rounded-md flex items-center space-x-2 font-playfair hover:bg-gray-900/50 py-2 px-4 hover:text-gray-400 transition-all"
            >
              <FiLogOut />
              <span>Log Out</span>
            </button>
          </div>

          {/* Footer links */}
          <div className="absolute bottom-6 left-0 w-full px-6">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavigation("/contact")}
                className="text-sm font-playfair text-gray-400 hover:text-gray-300 transition-all"
              >
                Contact Us
              </button>
              <button
                onClick={() => handleNavigation("/faq")}
                className="text-sm font-playfair text-gray-400 hover:text-gray-300 transition-all"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNavigation("/privacy")}
                className="text-sm font-playfair text-gray-400 hover:text-gray-300 transition-all"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/terms")}
                className="text-sm font-playfair text-gray-400 hover:text-gray-300 transition-all"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      )}

      {isPending && <PageLoading/>}
    </>
  );
};
