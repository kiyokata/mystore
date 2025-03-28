import React,{useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SizeTableDrawer from './SizeTableDrawer';

const ProductInformation = () => {
  // Mock product details data
  const [isOpen, setIsOpen] = useState(false);
  const product = {
    id: 1,
    name: 'Example Product',
    price: 1000000,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ',
    // Add more product properties as needed
  };

  const productImages = [
    { id: 1, src: require('../../assets/products/paranoise3.png'), alt: 'Image 1' },
    { id: 2, src: require('../../assets/products/para-noise-2.avif'), alt: 'Image 2' },
    { id: 3, src: require('../../assets/products/para-noise-1.avif'), alt: 'Image 3' },

    // Add more images as needed
  ];
 
  return (
        <div className="container">
            <div className="flex flex-col lg:flex-row">
                {isOpen && <div className="backdrop z-10"></div>}
                <SizeTableDrawer isOpen={isOpen} setIsOpen={setIsOpen}   />
                <div className="  w-full   rounded-lg overflow-hidden">
                    <Carousel autoPlay={true} 
                     renderArrowPrev={(clickHandler, hasPrev) => {
                        return (
                          <div
                            className={`${
                              hasPrev ? 'absolute' : 'hidden'
                            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                            onClick={clickHandler}
                          >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                            </svg>
                          </div>
                        );
                      }}
                      renderArrowNext={(clickHandler,hasNext) => {return( 
                        <div
                        className={`${
                            hasNext ? 'absolute' : 'hidden'
                          } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                          onClick={clickHandler}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                      );
                    }}
                    // renderIndicator={(clickHandler,index
                    //     ) =>{
                    //     return(
                    //         <div  onClick={clickHandler} className="bottom-0 items-center rounded-full h-5 w-5 justfy-center p-5 opacity-30 hover:opacity-100 cursor-pointer z-20 bg-black">

                    //         </div>
                    //     )
                    // }}
                    showThumbs={false} showIndicators={true} infiniteLoop={true}>
                        {productImages.map((image) => (
                            <div key={image.id}>
                            <img src={image.src} alt={image.alt} className="w-full h-auto object-contain  rounded-lg" />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className=" w-full   flex flex-col items-start pt-1 md:pl-8">
                    
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <span className="text-gray-400  text-sm pt-1 pb-3">Jordan b1 | 8834579</span>
                    <hr className=" h-3 border-gray-100 w-full border-b-1" />
                    <div className="grid grid-cols-2 w-full divide-x-2 gap-1">
                    <div className="px-2 flex flex-col items-center">
                        <span className="text-left text-sm font-semibold text-slate-800 mb-1">Starting Price</span>
                        <button type="button" onClick={() => setIsOpen(true)}  className="text-gray-500 text-left font-semibold  text-xl max-sm:text-lg mb-4">{product.price} MMK</button>
                    </div>
                    <div className="px-2 flex flex-col items-center">
                        <span className="text-left text-sm font-semibold text-slate-800 mb-1">Highest Price</span>
                        <button type="button" onClick={() => setIsOpen(true)}  className="text-gray-500 text-left font-semibold  text-xl max-sm:text-lg mb-4">{product.price} MMK</button>
                    </div>
                    </div>
                    <hr className=" h-3 border-gray-100 w-full border-b-1" />
                    <span className="text-left text-sm font-semibold text-slate-800 mb-4">Product Condition</span>
                    <div className="grid grid-cols-2 w-full mb-4 ">
                    <div className="text-center w-full flex flex-col justify-center items-center">
                        <div className="rounded-full bg-green-500 w-50 text-white pt-2 pb-2 px-4   font-mono font-thin text-xs">Brand New </div>
                        <p className="text-sm text-gray-500 text-center mt-3">New Product</p>
                    </div>
                    <div className="text-center w-full flex flex-col justify-center items-center">
                        <div className="rounded-full bg-gray-50 w-50 text-gray-200 pt-2 pb-2 px-4 font-mono font-thin text-xs">Preowned </div>
                        <p className="text-sm text-gray-500 text-center mt-3">Used Product</p>
                    </div>
                    </div>
                
                    <hr className=" mt-1 h-3 border-gray-100 w-full border-b-1" />
                    <span className="text-left text-sm font-semibold text-slate-800 mb-4">Shipping Options</span>
                    <div className="flex items-start flex-row w-full">
                    <div className="mr-2 rounded-full bg-gray-200 p-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-slate-500 w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-left text-lg font-semibold text-slate-800 ">Fast Delivery</p>
                        <p className="text-left text-sm font-light text-slate-800 mt-1">Speedy Delivery with fast service</p>
                    </div>
                    </div>
                    <div className="flex items-start flex-row w-full mt-5 mb-4">
                    <div className="mr-2 rounded-full bg-gray-200 p-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-slate-500 w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="text-left text-lg font-semibold text-slate-800 ">Premium Delivery</p>
                        <p className="text-left text-sm font-light text-slate-800 mt-1">Speedy Delivery with fast service</p>
                    </div>
                    </div>
                    <hr className=" h-3 border-gray-100 w-full mt-4 border-b-1" />
                    <div className="grid grid-cols-1 w-full justify-center">
                    <div className="px-2 w-50">
                        <button className="bg-green-500 w-full text-white py-2 px-4 rounded-lg hover:bg-green-200 hover:text-green-900">Buy Now</button>
                    </div>
                    </div>      
                </div>
            </div>
            <div className="container my-20 py-10">
                <h5 className="text-2xl font-semibold my-5 pt-5 text-slate-700 text-center pb-20">Product Details</h5>
                <div className="grid grid-cols-5 gap-2 max-sm:grid-cols-2 mt-5">
                    <div className="bg-[#f9f9f9] border-gray-950 border-3 px-3 py-2 w-full flex flex-col justify-center items-center">
                        <h5 className="text-sm  text-[#959595]  text-center font-semibold mb-3 ">Brand Name</h5>
                        <h5 className="text-xl w-full text-center truncate  text-[#747474]  font-light">Jordan</h5>
                    </div>
                    <div className="bg-[#f9f9f9] border-gray-950 border-3 px-3 py-2 w-full justify-center flex flex-col items-center">
                        <h5 className="text-sm  text-[#959595]  text-center font-semibold mb-3 ">Color</h5>
                        <h5 className="text-xl w-full text-center truncate  text-[#747474]  font-light">Silver Green</h5>
                    </div>
                    <div className="bg-[#f9f9f9] border-gray-950 border-3 px-3 py-2 w-full justify-center flex flex-col items-center">
                        <h5 className="text-sm  text-[#959595]  text-center font-semibold mb-3 ">SKU</h5>
                        <h5 className="text-xl w-full text-center truncate  text-[#747474]  font-light">Jordan b1 | 8834579</h5>
                    </div>
                    <div className="bg-[#f9f9f9] border-gray-950 border-3 px-3 py-2 w-full justify-center flex flex-col items-center">
                        <h5 className="text-sm  text-[#959595]  text-center font-semibold mb-3 ">Release Date</h5>
                        <h5 className="text-xl w-full text-center truncate  text-[#747474]  font-light">23/11/2021</h5>
                    </div>
                 
                    <div className="bg-[#f9f9f9] border-gray-950 border-3 px-3 py-2 w-full justify-center flex flex-col items-center">
                        <h5 className="text-sm  text-[#959595]  text-center font-semibold mb-3 ">Retail Price</h5>
                        <h5 className="text-xl w-full text-center truncate  text-[#747474]  font-light">---</h5>
                    </div>
                </div>
            </div>
        </div>
    
    
  );
};

export default ProductInformation;