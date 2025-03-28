import React from 'react';
import ProductCard from '../ProductCard';
import {Link} from 'react-router-dom'
const LatestProduct = ({ products }) => {
  return (
    <div>
         <div className="flex justify-center pb-5 sm:pb-5 md:pb-5 lg:pb-5 xl:pb-5">
          <div className="container">
            <div className="md:p-10">
              <h1 className="text-left  text-xl font-semibold text-slate-800  mb-5 mt-5 pl-3 sm:pl-3 md:pl-0 lg:pl-0 xl:pl-0" >#LatestProducts</h1>
              <div className="grid p-1 grid-cols-2 sm:grid-cols-2 md:grid-cold-6 lg:grid-cols-6 xl:grid-cols-4 gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3">
                {products.map((product) => (
                  <Link to="/products/:id">
                    <ProductCard key={product.id} product={product} />
                  </Link>
                ))}
              </div>
            </div> 
          </div>
        </div>
    </div>
   
   
  );
};

export default LatestProduct;
