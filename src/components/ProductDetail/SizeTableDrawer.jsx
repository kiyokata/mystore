import React, {useState,useEffect} from "react";
import products from './productdata.json';

const SizeTableDrawer =({  isOpen, setIsOpen }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
     
    

        //     // Add more products as needed
        //   ];
    
  return (
    <div 
        // className="p-6 fixed top-0 right-0 overflow-y-auto bg-white w-80 h-screen translate-x-full transition-transform duration-1000 "
        className={
          "p-6 fixed top-0  right-0 overflow-y-auto  z-40 bg-white   max-sm:w-screen max-lg:w-50 max-xl:w-50 h-screen transform ease-in-out " +
          (isOpen
            ? " transition-transform opacity-100 duration-500 translate-x-0  "
            : " transition-all opacity-0  duration-500 translate-x-full  ")
      }
    >
       <h5 className="text-base font-semibold text-gray-950 uppercase dark:text-gray-400">Pricelist</h5>
            <button type="button"   onClick={() => {
          setIsOpen(false);
        }}  className="text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center " >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
        <div className="py-4 overflow-y-auto">
            <table className="w-full divide-y divide-gray-200">
                <thead className="sticky ">
                    <tr>
                        <th className="px-6 py-3 max-sm:px-1 max-sm:py-1 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Size
                        </th>
                        <th className="px-6 py-3 max-sm:px-1 max-sm:py-1 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Condition
                        </th>
                        <th className="px-6 py-3 max-sm:px-1 max-sm:py-1 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Price
                        </th>
                    </tr>
                </thead>
                <tbody id="table-container">
                {products.map((product, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 max-sm:px-1 max-sm:py-1 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {product.size}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {product.condition}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {product.price}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default SizeTableDrawer;