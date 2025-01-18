"use client"

import { Profile } from '@/app/profile/page';
import { editShippingInformation } from '@/utils/editShippingInformation';
import React, { FormEvent, useState } from 'react'

export const FormShippingProfilePage = ({ initialProfile }: { initialProfile: Profile }) => {
    const [profile, setProfile] = useState(initialProfile);
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string} | null>(null);


    const handleSubmit = async (e: FormEvent) => {
            e.preventDefault();
            const result = await editShippingInformation(profile.shippingInformation);
            setStatusMessage({success: result!.success, message: result!.message});
        }


    return (
        <form onSubmit={(e) => handleSubmit(e)} className='mt-8 flex flex-col w-[90%] self-center pb-8 border-b border-gray-700'>
            <label htmlFor="First Name" className='formLabel ml-1 mb-1'>First Name</label>
            <input
                className='formInput'
                value={profile.shippingInformation.firstName}
                onChange={(e) => setProfile((prev) => ({
                    ...prev,
                    shippingInformation: {
                        ...prev.shippingInformation,
                        firstName: e.target.value
                    }
                }))}
            />

            <label htmlFor="Last Name" className='formLabel ml-1 mb-1 mt-3'>Last Name</label>
            <input
                className='formInput'
                value={profile.shippingInformation.lastName}
                onChange={(e) => setProfile((prev) => ({
                    ...prev,
                    shippingInformation: {
                        ...prev.shippingInformation,
                        lastName: e.target.value
                    }
                }))}
            />

            <label htmlFor="Street" className='formLabel ml-1 mb-1 mt-3'>Street</label>
            <input
                className='formInput'
                value={profile.shippingInformation.street}
                onChange={(e) => setProfile((prev) => ({
                    ...prev,
                    shippingInformation: {
                        ...prev.shippingInformation,
                        street: e.target.value
                    }
                }))}
            />

            <label htmlFor="City" className='formLabel ml-1 mb-1 mt-3'>City</label>
            <input
                className='formInput'
                value={profile.shippingInformation.city}
                onChange={(e) => setProfile((prev) => ({
                    ...prev,
                    shippingInformation: {
                        ...prev.shippingInformation,
                        city: e.target.value
                    }
                }))}
            />

            <label htmlFor="State" className='formLabel ml-1 mb-1 mt-3'>State</label>
            <input
                className='formInput'
                value={profile.shippingInformation.state}
                onChange={(e) => setProfile((prev) => ({
                    ...prev,
                    shippingInformation: {
                        ...prev.shippingInformation,
                        state: e.target.value
                    }
                }))}
            />

            <label htmlFor="Zip-Code" className='formLabel ml-1 mb-1 mt-3'>Zip-Code</label>
            <input
                className='formInput'
                value={profile.shippingInformation.zipCode}
                onChange={(e) => setProfile((prev) => ({
                    ...prev,
                    shippingInformation: {
                        ...prev.shippingInformation,
                        zipCode: e.target.value
                    }
                }))}
            />

            <label htmlFor="Country" className='formLabel ml-1 mb-1 mt-3'>Country</label>
            <input
                className='formInput'
                value={profile.shippingInformation.country}
                onChange={(e) => setProfile((prev) => ({
                    ...prev,
                    shippingInformation: {
                        ...prev.shippingInformation,
                        country: e.target.value
                    }
                }))}
            />

            <label htmlFor="Phone Number" className='formLabel ml-1 mb-1 mt-3'>Phone Number</label>
            <input
                className='formInput'
                value={profile.shippingInformation.phoneNumber}
                onChange={(e) => setProfile((prev) => ({
                    ...prev,
                    shippingInformation: {
                        ...prev.shippingInformation,
                        phoneNumber: e.target.value
                    }
                }))}
            />

            {statusMessage?.success ? (
                <p className='text-green-400 text-center text-sm mt-2'>{statusMessage.message}</p>
            ) : (
                <p className='text-red-400 text-center text-sm mt-2'>{statusMessage?.message}</p>
            )}

            <button className='submitButton'>
                Submit Changes
            </button>
        </form>

    )
}
