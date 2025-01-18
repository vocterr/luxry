import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Product } from "@/types";
import { fetchCarouselProductsOnServer } from "@/utils/fetchCarouselProductsOnServer";
import { cookies } from "next/headers";
import { ShopPageOnClient } from "@/components/Shop/ShopPageOnClient";
import { fetchInitialProductsOnServer } from "@/utils/fetchInitialProductsOnServer";
import { fetchUserRoleOnServer } from "@/utils/fetchUserRoleOnServer";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
    title: "LUXry // Shop",
};

export default async function ShopPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const carouselProducts: Product[] = await fetchCarouselProductsOnServer("Winter Elegance");
    const initialProducts: Product[] = await fetchInitialProductsOnServer() || [];
    let userRole: { role: "ADMIN" | "USER" | "" } = { role: "" };
    if (token) {
        userRole = await fetchUserRoleOnServer(token);
    }

    return (
        <>
            {initialProducts.length > 0 ? (
                <ShopPageOnClient userRole={userRole.role} carouselProducts={carouselProducts} initialProducts={initialProducts} />
            ) : (
                <div className="fixed w-[350px] sm:w-auto text-white flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="pb-6 md:text-xl 2xl:text-2xl border-b self-center border-gray-500">There is an issue with our server, please try again later.</h1>
                    <Image src="/animated/nousers.svg" alt="noproducts" height={650} width={650} className="mt-6 h-60 md:h-72 xl:h-80 2xl:h-96" />
                    <Link href="/shop" className="bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 rounded-lg shadow-md shadow-gray-800 py-2 text-center w-[70%] xl:w-[55%] font-bold text-lg mt-6 self-center">
                        Find Some Items
                    </Link>
                </div>
            )}
        </>


    );
}