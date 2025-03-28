import React from 'react';
import ProductCard from '../ProductCard';

const RecentlyViewed = () => {
    const products = [
        {
          id: 1,
          imageUrl: ' https://dummyimage.com/600x400/000/fff.jpg  ',
          title: 'Product 1 ',
          price: '19.99',
          isNew: true,
        },
        {
          id: 2,
          imageUrl: 'https://dummyimage.com/600x400/000/fff.jpg',
          title: 'Product 2',
          price: '24.99',
          isNew: false,
        },
        {
            id: 3,
            imageUrl: 'https://dummyimage.com/600x400/000/fff.jpg',
            title: 'Product 2',
            price: '24.99',
            isNew: false,
          },
          {
            id: 4,
            imageUrl: 'https://dummyimage.com/600x400/000/fff.jpg',
            title: 'Product 2',
            price: '24.99',
            isNew: false,
          },
        // Add more products
      ];
    return(
    <>
        <div className="flex flex-col md:flex-col mt-5 pt-5">
            <h3 className="text-2xl text-left text-slate-950 font-semibold">Recently Viewed</h3>
            <div className="grid p-1 grid-cols-2  mt-4 sm:grid-cols-2 md:grid-cold-6 lg:grid-cols-6 xl:grid-cols-4 gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3">
                {products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </>
);

}


export default RecentlyViewed;