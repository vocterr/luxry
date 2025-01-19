"use client";

import React, { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { SearchDesktop } from '../Search/SearchDesktop';
import { PageLoading } from '@/components/PageLoading';

export const MidTopbar = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };


  return (
    <>
      <div className='hidden lg:flex items-center space-x-6 text-gray-300 font-cinzel text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <button
          onClick={() => handleNavigation('/shop')}
          className='hover:text-white duration-300 transition-all'
        >
          Shop
        </button>

        <button
          onClick={() => handleNavigation('/contact')}
          className='hover:text-white duration-300 transition-all'
        >
          Contact Us
        </button>

        <SearchDesktop />
      </div>

      {/* Show the spinner or loading indicator while isPending is true */}
      {isPending && <PageLoading />}
    </>
  );
};
