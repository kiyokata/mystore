import React,{useState} from 'react'
import productimage from '../../assets/products/jordan-1.jpg'
const ProductCheckout = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const decrement = () => {
      setCount(prevCount => prevCount - 1);
    };


    return(
      <div className="bg-white  border-[1px]  border-gray-300  px-0 md:px-0 lg:px-4 xl:px-4 w-full ">
        <div className="flex flex-row w-full justify-center items-center mb-6  px-4">
            <div className="w-1/4 h-auto mr-3">
                <img className="object-cover h-auto overflow-hidden md:object-scale-down pt-4" src={productimage} alt="img"/>
            </div>
            <div className="w-2/4 flex flex-col">
                <p className="tex-sm  pt-4  text-left text-slate-800 font-semibold">Adidas Paranoise</p>
                <p className="tex-sm  pt-2  text-left text-slate-800 break-words font-light">Paranoise | 110011</p>
            </div>
            <div className="w-1/3 flex items-end justify-end">
                <button
                    className="bg-gray-200 hover:bg-gray-700 hover:text-white transition-all duration-200 text-slate-800 font-bold py-1 px-2 rounded"
                    onClick={decrement}
                    >
                    -
                </button>
                <input
                    type="text"
                    value={count}
                    className="text-center w-10 p-1 border-gray-300"
                    readOnly
                />
                <button
                    className="bg-gray-200 hover:bg-gray-700 hover:text-white transition-all duration-200 text-slate-800 font-bold py-1 px-2 rounded"
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>
        <hr className=" h-3 border-gray-200 w-full mt-4 border-b-1" />
           {/*total amount */}
           <div className="flex flex-row w-full  pt-4 px-8">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-0  mb-8  ">
            <div className="flex flex-col items-start justify-start ">
            
                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Price</h5>
                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Deposit</h5>
                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Size</h5>
                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Condition</h5>
                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Equipment</h5>
                <h5 className="text-sm truncate text-left text-slate-800 font-light mb-6">Other Images</h5>              
            </div>  
          </div>
          <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  px-0 mb-8 ">
              <div className="flex w-full flex-col items-end justify-end ">
                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">500,0000 MMK</h5>
                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">500,0000 MMK</h5>
                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">Good</h5>
                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">500,0000 MMK</h5>
                <h5 className="text-sm truncate text-right text-slate-800 font-light mb-6">500,0000 MMK</h5>
                <div className="flex flex-row ">
                    <div className="w-1/3 mx-1 rounded-full h-auto">
                        <img className="object-contain md:object-scale-down " src={productimage} alt="img"/>
                    </div>
                    <div className="w-1/3 mx-1 rounded-full h-auto">
                        <img className="object-contain md:object-scale-down " src={productimage} alt="img"/>
                    </div>
                    <div className="w-1/3 mx-1 rounded-full h-auto">
                        <img className="object-contain md:object-scale-down " src={productimage} alt="img"/>
                    </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    )
   
    };
  export default ProductCheckout;