import { FormShippingInformation } from "@/components/ShippingInformation/Form/FormShippingInformation";
import { ShippingInformation } from "@/types";
import { fetchShippingInformationOnServer } from "@/utils/fetchShippingInformationOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Shipping Informations",
  };



export default async function ShippingInformationPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    const shippingInformation: ShippingInformation = await fetchShippingInformationOnServer(token);
    return (
        <>
        {shippingInformation ? (
            <div className="flex flex-col  w-full font-playfair text-gray-400">
            <div className="sm:fixed mt-20 sm:mt-0 flex flex-col sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-16 md:px-32 lg:px-60 xl:px-96 2xl:px-[450px] 3xl:px-[570px] rounded-lg w-[90%] self-center p-4">
                <h1 className="font-cinzel mb-8 text-white text-center  font-bold text-lg xl:text-2xl pb-2 border-b border-gray-500">Shipping Informations</h1>
                <FormShippingInformation initialInformations={shippingInformation}/>
            </div>
        </div>
        ) : (
            <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-xl text-center pb-6 border-b border-gray-500">There is an issue with our server, please try again later.</h1>
                    <Image src="/animated/nousers.svg" alt="nousers" width={650} height={650} className="h-80" />
                    <Link href="/shop" className="submitButton text-center">Go Shopping</Link>
                </div>
        )}
         
        </>
       
    );
}