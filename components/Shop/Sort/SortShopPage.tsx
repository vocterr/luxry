import { useProducts } from '@/context/ProductContext';
import { fetchSortedProducts } from '@/utils/fetchSortedProducts';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export const SortShopPage = () => {
  const {setProducts} = useProducts();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "mostPopular";
  const [isSortOpened, setIsSortOpened] = useState(false);
  const [sort, setSort] = useState("");

  // Define your sorting options here
  const sortingOptions = [
    { label: "Most Popular", value: "mostPopular" },
    { label: "Price: Low to High", value: "priceLowHigh" },
    { label: "Price: High to Low", value: "priceHighLow" },
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
        const newProducts = await fetchSortedProducts(currentSort);
        setProducts(newProducts);
    }

    fetchProducts();
  }, [currentSort]);

  return (
    <div className="relative flex items-center justify-center space-x-2 mb-6">
      <p>Sort By</p>
      <div
        onClick={() => setIsSortOpened(!isSortOpened)}
        className="h-8 w-48 px-2 hover:cursor-pointer bg-gray-900 border border-gray-700 rounded flex items-center justify-between"
      >
        <h1>{sort}</h1>
        <IoIosArrowDown />
      </div>

      {isSortOpened && (
        <div className="absolute z-[100] flex flex-col bg-gray-900 border border-gray-700 p-3 rounded-md top-10 left-[51%] -translate-x-1/2 w-64">
          {sortingOptions.map((option) => (
            <Link
              key={option.value}
              href={{ query: { sort: option.value } }}
              className="hover:bg-gray-700/95 cursor-pointer rounded-md py-1 px-2"
              // Optional: close the dropdown when an option is clicked
              onClick={() => {setIsSortOpened(false); setSort(option.label)}}
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
