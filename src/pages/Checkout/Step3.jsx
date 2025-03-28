import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Step3 = () => {
  
    return(
      <div className="w-full px-2 flex flex-col justify-center items-center">
        <ToastContainer />
        <div className="w-full  py-4 px-1 bg-whtie border-2 rounded-lg mb-2 border-gray-200">
          <div className="flex flex-col  w-full  pt-4 px-4">
                <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:-grid-cols-2 px-0  mb-8  ">
                  <div className=" px-4 py-4">
                    <p className="text-lg text-slate-800 font-semibold">Your Information</p>
                    <hr className=" h-3 border-gray-200 w-full mt-4 border-b-1" />
                    <div className="flex flex-row w-full  pt-4 px-1">
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-0  mb-8  ">
                            <div className="flex flex-col items-start justify-start ">
                            
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Name</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Email</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Phone Number</h5>            
                            </div>  
                        </div>
                        <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  px-0 mb-8 ">
                            <div className="flex w-full flex-col items-end justify-end ">
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">john doe </h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">jd123Q@gmail.com</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">123456</h5>
                            </div>         
                        </div>
                    </div> 
                  </div>
                  <div className=" px-4 py-4">
                    <p className="text-lg text-slate-800 font-semibold">Shipping Address</p>
                    <hr className=" h-3 border-gray-200 w-full mt-4 border-b-1" />
                    <div className="flex flex-row w-full  pt-4 px-1">
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-0  mb-8  ">
                            <div className="flex flex-col items-start justify-start ">
                            
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Name</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Email</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Phone Number</h5>            
                            </div>  
                        </div>
                        <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  px-0 mb-8 ">
                            <div className="flex w-full flex-col items-end justify-end ">
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">john doe </h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">jd123Q@gmail.com</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">123456</h5>
                            </div>         
                        </div>
                    </div> 
                  </div>
                  <div className=" px-4 py-4">
                    <p className="text-lg text-slate-800 font-semibold">Payment Method</p>
                    <hr className=" h-3 border-gray-200 w-full mt-4 border-b-1" />
                    <div className="flex flex-row w-full  pt-4 px-1">
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-0  mb-8  ">
                            <div className="flex flex-col items-start justify-start ">
                            
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Payment Method</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Amount</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Transaction ID</h5>            
                            </div>  
                        </div>
                        <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  px-0 mb-8 ">
                            <div className="flex w-full flex-col items-end justify-end ">
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">KBZPAY </h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">10,000 MMKs</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">123456</h5>
                            </div>         
                        </div>
                    </div> 
                  </div>
                  <div className=" px-4 py-4">
                    <p className="text-lg text-slate-800 font-semibold">Product Details</p>
                    <hr className=" h-3 border-gray-200 w-full mt-4 border-b-1" />
                    <div className="flex flex-row w-full  pt-4 px-1">
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-0  mb-8  ">
                            <div className="flex flex-col items-start justify-start ">
                            
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Name</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">SKS</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Price</h5> 
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Color</h5>    
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Type</h5>
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Condition</h5>  
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Delivery Method</h5> 
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Delivery Fee</h5>   
                                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Total Cost</h5>      
                            </div>  
                        </div>
                        <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  px-0 mb-8 ">
                            <div className="flex w-full flex-col items-end justify-end ">
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">Jordan 1 </h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">Jordan1|123456</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">100,0000 MMK</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">Silver Doe</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">Brand New</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">Brand New</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">Standard Delivery</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">10,000 MMK</h5>
                                <h5 className="text-sm truncate text-right text-slate-800 font-bold mb-6">123,4568 MMK</h5>
                            </div>         
                        </div>
                    </div> 
                  </div>
                    
                </div>
            </div>
        </div>

      </div>
    
    )
   
    };
  export default Step3;