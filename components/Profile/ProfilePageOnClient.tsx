"use client"

import { Profile } from '@/app/profile/page';
import React from 'react'
import { FormAccountProfilePage } from "./FormAccount/FormAccountProfilePage";
import { FormShippingProfilePage } from './FormShipping/FormShippingProfilePage';
import { FiLogOut } from 'react-icons/fi';
import { logoutUser } from '@/utils/logoutUser';

export const ProfilePageOnClient = ({ initialProfile }: { initialProfile: Profile }) => {
    

    
    return (
        <div className="flex flex-col mt-24 sm:px-12 md:px-28 lg:px-60 xl:px-96 2xl:px-[470px] 3xl:px-[580px] w-full text-gray-400">
            <h1 className="font-cinzel text-white mb-8 text-4xl text-center self-center pb-2 border-b border-gray-500 w-[90%]">Account Details</h1>
            <FormAccountProfilePage initialProfile={initialProfile}/>
            <FormShippingProfilePage initialProfile={initialProfile} />

            <button onClick={() =>{logoutUser(); window.location.reload()}  } className='text-red-500 flex items-center justify-center space-x-2 mt-6 mb-12 bg-zinc-900/75 hover:bg-zinc-900/65 hover:scale-[1.03] transition-all duration-300 w-[80%] self-center py-2 rounded-lg text-lg'>
                <FiLogOut/>
                <h1>Log Out</h1>
            </button>
        </div>
    )
}
