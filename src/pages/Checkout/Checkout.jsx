import React, { useState,useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProductCheckout from './ProductCheckout';
import { ToastContainer,toast } from 'react-toastify';


const steps = [
  { label: 'Address', component: <Step1 /> },
  { label: 'Payments', component: <Step2 /> },
  { label: 'Completion', component: <Step3 /> },

];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const submit = () => toast.success('Payment Success!!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  

  return (
    <div className="w-full flex justify-center items-center h-full mt-20 mb-6">
    <ToastContainer />
      <div className="w-full flex flex-col  px-2 md:px-10 lg:px-10 xl:px-20 py-8">
        <div className="mb-4">
         
          {/* <div className="flex justify-center items-center max-w-screen w-1/2  mb-6">
            {steps.map((step, index) => (
              <>
              
              <div
                key={index}
                className={`w-6 h-6 text-sm font-bold px-2 pt-1  mx-3 text-center rounded-full ${
                  index === currentStep ? 'bg-green-500 text-white'  : 'bg-gray-300'
                }`}
              >
               {index+1}
                </div>
                
                <div className={`mr-1 ${
                  index === currentStep ? 'text-green-500' : 'text-gray-300'
                }`} > {step.label}</div>
                {index < 2 && (
                <div
                  className={`flex-grow w-full   border-t-2 ${
                    index <= currentStep ? 'border-green-500' : 'border-gray-300'
                  }`}
                />
              )}
                </>
            ))}
          </div> */}
           <div className="w-full flex  px-8 md:px-28 sm:px-10 justify-center" >
          
              <ol className="flex items-center w-full mb-10  text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                {steps.map((step, index) => (
                  <>
                    {index <=2 && (
                      <li key={index}  className={`flex items-center 
                      ${index === currentStep ? 'text-green-600 after:border-green-200' : 'text-gray-600 after-border-gray-200'},
                      ${index < 2 ? 'w-full md:w-full after:border-b after:border-1 after:w-full  after:h-1  after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ' : ''} `}>
                          <span 
                          className={`flex items-center 
                          ${index < 2 ? 'sm:after:content-['/']  after:mx-2 after:text-gray-200 after:hidden' : '' }
                          `}>
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                              </svg>
                              <span className=" sm:inline-flex sm:ml-2">{step.label}</span>
                          </span>
                      </li>
                )
                  
                  }
                  </>
                ))}
              </ol>
           </div>
        
          {/* Current step component */}
          {/* <div className="flex  flex-col md:flex-row w-full items-start">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  items-center justify-center text-center flex">
                <ProductCheckout />
            </div>
            <div className="w-full   md:w-1/2 lg:w-1/2 xl:w-1/2 items-center text-center flex flex-col justify-center">
              
            
            </div>
            
          </div>    */}
          {steps[currentStep].component}
         <div className="w-full bg-white">
            <div className="w-screen flex flex-col md:flex-row lg:flex-row xl:flex-row items-center py-8  scroll-p-2 bg-opacity-80  fixed bg-gray-100  bg-blur backdrop-blur-sm border-[1px] border-gray-300 bottom-0 left-0 px-10 ">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pb-3">
                <p className="text-sm text-slate-800">I agree to all the terms and conditions by proceeding this</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row items-end">
                  {currentStep > 0 && (
                    <button
                      className="w-full px-4 mx-4 py-2 bg-slate-600 text-white rounded"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </button>
                  )}

                  {currentStep < steps.length - 1 && (
                    <button
                      className="px-4 py-2 mx-4 bg-slate-800 text-white w-full rounded"
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                  )}

                  {currentStep === steps.length - 1 && (
                    <button
                      className="px-4 py-2 mx-4 bg-slate-800 text-white w-full rounded"
                      onClick={submit}
                    >
                      Submit
                    </button>
                  )}
              </div>
            
            </div>
          </div>     
        </div>

        {/* Navigation buttons */}
      
      </div>
    </div>
  );
};





export default Checkout;