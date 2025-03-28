import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import AddressDrawer from '../../components/Checkout/Drawers/Addressdrawer';
import PaymentDrawer from '../../components/Checkout/Drawers/PaymentDrawer';
import ProductCheckout from './ProductCheckout';
const Step1 = () => {
  const [isAddressDrawerOpen, setAddressDrawerOpen] = useState(false);
  const [isPaymentDrawerOpen, setPaymentDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (isAddressDrawerOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      if (isPaymentDrawerOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    };
   
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

    return(
      <div className="flex  flex-col md:flex-row w-full items-start">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  items-center justify-center text-center flex">
                <ProductCheckout />
            </div>
            <div className="w-full   md:w-1/2 lg:w-1/2 xl:w-1/2 items-center text-center flex flex-col justify-center">
                    <div className="bg-white border-1 px-0 md:px-0 lg:px-4 xl:px-4 mb-4 w-full ">
                    <AddressDrawer isAddressDrawerOpen={isAddressDrawerOpen} setIsAddressDrawerOpen={setAddressDrawerOpen}/>
                    <PaymentDrawer isPaymentDrawerOpen={isPaymentDrawerOpen} setIsPaymentDrawerOpen={setPaymentDrawerOpen}/>
                    {isAddressDrawerOpen && <div className="backdrop z-10"></div>}
                    {isPaymentDrawerOpen && <div className="backdrop z-10"></div>}
                <h2 className="  bg-white  font-semibold my-4  mx-4 text-center mb-4">Checkout</h2>
                <div className="flex flex-row w-full hover:opacity-40 hover:bg-gray-100 pt-4">
                  <div className=" w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-1 md:px-4 mb-4">
                    <div className="flex flex-row items-start justify-start ">
                      <div className="mr-2 text-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="tex-sm truncate text-left text-slate-800 font-light">Address</h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
                      <div className="flex w-full flex-row items-center justify-end ">
                        <button onClick={()=>{setAddressDrawerOpen(true)}} className="w-full text-slate-800 text-right truncate whitespace-nowrap overflow-hidden"> 93 Talard Krompootharas Plaengnam Sampanthawong Samphantha Wong</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2  w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    
                  </div>
                </div>
                
                {/*shipping method */}
                <div className="flex flex-row w-full hover:opacity-40 hover:bg-gray-100 pt-4">
                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-0 md:px-4 mb-4">
                    <div className="flex flex-row items-start justify-start ">
                      <div className="mr-2 text-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-sm truncate text-left text-slate-800 font-light">Delivery Method</h5>
                      </div>
                    </div>  
                  </div>
                  <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  ">
                      <div className="flex w-full flex-row items-center justify-end ">
                        <button   className="w-full text-slate-800 text-right font-semibold truncate whitespace-nowrap overflow-hidden"> Standard Delivery</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2  w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    
                  </div>
                </div>
                  {/*payment method */}
                  <div className="flex flex-row w-full hover:opacity-40 hover:bg-gray-100 pt-4">
                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-0 md:px-4 mb-4">
                    <div className="flex flex-row items-start justify-start ">
                      <div className="mr-2 text-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-sm truncate text-left text-slate-800 font-light">Payment Method</h5>
                      </div>
                    </div>  
                  </div>
                  <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  ">
                      <div className="flex w-full flex-row items-center justify-end ">
                        <button  onClick={()=>{setPaymentDrawerOpen(true)}} className="w-full font-semibold text-slate-800 text-right truncate whitespace-nowrap overflow-hidden"> KBZ pay</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2  w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    
                  </div>
                </div>
                  {/*total amount */}
                <div className="flex flex-row w-full  pt-4">
                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-0 md:px-4 mb-4">
                    <div className="flex flex-col items-start justify-start ">
                    
                        <h5 className="text-sm truncate text-left text-slate-800 font-light mb-4">Total amount</h5>
                        <h5 className="text-sm truncate text-left text-slate-800 font-light mb-4">Delivery Fee</h5>
                        <h5 className="text-sm truncate text-left text-slate-800 font-light mb-4">Delivery Fee</h5>
                        <h5 className="text-xl truncate text-left text-green-500 font-semibold">Total Cost</h5>
                      
                    </div>  
                  </div>
                  <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  ">
                      <div className="flex w-full flex-col items-end justify-end ">
                      <h5 className="text-sm truncate text-right text-slate-800 font-light mb-4">500,0000 MMK</h5>
                      <h5 className="text-sm truncate text-right text-slate-800 font-light mb-4">500,0000 MMK</h5>
                      <h5 className="text-sm truncate text-right text-slate-800 font-light mb-4">500,0000 MMK</h5>
                      <h5 className="text-xl truncate text-right text-slate-800 font-light mb-4">500,0000 MMK</h5>
                      </div>
                    
                  </div>
                </div>
              </div>   
            
            </div>
            
          </div>   
    
      
    )
   
    };
  export default Step1;