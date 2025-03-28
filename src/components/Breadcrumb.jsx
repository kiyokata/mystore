import React from 'react';
import {Link } from 'react-router-dom'
const Breadcrumb = () => {
  return (
    <div className="mb-5">
          <nav className="flex items-center text-gray-500 text-sm" aria-label="Breadcrumb">
            <div className="justify-center items-center inline-flex w-50 mr-3 p-0 ">
             
                <Link to="" className="hover:text-gray-950 text-gray-500 p-2 mr-1">Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

              
              
                <Link to="" className="mr-1 hover:text-gray-950 text-gray-500">Products</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

                
               
                <span className="mr-1 text-sm text-gray-700">Current Page</span>
               
            </div>
        </nav>
    </div>
  
  );
};

export default Breadcrumb;