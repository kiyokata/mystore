import React, {useState} from "react";
// import {Link} from 'react-router-dom';
import Kbzpay from '../../../assets/logos/kbzpay.webp';
import Mpu from '../../../assets/logos/mpucard.png';
import Mastercard from '../../../assets/logos/mastercard.png';

const PaymentDrawer = ({  isPaymentDrawerOpen, setIsPaymentDrawerOpen }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
    //   const [selectedCard, setSelectedCard] = useState(null);

    //   const handleCardSelection = (cardType) => {
    //     setSelectedCard(cardType);
    //   };
  return (
    <div 
        // className="p-6 fixed top-0 right-0 overflow-y-auto bg-white w-80 h-screen translate-x-full transition-transform duration-1000 "
        className={
          "p-6 fixed top-0  right-0 overflow-y-auto z-40 bg-white w-full md:w-[50%] lg:w-[50%] xl:w-[50%] h-screen transform ease-in-out " +
          (isPaymentDrawerOpen
            ? " transition-transform opacity-100 duration-1000 translate-x-0  "
            : " transition-all opacity-0  duration-1000 translate-x-full  ")
      }
    >
       <h5 className="text-base font-semibold text-slate-950 uppercase">Choose Payment</h5>
            <button type="button"   onClick={() => {
          setIsPaymentDrawerOpen(false);
        }}  className="text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center " >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
        <div className="py-4 overflow-y-auto">
            <form className="bg-white w-full py-32   rounded px-2 md:px-8 lg:px-8 xl:px-8 pt-6 pb-8 mb-6">
                <div className="flex items-center mb-6 ">
                    <input type="radio" id="payment-kbzpay" name="payment" value="payment-kbzpay" className="hidden peer" required  />
                    <label for="payment-kbzpay" className="inline-flex  transition-opacity duration-500 ease-in-out items-center justify-between w-full p-5 text-slate-800 bg-gradient-to-br from-blue-400 to-indigo-600  rounded-lg cursor-pointer  peer-checked:border-2 peer-checked:shadow peer-checked:border-slate-600 peer-checked:text-slate-600  ">                           
                        <div className="flex flex-row items-center justify-start w-full">
                            <div className="w-16 h-16 mr-2 md:mr-4 lg:mr-4 xl:mr-8">
                                <img className="object-contain md:object-scale-down" src={Kbzpay} alt="kbzpay"/>
                            </div>
                            <div className="">
                                <p className="w-full text-lg font-semibold text-white text-left">KBZpay</p>
                                <p className="w-full text-left text-sm text-white">Payment with smth smth</p>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="flex items-center mb-6">
                    <input  type="radio" id="payment-mpu" name="payment" value="payment-mpu" className="hidden peer"   />
                    <label for="payment-mpu" className="inline-flex transition duration-500  ease-linear items-center justify-between w-full p-5 text-white
                        bg-gradient-to-tr from-yellow-200 via-blue-500 to-blue-700    rounded-lg cursor-pointer  
                        peer-checked:border-2 peer-checked:shadow peer-checked:bg-gradient-from-tr peer-checked:from-gray-300 peer-checked:via-slate-400 peer-checked:to-slate-300
                         peer-checked:text-slate-950  
                     disabled:bg-gray-600 disabled:text-gray-100">                           
                        <div className="flex flex-row items-center justify-start  w-full">
                            <div className="w-16 h-16 mr-2 md:mr-4 lg:mr-4 xl:mr-8 flex items-center">
                                <img className="object-contain md:object-scale-down" src={Mpu} alt="mpu"/>
                            </div>
                            <div className="">
                                <p className="w-full text-lg font-semibold  text-left">MPUcard</p>
                                <p className="w-full text-left text-sm ">Payment with smth smth</p>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="flex items-center mb-6">
                    <input type="radio" id="payment-mastercard" name="payment" value="payment-mastercard" className="hidden peer"   />
                    <label for="payment-mastercard" className="inline-flex transition-opacity duration-500 ease-in-out items-center justify-between w-full p-5 text-slate-800 bg-gradient-to-tr from-red-400 via-orange-600 to-yellow-200   rounded-lg cursor-pointer   peer-checked:border-2 peer-checked:shadow peer-checked:border-slate-600 peer-checked:text-slate-600  ">                           
                        <div className="flex flex-row items-center justify-start  w-full">
                            <div className="w-16 h-16 mr-2 md:mr-4 lg:mr-4 xl:mr-8 flex items-center">
                                <img className="object-contain md:object-scale-down" src={Mastercard} alt="mpu"/>
                            </div>
                            <div className="">
                                <p className="w-full text-lg font-semibold text-white text-left">Master Card</p>
                                <p className="w-full text-left text-sm text-white">Payment with smth smth</p>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                <button
                    className="bg-gray-200 w-full hover:bg-gray-100 mx-3 transition-all duration-100 text-slate-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button" onClick={() => {
                        setIsPaymentDrawerOpen(false);}}
                >
                   Cancel
                </button>
                <button
                    className="bg-slate-800 w-full hover:bg-slate-600 transition-all duration-100  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Save    
                </button>
            
                </div>
                {/* <Link className=" mt-8 inline-block align-baseline font-semibold text-sm text-slate-400 hover:text-slate-800" href="/">
                    Forgot Password?
                </Link> */}
               
            </form>
        </div>
    </div>
  );
}
export default PaymentDrawer;