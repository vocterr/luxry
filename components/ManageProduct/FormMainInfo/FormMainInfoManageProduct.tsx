"use client";

import { Note } from '@/components/Note';
import { Spinner } from '@/components/Spinner';
import { Product } from '@/types';
import { updateMainInfo } from '@/utils/updateMainInfo';
import Image from 'next/image'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { FiEdit } from 'react-icons/fi'

export const FormMainInfoManageProduct = ({initialProduct}: {initialProduct: Product}) => {
    const [product, setProduct] = useState(initialProduct);
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState("");
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string} | null>(null);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileEdit = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImage(e.target.files[0])
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImagePreview(fileReader.result as string);
            }
            fileReader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await updateMainInfo(product.id, product.name, product.description, product.price, product.stock);
        setStatusMessage({success: result!.success, message: result!.message});
        setLoading(false);
    }
    return (
        <form className="flex flex-col lg:flex-row w-full sm:w-[60%] md:w-[50%] lg:w-[65%] 2xl:w-[50%] 3xl:w-[40%] lg:space-x-20 xl:space-x-40  sm:self-center">
            <div className="w-full relative h-[450px]">
                {imagePreview ? (
                    // Display the selected image preview
                    <img src={imagePreview} alt="Preview" className="h-[450px] w-full rounded object-cover" />
                ) : (
                    // Display the default image if no file is selected
                    <Image
                        src="/images/jewelry1.jpg"
                        alt="jewelry"
                        width={2000}
                        height={2000}
                        className="h-[450px] w-full rounded object-cover"
                    />
                )}
                <FiEdit
                    className="absolute top-2 right-2 z-[10] h-12 w-12 rounded-md bg-gray-900 border border-gray-500 p-3 cursor-pointer"
                    onClick={handleFileEdit}
                />
                <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={inputRef}
                />
            </div>

            <div className="flex flex-col  p-6 pb-2   ">
                <label htmlFor="Name" className='formLabel  ml-1 mb-1'>Name</label>
                <input
                    className='formInput'
                    value={product.name}
                    onChange={(e) => setProduct((prev) => ({...prev, name: e.target.value}))}
                />
                <label htmlFor="Description" className='formLabel  ml-1 mb-1 mt-3'>Description</label>
                <input
                    className='formInput'
                    value={product.description}
                    onChange={(e) => setProduct((prev) => ({...prev, description: e.target.value}))}
                />
                <label htmlFor="Price" className='formLabel  ml-1 mb-1 mt-3'>Price</label>
                <input
                    className='formInput'
                    value={product.price}
                    onChange={(e) => setProduct((prev) => ({...prev, price: Number(e.target.value)}))}
                />
                <label htmlFor="Stock" className='formLabel  ml-1 mb-1 mt-3'>Stock</label>
                <input
                    className='formInput'
                    value={product.stock}
                    onChange={(e) => setProduct((prev) => ({...prev, stock: Number(e.target.value)}))}
                />

                <Note/>

{loading && (
                <Spinner/>
            )}

            {statusMessage?.success ? (
                <p className='text-center text-green-400 text-sm mt-2 '>{statusMessage.message}</p>
            ) : (
                <p className='text-center text-red-400 text-sm mt-2 '>{statusMessage?.message}</p>
            )}

            <button className='submitButton'>
                Submit Changes
            </button>

            </div>

            
        </form>
    )
}
