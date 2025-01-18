"use client";

import { handleCheckout } from '@/utils/handleCheckout'
import { Stripe } from '@stripe/stripe-js'
import React from 'react'

export const CompleteButtonCheckoutPage = ({ cartId}: { cartId: string }) => {
    return (
        <button onClick={() => handleCheckout(cartId)} className="mt-6 mb-24 submitButton  text-lg">
            Complete the Payment
        </button>
    )
}
