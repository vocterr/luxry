import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react'
import { FiImage } from 'react-icons/fi'

export const ImageFormProductCreatePage = ({setImage}: {setImage: Dispatch<SetStateAction<File | null>>}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleImageUpload = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        }
    }
    return (
        <>
            <button type='button' onClick={handleImageUpload} className='mt-6 flex items-center space-x-2 text-lg font-cinzel justify-center bg-blue-500 hover:bg-blue-500/90 transition-all duration-500 hover:scale-[1.03] py-2 rounded-md w-[60%] self-center font-bold text-black shadow-md shadow-gray-800'>
                <h1>Add Image</h1>
                <FiImage className='h-5 w-5' />
            </button>

            <input
                className='hidden'
                type='file'
                ref={inputRef}
                onChange={handleFileChange}
            />
        </>
    )
}
