import React, { Dispatch, SetStateAction } from 'react'
import { InitialProduct } from '../FormCreateProductPage'

export const MainInfoFormProductCreatePage = ({product, setProduct}: {product: InitialProduct, setProduct: Dispatch<SetStateAction<InitialProduct>>}) => {
  return (
    <>
        <label htmlFor="name" className='formLabel ml-1 mb-1'>Product Name</label>
            <input
                className='formInput'
                value={product.name}
                onChange={(e) => setProduct((prev) => ({ ...prev, name: e.target.value }))}
            />

            <label htmlFor="description" className='formLabel ml-1 mb-1 mt-3'>Description</label>
            <textarea
                className='formInput'
                value={product.description}
                onChange={(e) => setProduct((prev) => ({ ...prev, description: e.target.value }))}
            />

            <label htmlFor="price" className='formLabel ml-1 mb-1 mt-3'>Price ($)</label>
            <input
                type="number"
                className='formInput'
                value={product.price}
                onChange={(e) => setProduct((prev) => ({ ...prev, price: parseFloat(e.target.value) }))}
            />

            <label htmlFor="stock" className='formLabel ml-1 mb-1 mt-3'>Stock</label>
            <input
                type="number"
                className='formInput'
                value={product.stock}
                onChange={(e) => setProduct((prev) => ({ ...prev, stock: parseInt(e.target.value) }))}
            />



            <label htmlFor="weight" className='formLabel ml-1 mb-1 mt-3'>Weight</label>
            <input
                type="number"
                className='formInput'
                value={product.weight}
                onChange={(e) => setProduct((prev) => ({ ...prev, weight: parseFloat(e.target.value) }))}
            />

            <label htmlFor="carat" className='formLabel ml-1 mb-1 mt-3'>Carat</label>
            <input
                type="number"
                className='formInput'
                value={product.carat}
                onChange={(e) => setProduct((prev) => ({ ...prev, carat: parseFloat(e.target.value) }))}
            />

            <label htmlFor="dimensions" className='formLabel ml-1 mb-1 mt-3'>Dimensions (mm)</label>
            <input
                className='formInput'
                value={product.dimensions}
                onChange={(e) => setProduct((prev) => ({ ...prev, dimensions: e.target.value }))}
            />

            <label htmlFor="style" className='formLabel ml-1 mb-1 mt-3'>Style</label>
            <input
                className='formInput'
                value={product.style}
                onChange={(e) => setProduct((prev) => ({ ...prev, style: e.target.value }))}
            />

            <label htmlFor="category" className='formLabel ml-1 mb-1 mt-3'>Category</label>
            <input
                className='formInput'
                value={product.category}
                onChange={(e) => setProduct((prev) => ({ ...prev, category: e.target.value }))}
            />

            <label htmlFor="certification" className='formLabel ml-1 mb-1 mt-3'>Certification</label>
            <input
                className='formInput'
                value={product.certification}
                onChange={(e) => setProduct((prev) => ({ ...prev, certification: e.target.value }))}
            />

            <label htmlFor="Occasion" className='formLabel ml-1 mb-1 mt-3'>Occasion (separate each with ",")</label>
            <input
                className='formInput'
                value={product.occasion.join(", ")}
                onChange={(e) => setProduct((prev) => ({ ...prev, occasion: (e.target.value).split(", ").map((item) => item.trim()) }))}
            />

            <label htmlFor="careInstructions" className='formLabel ml-1 mb-1 mt-3'>Care Instructions</label>
            <textarea
                className='formInput'
                value={product.careInstructions}
                onChange={(e) => setProduct((prev) => ({ ...prev, careInstructions: e.target.value }))}
            />
    </>
  )
}
