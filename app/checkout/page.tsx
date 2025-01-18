import { EditInformationsCheckoutPage } from "@/components/Checkout/EditInformations/EditInformationsCheckoutPage";
import { OrderDetailsCheckoutPage } from "@/components/Checkout/OrderDetails/OrderDetailsCheckoutPage";
import { ShippingInformationCheckoutPage } from "@/components/Checkout/ShippingInformation/ShippingInformationCheckoutPage";
import { Cart, ShippingInformation } from "@/types";
import { fetchCartOnServer } from "@/utils/fetchCartOnServer";
import { fetchShippingInformationOnServer } from "@/utils/fetchShippingInformationOnServer";
import { cookies } from "next/headers";
import { CompleteButtonCheckoutPage } from "@/components/Checkout/CompleteButton/CompleteButtonCheckoutPage";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Checkout",
  };

export default async function CheckoutPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    const cart: Cart = await fetchCartOnServer(token);
    const  shippingInformation: ShippingInformation = await fetchShippingInformationOnServer(token);

    
    return (
        <div className="flex flex-col w-full mt-24 sm:px-16 md:px-28 lg:px-52 xl:px-96 2xl:px-[470px] 3xl:px-[580px] font-playfair">
            <h1 className="text-4xl mb-6 font-cinzel pb-2 border-b text-center w-[90%] self-center border-gray-500">Checkout</h1>
            {shippingInformation.city ? (
                <>
                    <ShippingInformationCheckoutPage shippingInformation={shippingInformation} />
                    <h1 className="text-2xl mb-6 font-cinzel text-center mt-6">Order Details</h1>
                    <OrderDetailsCheckoutPage cart={cart} />
                    <CompleteButtonCheckoutPage cartId={cart.id}/>
                </>
            ) : (
                <EditInformationsCheckoutPage />
            )}
        </div>
    );
}
