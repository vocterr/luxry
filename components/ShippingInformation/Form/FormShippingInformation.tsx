"use client";

import { ShippingInformation } from '@/types';
import { editShippingInformation } from '@/utils/editShippingInformation';
import React, { FormEvent, useState } from 'react'

export const FormShippingInformation = ({ initialInformations }: { initialInformations: ShippingInformation }) => {
    const [shippingInformation, setShippingInformation] = useState(initialInformations);
    const [statusMessage, setStatusMessage] = useState<{ success: boolean, message: string } | null>(null)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await editShippingInformation(shippingInformation);
        setStatusMessage({ success: result!.success, message: result!.message });
    }
    return (
        <form className=" flex flex-col w-full" onSubmit={(e) => handleSubmit(e)}>

            <label htmlFor="First Name" className="formLabel mb-1 ml-1">First Name</label>
            <input
                className="formInput"
                value={shippingInformation.firstName}
                onChange={(e) => { setShippingInformation((prev) => ({ ...prev, firstName: e.target.value })) }}
            />
            <label htmlFor="Last Name" className="formLabel mb-1 ml-1 mt-3">Last Name</label>
            <input
                className="formInput"
                value={shippingInformation.lastName}
                onChange={(e) => { setShippingInformation((prev) => ({ ...prev, lastName: e.target.value })) }}
            />
            <label htmlFor="Street" className="formLabel mb-1 ml-1 mt-3">Street</label>
            <input
                className="formInput"
                value={shippingInformation.street}
                onChange={(e) => { setShippingInformation((prev) => ({ ...prev, street: e.target.value })) }}
            />
            <label htmlFor="City" className="formLabel mb-1 ml-1 mt-3">City</label>
            <input
                className="formInput"
                value={shippingInformation.city}
                onChange={(e) => { setShippingInformation((prev) => ({ ...prev, city: e.target.value })) }}
            />
            <label htmlFor="State" className="formLabel mb-1 ml-1 mt-3">State</label>
            <input
                className="formInput"
                value={shippingInformation.state}
                onChange={(e) => { setShippingInformation((prev) => ({ ...prev, state: e.target.value })) }}
            />
            <label htmlFor="ZipCode" className="formLabel mb-1 ml-1 mt-3">Zip-Code</label>
            <input
                className="formInput"
                value={shippingInformation.zipCode}
                onChange={(e) => { setShippingInformation((prev) => ({ ...prev, zipCode: e.target.value })) }}
            />
            <label htmlFor="Country" className="formLabel mb-1 ml-1 mt-3">Country</label>
            <input
                className="formInput"
                value={shippingInformation.country}
                onChange={(e) => { setShippingInformation((prev) => ({ ...prev, country: e.target.value })) }}
            />
            <label htmlFor="PhoneNumber" className="formLabel mb-1 ml-1 mt-3">Phone Number</label>
            <input
                className="formInput"
                value={shippingInformation.phoneNumber}
                onChange={(e) => { setShippingInformation((prev) => ({ ...prev, phoneNumber: e.target.value })) }}
            />

            {statusMessage?.success ? (
                <p className='text-green-400 text-sm mt-2'>{statusMessage.message}</p>
            ) : (
                <p className='text-red-400 text-sm mt-2'>{statusMessage?.message}</p>
            )}
            <button className='submitButton text-center'>
                Submit Changes
            </button>


        </form>
    )
}
