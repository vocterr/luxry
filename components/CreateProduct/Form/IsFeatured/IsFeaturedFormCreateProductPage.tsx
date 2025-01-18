import { Product } from '@/types'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { InitialProduct } from '../FormCreateProductPage'
import { FiCheck } from 'react-icons/fi';

export const IsFeaturedFormCreateProductPage = ({ product, setProduct }: { product: InitialProduct, setProduct: Dispatch<SetStateAction<InitialProduct>> }) => {
  const [isFeatured, setIsFeatured] = useState(false);
  return (
    <div className='flex items-start space-x-4 self-center mt-3'>
      <label htmlFor="isFeatured" className='formLabel ml-1 mb-1'>Is Featured</label>
      <div onClick={() => {setIsFeatured(true); setProduct((prev) => ({...prev, isFeatured: true}))}} className={`flex flex-col space-y-1 items-center `}>
        <div className={`h-5 w-5 flex items-center justify-center border border-gray-600 rounded ${isFeatured == true ? "bg-white" : ""}`}>
          <FiCheck className={`text-black ${isFeatured == true ? "" : "hidden"}`}/>
        </div>
        <h1 className='text-xs text-green-400'>Yes</h1>
      </div>
      <div onClick={() => {setIsFeatured(false); setProduct((prev) => ({...prev, isFeatured: false}))}}  className='flex flex-col space-y-1 items-center'>
        <div className={`h-5 w-5 flex items-center justify-center border border-gray-600 rounded ${isFeatured == true ? "" : "bg-white"}`}>
          <FiCheck className={`text-black ${isFeatured == true ? "hidden" : ""}`}/>
        </div>
        <h1 className='text-xs text-red-400'>No</h1>
      </div>
    </div>
  )
}
