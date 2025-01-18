import { ProductCardShopPage } from "@/components/Shop/ProductCard/ProductCardShopPage";
import { Wishlist } from "@/types";
import { fetchWishlistOnServer } from "@/utils/fetchWishlistOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Wishlist",
  };


export default async function WishlistPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const wishlist: Wishlist = await fetchWishlistOnServer(token);
    return (
        <div className="flex flex-col mt-24 w-full text-gray-400">
            {wishlist ? (
                <>
                    <h1 className="text-4xl mb-8 font-cinzel text-white text-center self-center w-[90%] pb-2 border-b border-gray-500">Wishlist</h1>
                    <input
                        className="formInput w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[30%] self-center mb-8"
                        placeholder="Find Your Item..."
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8 w-[85%] sm:w-[65%] md:w-[55%] lg:w-[75%] xl:w-[60%] 2xl:w-[75%] 3xl:w-[80%] self-center">
                        {wishlist.wishlistItems.map((item) => (
                            <ProductCardShopPage product={item.product} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="fixed w-[350px] sm:w-auto text-white flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="pb-6 md:text-xl 2xl:text-2xl border-b self-center border-gray-500">You don't have any items in your wishlist.</h1>
                    <Image src="/animated/nowishlist.svg" alt="nowishlist" height={650} width={650} className="mt-6 h-60 md:h-72 xl:h-80 2xl:h-96"/>
                    <Link href="/shop" className="bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 rounded-lg shadow-md shadow-gray-800 py-2 text-center w-[70%] xl:w-[55%] font-bold text-lg mt-6 self-center">
                        Find Some Items
                    </Link>
                </div>
            )}



        </div>
    );
}