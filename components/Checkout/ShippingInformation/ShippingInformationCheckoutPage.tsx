import { ShippingInformation } from '@/types'
import Link from 'next/link'
import React from 'react'

export const ShippingInformationCheckoutPage = ({shippingInformation}: {shippingInformation: ShippingInformation}) => {
    return (
        <div className="flex text-gray-300/95 flex-col space-y-3 w-[85%] px-4 self-center pb-6 border-b border-gray-500">
            <h1>First Name: <b className="text-white">{shippingInformation.firstName}</b></h1>
            <h1>Last Name: <b className="text-white">{shippingInformation.lastName}</b></h1>
            <h1>Street: <b className="text-white">{shippingInformation.street}</b></h1>
            <h1>City: <b className="text-white">{shippingInformation.city}</b></h1>
            <h1>State: <b className="text-white">{shippingInformation.state}</b></h1>
            <h1>Zip-Code: <b className="text-white font-cinzel">{shippingInformation.zipCode}</b></h1>
            <h1>Country: <b className="text-white">{shippingInformation.country}</b></h1>
            <h1>Phone Number: <b className="text-white font-cinzel">{shippingInformation.phoneNumber}</b></h1>
            <p className=" text-sm leading-relaxed ">Something's not right? <Link href="/shipping-information" className="text-blue-400/80 hover:underline hover:underline-offset-4">Edit Your Shipping Informations</Link></p>

        </div>
    )
}
