import React from 'react';
import products from './productdata.json';
const SaleTable = () =>{



return(
<>
    <div className="container my-20">
        <div className="grid grid-cols-5 w-full max-sm:grid-cols-1 gap-4 m-4">
            <div className=" w-full sm:col-auto bg-[#f9f9f9] border-gray-950 border-3 px-3 py-2 p-4 rounded-sm text-center flex flex-col justify-center ">
                <h5 className="text-sm  w-full text-[#959595]  text-center font-semibold mb-3 ">Items Sold</h5>
                <h5 className="text-xl w-full truncate  text-[#747474]  font-bold">1000000 </h5>
            </div>
            <div className="col-span-4 md:col-span-4 w-full max-h-60 bg-[#f9f9f9] px-3 pb-1  overflow-y-scroll">
                <table className="w-full divide-y divide-gray-200">
                    <thead className="sticky top-0 ">
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
    </div>
   
</>
);


}
export default SaleTable;