import React from 'react'

const Product = ({product}) => {

    return (
        <article
            className='flex flex-col gap-5 border-2 border-gray-400 rounded-lg max-w-80 overflow-hidden '
        >
            <img src="https://placehold.co/600x400" alt="Placeholder Image" 
                className='w-full h-auto'
            />

            <div
                className='flex-grow p-4 flex flex-col justify-between gap-5 text-lg'
            >
                <h3 className='font-bold text-xl min-h-16'>{product.title}</h3>

                <div className='flex justify-between'>
                   <div className='flex items-center gap-2'>
                        <p>₹ {product.price}</p>
                        <p>Off {product.discount}%</p>
                   </div>
                    <p>
                        <span className='text-gray-600'>
                            rating:
                        </span> 
                           {product.rating}
                        <span className='font-bold text-xl text-green-600'> ★ </span>
                    </p>
                </div>
            </div>

        </article>
    )
}

export default Product
