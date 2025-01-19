"use client";

import { PageLoading } from '@/components/PageLoading';
import { handleCheckout } from '@/utils/handleCheckout'
import { Stripe } from '@stripe/stripe-js'
import React, { useState, useTransition } from 'react'

export const CompleteButtonCheckoutPage = ({ cartId }: { cartId: string }) => {
    const [loading, setLoading] = useState(false);

    const handlePay = () => {
        setLoading(true);
        handleCheckout(cartId)

    }
    return (
        <>
            <button onClick={handlePay} className="mt-6 mb-24 submitButton  text-lg">
                Complete the Payment
            </button>
            {loading && <PageLoading />}
        </>

    )
}
