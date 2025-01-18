import { Product } from '@/types'
import React from 'react'

export const DetailsProductPage = ({product}: {product: Product}) => {
    return (
        <div className="flex flex-col font-playfair mb-12 text-gray-300">
            <h1 className="font-cinzel text-2xl text-center text-white mb-6">DETAILS</h1>
            <div className="flex items-center w-[75%] self-center justify-between">
                <h1>Material</h1>
                <p className="text-gray-400">{product.material.name}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            {product.gemstone && (
                <>
                    <div className="flex items-center w-[75%] self-center justify-between mt-2">
                        <h1>Gemstone Type</h1>
                        <p className="text-gray-400">{product.gemstone.type}</p>
                    </div>
                    <hr className="border-gray-500 w-[80%] self-center" />
                    <div className="flex items-center w-[75%] self-center justify-between mt-2">
                        <h1>Gemstone Color</h1>
                        <p className="text-gray-400">{product.gemstone.color}</p>
                    </div>
                    <hr className="border-gray-500 w-[80%] self-center" />
                    <div className="flex items-center w-[75%] self-center justify-between mt-2">
                        <h1>Gemstone Cut</h1>
                        <p className="text-gray-400">{product.gemstone.cut}</p>
                    </div>
                    <hr className="border-gray-500 w-[80%] self-center" />
                    <div className="flex items-center w-[75%] self-center justify-between mt-2">
                        <h1>Gemstone Clarity</h1>
                        <p className="text-gray-400">{product.gemstone.clarity}</p>
                    </div>
                    <hr className="border-gray-500 w-[80%] self-center" />
                    <div className="flex items-center w-[75%] self-center justify-between mt-2">
                        <h1>Gemstone Origin</h1>
                        <p className="text-gray-400">{product.gemstone.origin}</p>
                    </div>
                    <hr className="border-gray-500 w-[80%] self-center" />
                </>
            )}
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Weight</h1>
                <p className="text-gray-400">{product.weight}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Carat</h1>
                <p className="text-gray-400">{product.carat}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Dimensions</h1>
                <p className="text-gray-400">{product.dimensions}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Style</h1>
                <p className="text-gray-400">{product.style}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Collection</h1>
                <p className="text-gray-400">{product.collection.name}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Certification</h1>
                <p className="text-gray-400">{product.certification}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Occasions</h1>
                <p className="text-gray-400">{product.occasion.length > 0 ? product.occasion.join(", ") : "Any Occasion"}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Care Instructions</h1>
                <p className="text-gray-400">{product.careInstructions}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Rating</h1>
                <p className="text-gray-400">{product.rating}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Stock</h1>
                <p className="text-gray-400">{product.stock}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Added On</h1>
                <p className="text-gray-400">{new Date(product.createdAt).toLocaleDateString()}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />
            <div className="flex items-center w-[75%] self-center justify-between mt-2">
                <h1>Last Updated</h1>
                <p className="text-gray-400">{new Date(product.updatedAt).toLocaleDateString()}</p>
            </div>
            <hr className="border-gray-500 w-[80%] self-center" />

        </div>
    )
}
