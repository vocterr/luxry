import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const EditInformationsCheckoutPage = () => {
    return (
        <div className=" px-4 text-gray-300/95 flex flex-col items-center space-y-4">
            <h1 className='text-center'>We need you to provide information about you to complete your order.</h1>
            <Image src="/animated/noshippinginformations.svg" alt='noshippinginformations' width={650} height={650} className='h-80 md:h-96 2xl:h-[470px]'/>
            <Link href="/shipping-information" className="submitButton text-center">
                Provide Information
            </Link>
        </div>
    )
}
