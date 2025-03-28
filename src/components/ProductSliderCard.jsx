import React from 'react';

const ProductCard = ({ product }) => {
  const { imageUrl, title, price, isNew } = product;

  return (
    <div className=" max-w-sm bg-white shadow-lg rounded-lg   mx-5">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full" />
        {isNew && (
          <div className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded-full text-xs">
            New
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">${price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;