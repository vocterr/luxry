"use client";

import { PageLoading } from '@/components/PageLoading';
import { useRedirect } from '@/hooks/useRedirect';
import React from 'react'

export const EditShippingInformationPage = () => {
    const {pending, redirectUser} = useRedirect();
  return (
    <>
        <p className=" text-sm leading-relaxed ">Something's not right? <button onClick={() => redirectUser("/shipping-information")} className="text-blue-400/80 hover:underline hover:underline-offset-4">Edit Your Shipping Informations</button></p>
        {pending && <PageLoading/>}
    </>
  )
}
