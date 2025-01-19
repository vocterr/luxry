import { CartPageOnClient } from "@/components/Cart/CartPageOnClient";
import { Cart } from "@/types";
import { fetchCartOnServer } from "@/utils/fetchCartOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Cart",
  };


export default async function CartPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const cart: Cart = await fetchCartOnServer(token);
    
    return (
        <>
        {cart && cart.cartItems.length > 0 ? (
            <CartPageOnClient initialCart={cart}/>
        ) : (
            <div className="fixed w-[350px] sm:w-auto text-white flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="pb-6 md:text-xl 2xl:text-2xl border-b self-center border-gray-500">You don't have any items in your cart.</h1>
                    <Image src="/animated/nocart.svg" alt="nocart" height={650} width={650} className="mt-6 h-60 md:h-72 xl:h-80 2xl:h-96"/>
                    <Link href="/shop" className="bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 rounded-lg shadow-md shadow-gray-800 py-2 text-center w-[70%] xl:w-[55%] font-bold text-lg mt-6 self-center">
                        Find Some Items
                    </Link>
                </div>
        )}
        
        </>
        
    );
}