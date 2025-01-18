import { DescriptionProductPage } from "@/components/ProductPage/Description/DescriptionProductPage";
import { DetailsProductPage } from "@/components/ProductPage/Details/DetailsProductPage";
import { MainInfoProductPage } from "@/components/ProductPage/MainInfo/MainInfoProductPage";
import { Product } from "@/types";
import { fetchProductOnServer } from "@/utils/fetchProductOnServer";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Product",
  };



export default async function ProductPage({ params }: { params: any }) {
    const awaitedParams = await params;
    const product: Product = await fetchProductOnServer(awaitedParams.id);
    return (
        <>
            {product ? (
                <div className="flex flex-col w-full">
                    <div className="grid grid-cols-1 sm:px-32 md:px-48 lg:px-20 xl:px-52 2xl:px-80 3xl:px-[470px] mt-20">

                        <MainInfoProductPage product={product} />


                        <hr className="border-gray-500 mb-4" />

                        <DescriptionProductPage productDescription={product.description} />

                        <hr className="border-gray-500 mb-4" />

                        <DetailsProductPage product={product} />

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