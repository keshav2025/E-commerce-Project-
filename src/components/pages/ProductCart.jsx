import React from 'react';

const ProductCart = ({Product}) => {
  return (
    <div className="ProductCart w-[14rem] m-4 mx-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg">
      <div className="h-[15rem]">
        <img
          className="h-full w-full object-cover object-center transition-all duration-300 hover:scale-105"
          src={Product.imageUrl}
          alt="Product Image"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200">
         {Product.brand}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {Product.title}
        </p>
        <div className="mt-3 flex items-center">
          <span className="text-xl font-bold text-green-600">{Product.price}</span>
          <span className="text-sm text-gray-400 line-through ml-3">{Product.discountedPrice}</span>
          <span className="text-sm text-red-500 ml-3 font-medium">{Product.discountPersent}%</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;

