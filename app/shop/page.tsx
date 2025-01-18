import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import { Product } from "@/types";
import { fetchCarouselProductsOnServer } from "@/utils/fetchCarouselProductsOnServer";
import { cookies } from "next/headers";
import { ShopPageOnClient } from "@/components/Shop/ShopPageOnClient";
import { fetchInitialProductsOnServer } from "@/utils/fetchInitialProductsOnServer";
import { fetchUserRoleOnServer } from "@/utils/fetchUserRoleOnServer";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Shop",
  };

export default async function ShopPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const carouselProducts: Product[] = await fetchCarouselProductsOnServer("Winter Elegance");
    const initialProducts: Product[] = await fetchInitialProductsOnServer();
    let userRole: {role: "ADMIN" | "USER" | ""} = {role: ""};
    if (token) {
        userRole = await fetchUserRoleOnServer(token);
    }
    
    return (
       
            <ShopPageOnClient userRole={userRole.role} carouselProducts={carouselProducts} initialProducts={initialProducts}/>
        
    );
}