import React from 'react'
import products from '../../components/Profile/productdata.json'
import Sidebar from '../../components/Profile/Sidebar'
const Wishlist =() =>{

    return(
        <>
            <div  className=" bg-white flex w-full max-h-full mt-10 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20  ">
                <Sidebar />
                <div className="w-full bg-gray-100  flex  flex-col h-screen mb-6  ">
                    <div className="mx-4 w-full   ">
                        <div className=" w-full  h-72 overflow-y-auto overflow-x-scroll mx-auto bg-white shadow-md rounded-lg mt-10 ">
                            <table className="w-full divide-y  overflow-y-scroll  bg-white divide-gray-200">
                                <thead className=" sticky top-0 ">
                                <tr>
                                    <th className="px-6 py-3 max-sm:px-6 max-sm:py-6 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Product Name
                                    </th>
                                    <th className="px-6 py-3 max-sm:px-6 max-sm:py-6 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Condition
                                    </th>
                                    <th className="px-6 py-3 max-sm:px-6 max-sm:py-6 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Size
                                    </th>
                                    <th className="px-6 py-3 max-sm:px-6 max-sm:py-6 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                    </th>
                                    <th className="px-6 py-3 max-sm:px-6 max-sm:py-6 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                    </th>
                                    <th className="px-6 py-3 max-sm:px-6 max-sm:py-6 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                   Order Status
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
                                            {product.size}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            {product.price}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            {product.type}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            {product.status}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Wishlist;