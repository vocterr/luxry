import { Cart } from '@/types'
import React from 'react'

export const OrderDetailsCheckoutPage = ({cart}: {cart: Cart}) => {
    return (
        <div className="flex text-gray-300/95 flex-col space-y-3 w-[85%] px-4 self-center">
            <h1>Total Number of Items: <b className="text-white relative bottom-[1px]">{cart.cartItems.length}</b></h1>

            <div className="space-y-2">
                <h2 className="text-lg font-cinzel">Itemized List:</h2>
                {cart.cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between items-center border-b border-gray-500 pb-2">
                        <p className="text-gray-300">{item.product.name} (x{item.quantity})</p>
                        <p className="text-gray-300 font-cinzel">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>

            <h1>Subtotal: <b className="text-white font-cinzel">${cart.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)}</b></h1>
            <h1>Shipping: <b className="text-white">Calculated At Checkout</b></h1>
            <h1>Taxes: <b className="text-white font-cinzel">${(cart.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0) * 0.23).toFixed(2)}</b> (23%)</h1>
            <h1>Total: <b className="text-white font-cinzel">${(cart.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0) * 1.23).toFixed(2)}</b></h1>
            <h1>Estimated Delivery Date: <b className="text-white">5-7 Business Days</b></h1>
        </div>
    )
}
