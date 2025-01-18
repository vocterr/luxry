import { Gemstone } from '@/types'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { InitialProduct } from '../FormCreateProductPage'

export const GemstoneFormProductCreatePage = ({dropdown, setDropdown, gemstones, product, setProduct}: {dropdown: string, setDropdown: Dispatch<SetStateAction<string>>, gemstones: Gemstone[], product: InitialProduct, setProduct: Dispatch<SetStateAction<InitialProduct>>}) => {
    const [gemstoneType, setGemstoneType] = useState("");
    const openModal = () => {
        if (dropdown === "gemstone") {
            setDropdown("");
        }
        else {
            setDropdown("gemstone")
        }
    }
    
    return (
        <>
            <label htmlFor="Gemstone" className='formLabel ml-1 mb-1 mt-3'>Gemstone</label>
            <div onClick={openModal} className='relative flex items-center justify-between rounded border-2 bg-transparent h-[36px] border-gray-600 px-2 '>
                <p>{gemstoneType === "" ? "Choose a gemstone" : gemstoneType}</p>
                <IoIosArrowDown/>
                {dropdown === "gemstone" && (
                <div className='absolute z-50 bg-gradient-to-b w-full from-[#1e3a8a] to-[#2563eb] top-10 left-0 flex flex-col rounded-md p-3 '>
                    <h1 className='font-cinzel mb-6 text-center text-white text-xl pb-2 border-b border-gray-500'>List of gemstones</h1>
                    <div className='flex text-white flex-col space-y-2 w-[90%] self-center max-h-52 overflow-y-auto'>
                        {gemstones.map((gemstone) => (
                            <div onClick={() => {setProduct((prev) => ({...prev, gemstoneId: gemstone.id})); setGemstoneType(gemstone.type)}} className='flex items-center justify-between hover:bg-blue-600 rounded-md px-2 py-1 hover:scale[1.02] transition-all duration-500 cursor-pointer pb-2 border-b border-gray-800'>
                                <h1>{gemstone.type}</h1>
                                <h2 className='font-cinzel'>{gemstone.clarity}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            </div>
            
        </>
    )
}
