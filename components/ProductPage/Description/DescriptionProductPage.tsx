import React from 'react'

export const DescriptionProductPage = ({productDescription}: {productDescription: string}) => {
  return (
    <div className="flex flex-col font-playfair mb-12">
                    <h1 className="font-cinzel text-2xl text-center mb-6">DESCRIPTION</h1>
                    <p className=" px-2 text-gray-400">{productDescription}</p>
                </div>
  )
}
