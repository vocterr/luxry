"use client";

import { Profile } from '@/app/profile/page';
import { editShippingInformation } from '@/utils/editShippingInformation';
import { editUser } from '@/utils/editUser';
import React, { FormEvent, useState } from 'react'

export const FormAccountProfilePage = ({initialProfile}: {initialProfile: Profile}) => {
    const [profile, setProfile] = useState(initialProfile);
    const [statusMessage, setStatusMessage] = useState<{ success: boolean, message: string } | null>(null);
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await editUser(profile.name, profile.email, profile.password);
        setStatusMessage({success: result!.success, message: result!.message});
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-[90%] self-center pb-8 border-b border-gray-700">
            <label htmlFor="Name" className='formLabel ml-1 mb-1'>Name</label>
            <input
                className='formInput'
                value={profile.name}
                onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
            />
            <label htmlFor="Email" className='formLabel ml-1 mb-1 mt-3'>Email</label>
            <input
                className='formInput'
                value={profile.email}
                onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))}
            />
            <label htmlFor="Password" className='formLabel ml-1 mb-1 mt-3'>Password</label>
            <input
                className='formInput'
                type='password'
                value={"88888888888888888"}
                onChange={(e) => setProfile((prev) => ({ ...prev, password: e.target.value }))}
            />
            {statusMessage?.success ? (
                <p className="mt-2 text-green-400 text-center text-sm">{statusMessage.message}</p>
            ) : (
                <p className="mt-2 text-red-400 text-center text-sm">{statusMessage?.message}</p>
            )}
            <button className="submitButton">
                Submit Changes
            </button>
        </form>
    )
}
