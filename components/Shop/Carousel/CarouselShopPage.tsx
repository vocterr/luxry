import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { PageLoading } from "@/components/PageLoading";

export const CarouselShopPage = ({
  carouselProducts,
}: {
  carouselProducts: Product[];
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
    <div className="bg-black text-white py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="w-full max-w-[90%] mx-auto"
      >
        {carouselProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Link onClick={() => setLoading(true)} href={`/products/${product.id}`} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/images/${product.image.url}` || "/animated/nousers.svg"}
                  alt="jewelry"
                  width={2000}
                  height={2000}
                  className="h-60 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold tracking-wide">{product.name}</h3>
                  <p className="text-sm text-gray-300">Click to view details</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {loading && <PageLoading/>}
    </>
    
  );
};
