import { Material } from '@/types'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { InitialProduct } from '../FormCreateProductPage'

export const MaterialFormCreateProduct = ({dropdown, setDropdown, materials, product, setProduct}: {dropdown: string, setDropdown: Dispatch<SetStateAction<string>>, materials: Material[], product: InitialProduct, setProduct: Dispatch<SetStateAction<InitialProduct>>}) => {
    const [materialName, setMaterialName] = useState("");
    const openModal = () => {
        if (dropdown === "material") {
            setDropdown("");
        }
        else {
            setDropdown("material")
        }
    }
    
    return (
        <>
            <label htmlFor="Material" className='formLabel ml-1 mb-1 mt-3'>Material</label>
            <div onClick={openModal} className='relative flex items-center justify-between rounded border-2 bg-transparent h-[36px] border-gray-600 px-2 '>
                <p>{materialName === "" ? "Choose a Material" : materialName}</p>
                <IoIosArrowDown/>
                {dropdown === "material" && (
                <div className='absolute z-50 bg-gradient-to-b w-[102%] -translate-x-1/2 from-[#1e3a8a] to-[#2563eb] top-10 left-1/2 flex flex-col rounded-md p-3 '>
                    <h1 className='font-cinzel mb-6 text-center text-white text-xl pb-2 border-b border-gray-500'>List of Materials</h1>
                    <div className='flex text-white flex-col space-y-2 w-[90%] self-center max-h-52 overflow-y-auto'>
                        {materials.map((material) => (
                            <div onClick={() => {setProduct((prev) => ({...prev, materialId: material.id})); setMaterialName(material.name)}} className='flex items-center justify-between pb-2 border-b hover:bg-blue-600 rounded-md px-2 py-1 hover:scale[1.02] transition-all duration-500 cursor-pointer border-gray-800'>
                                <h1>{material.name}</h1>
                                <h2 className='font-cinzel'>{material.purity}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            </div>
            
        </>
    )
}
