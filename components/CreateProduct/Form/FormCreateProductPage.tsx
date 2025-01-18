"use client";

import { createProduct } from '@/utils/createProduct';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { FiImage } from 'react-icons/fi';
import { MaterialFormCreateProduct } from './Material/MaterialFormCreateProduct';
import { IsFeaturedFormCreateProductPage } from './IsFeatured/IsFeaturedFormCreateProductPage';
import { MainInfoFormProductCreatePage } from './MainInfo/MainInfoFormProductCreatePage';
import { GemstoneFormProductCreatePage } from './Gemstone/GemstoneFormProductCreatePage';
import { ImageFormProductCreatePage } from './Image/ImageFormProductCreatePage';
import { Gemstone, Material } from '@/types';


export interface InitialProduct {
    name: string;
    description: string;
    price: number;
    stock: number;
    materialId: number;
    gemstoneId: number;
    weight: number;
    carat: number;
    dimensions: string;
    style: string;
    collectionId: number | null;
    category: string;
    certification: string;
    occasion: string[];
    careInstructions: string;
    isFeatured: boolean;
    rating: number
}
export const FormCreateProductPage = ({materials, gemstones}: {materials: Material[], gemstones: Gemstone[]}) => {
    const [product, setProduct] = useState<InitialProduct>({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        materialId: 0,
        gemstoneId: 0,
        weight: 0,
        carat: 0,
        dimensions: "",
        style: "",
        collectionId: null,
        category: "",
        certification: "",
        occasion: [""],
        careInstructions: "",
        isFeatured: false,
        rating: 0,
    });
    const [image, setImage] = useState<File | null>(null);
    const [statusMessage, setStatusMessage] = useState<{ success: boolean, message: string } | null>(null);
    const [dropdown, setDropdown] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!image) {
            setStatusMessage({ success: false, message: "Please select an image!" });
            return;
        }
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("product", JSON.stringify(product));
            const result = await createProduct(formData);
            setStatusMessage({ success: result!.success, message: result!.message });
        }
        catch (error) {
            console.error(error);
        }
    }

    
    return (
        <form className="flex flex-col text-gray-400" onSubmit={(e) => handleSubmit(e)}>
            <MainInfoFormProductCreatePage product={product}  setProduct={setProduct}/>

            <MaterialFormCreateProduct product={product} setProduct={setProduct} materials={materials} dropdown={dropdown} setDropdown={setDropdown} />
            <GemstoneFormProductCreatePage dropdown={dropdown} setDropdown={setDropdown} gemstones={gemstones} product={product} setProduct={setProduct}/>
            

            <IsFeaturedFormCreateProductPage product={product} setProduct={setProduct} />
            <ImageFormProductCreatePage setImage={setImage}/>
            


            {statusMessage?.success ? (
                <p className='text-green-400 text-sm text-center mt-2'>{statusMessage.message}</p>
            ) : (
                <p className='text-red-400 text-sm text-center mt-2'>{statusMessage?.message}</p>
            )}

            <button className='submitButton'>
                Create Product
            </button>
        </form>
    );
};
