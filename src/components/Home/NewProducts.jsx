import React from 'react';
import PhotoGrid from '../PhotoGrid';

const ProductGrid = () => {
  return (
    <div className="bg-gray-100 p-6  h-screen sm:h-full md:h-screen lg:h-screen xl:h-screen scroll-smooth max-w-full ">
         <div class="grid md:grid-cols-2 sm:grid-cols-1 mt-10 -mb-10">
            <div class="flex items-center flex-col justify-items-center justify-center  p-4">  
                <div className="text-center sm:text-right">
                    <h1 className="text-6xl font-serif font-bold text-gray-950 text-center"> Today's Pick</h1>
                    <a href="/" className=" text-left md:text-center">
                    <span className="mr-1 text-xl text-gray-500 hover:text-gray-950 ease-in-out duration-100 transition-all font-serif text-right">Browse Here</span>
                    </a>
                </div>       
            </div>               
            <PhotoGrid  />
        </div>
    </div>
   



    // <div class="md:p-10">
    //    <div className="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    //     {products.map((product) => (
    //       <ProductCard key={product.id} product={product} />
    //     ))}
    //   </div>
    // </div> 
   
  );
};

export default ProductGrid;
