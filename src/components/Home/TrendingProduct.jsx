import React from 'react';
import ProductCard from '../ProductCard';

const TrendingProduct = ({ products }) => {
  return (
    <div className="min-h-full sm:min-h-full md:min-h-full lg:min-h-full xl:min-h-full scroll-smooth pt-5 pb-5" >
         
         <div className="flex justify-center  mt-3 sm:mt-3 md:mt-6 lg:mt-0 xl:mt-0 pt-3 sm:pt-3 md:pt-6 lg:pt-0 xl:pt-0">
          <div className="container">
            <div class="md:p-10">
            <h1 className="text-left font-bold  text-xl font-semibold text-slate-800  mb-5 mt-5 pl-3 sm:pl-3 md:pl-0 lg:pl-0 xl:pl-0" >#TRENDING</h1>
              <div className="grid p-1 grid-cols-2 sm:grid-cols-2 md:grid-cold-6 lg:grid-cols-6 xl:grid-cols-4 gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div> 
          </div>
        </div>
    </div>
   
   
  );
};

export default TrendingProduct;
