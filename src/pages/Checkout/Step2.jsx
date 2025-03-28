import React from 'react'
import Qrcode from '../../assets/products/qrcode.png'
import ProductCheckout from './ProductCheckout';
const Step2 = () => {
    return(
      <div className="flex  flex-col md:flex-row w-full items-start">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  items-center justify-center text-center flex">
                <ProductCheckout />
            </div>
            <div className="w-full   md:w-1/2 lg:w-1/2 xl:w-1/2 items-center text-center flex flex-col justify-center">
              <div className="bg-white border-1 px-0 md:px-0 lg:px-4 xl:px-4 mb-4 w-full ">
                <h2 className="   font-semibold my-4  mx-4 text-center mb-4">Bank Transfer</h2>
                <hr className=" h-3 border-gray-200 w-full mt-4 border-b-1" />
                <p className="text-sm text-slate-800 font-light "> Scan this QR code below for payment.</p>
                <div className="flex items-center justify-center my-8">
                  <div className="w-1/3">
                    <img className="object-cover md:object-scale-down" src={Qrcode} alt="arcode" />
                  </div>            
                </div>
              </div>
            
            </div>
            
          </div> 
    
    )
   
    };
  export default Step2  ;