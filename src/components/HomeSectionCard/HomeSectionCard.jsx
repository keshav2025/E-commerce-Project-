import React from 'react';

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer border-black  flex flex-col items-center justify-between w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg mx-3 border border-black">
      
     
      <div className="h-56 w-full overflow-hidden">
        <img
          className="object-cover object-top w-full h-full transition-transform duration-300 hover:scale-110"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      
      <div className="p-4 w-full text-center space-y-1">
        <h3 className="text-lg font-bold text-gray-800">{product.brand}</h3>
        <p className="text-sm text-gray-600">
         {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
