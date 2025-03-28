import React from 'react';

const ProductCard = ({product}) => {
  const { imageUrl, title, price, isNew } = product;
  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg p-1">
    //   <img
    //     src="https://dummyimage.com/300x300/242224/474747.jpg"
    //     alt="something"
    //     className="w-full"
    //   />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">name</div>
    //     <p className="text-gray-700 text-base">description</p>
    //   </div>
    //   <div className="px-6 py-4">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    //       price 
    //     </span>
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>
    <div className="bg-white shadow-lg h-full max-w-xs rounded-lg ">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full" />
        {isNew && (
          <div className="absolute top-2 right-2 bg-red-500 font-light text-white py-1 px-2 rounded-full text-xs">Latest</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-md text-slate-800 font-light  mb-2 w-full truncate">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-slate-800 text-sm font-semibold">{price} MMK</span>
          <button className="bg-[#F2F2F2] transition-all duration-300  ease-in-out  text-[#5B5B5B] px-4 py-2 rounded-md hover:bg-gray-600 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;