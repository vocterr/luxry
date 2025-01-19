"use client";

import { Product } from '@/types';
import { fetchCollectionProductsOnServer } from '@/utils/fetchCollectionProductsOnServer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CollectionHomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await fetchCollectionProductsOnServer("Winter Elegance");
      setProducts(fetchedProducts || []);
    };

    fetchProducts();
  }, []);


  return (
    <div className="min-h-screen w-full mt-16 flex flex-col items-center">
      <h1 className="text-5xl font-cinzel text-center mb-8">Our Collection</h1>

      <div
        className="
          grid
          w-[90%] lg:w-[70%] xl:w-[55%] 2xl:w-[45%] 3xl:w-[40%]
          gap-4
          grid-cols-1
          lg:grid-cols-[1.3fr,1fr]
          auto-rows-auto
          self-center justify-items-center
        "
      >
        {products.length > 2 && (
          <>
            {products[0] && (
              <Link
                href={`/products/${products[0].id}`}
                className="
                  lg:col-span-1
                  lg:row-span-2
                  h-80 w-[80%] sm:w-[50%] md:w-[40%]
                  lg:h-[700px]
                  lg:w-[100%]
                "
              >
                <Image
                  src={`/images/${products[0].image.url}`}
                  alt="jewelry"
                  width={2000}
                  height={2000}
                  className="rounded object-cover w-full h-full"
                />
              </Link>
            )}

            {products.slice(1, 3).map((product, index) => (
              <Link
                href={`/products/${product.id}`}
                key={index}
                className="
                  sm:col-span-1
                  lg:col-span-1
                  h-80 w-[80%] sm:w-[50%] md:w-[40%] lg:w-full
                  lg:row-span-1
                  lg:h-[350px]
                "
              >
                <Image
                  src={`/images/${product.image.url}`}
                  alt="jewelry"
                  width={2000}
                  height={2000}
                  className="rounded object-cover w-full h-full"
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CollectionHomePage;
