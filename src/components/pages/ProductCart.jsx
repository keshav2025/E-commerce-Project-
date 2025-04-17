import React from 'react'

const ProductCart = () => {
  return (
    <div className='ProductCart w-[15rem] m-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-gray-200 rounded-lg overflow-hidden'>
      <div className='h-[20rem]'>
        <img
          className='h-full w-full object-cover object-center'
          src='https://m.media-amazon.com/images/I/71VCxuyXp0L._AC_UL640_FMwebp_QL65_.jpg'
          alt='Product Image'
        />
      </div>
      <div className='p-3'>
        <h3 className='text-lg font-semibold text-gray-800'>CoolBreeze Split AC</h3>
        <p className='text-sm text-gray-500 mt-1'>1.5 Ton 5 Star Inverter Split AC with Auto Clean</p>
        <div className='mt-2'>
          <span className='text-lg font-bold text-green-600'>₹32,499</span>
          <span className='text-sm text-gray-400 line-through ml-2'>₹42,999</span>
          <span className='text-sm text-red-500 ml-2'>(24% OFF)</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
