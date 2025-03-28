import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="hidden md:block lg:block xl:block w-1/5 bg-gray-50 divide-y   h-screen ">
    {/* Sidebar content */}
        <div className="">
            <div className="flex items-center ">
              <div className=" flex flex-col items-center  w-full text-center">
        
                <div className="py-3 text-center w-full flex flex-row px-10 items-center justify-items-center   hover:bg-gray-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"
                      />
                    </svg>
                  <Link
                    to="/"
                    className="text-slate-800  text-left font-light px-5 py-2 truncate w-full flex flex-col items-start justify-items-start "
                    >
                    Profile
                    <p className="text-xs text-gray-400 text-left"> This is smol pepe</p>
                  </Link>
                  
                </div>
                <div className="py-3 text-center w-full flex flex-row px-10 items-center justify-items-center   hover:bg-gray-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4zm2-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.586l-4.707 4.707a1 1 0 0 1-1.414 0L7.586 14H4a2 2 0 0 1-2-2V8zm-1-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1.586l-3.707 3.707a1 1 0 0 1-1.414 0L5.586 14H4a1 1 0 0 1-1-1V5z"
                      />
                    </svg>
                  <Link
                    to="/profile/wishlist"
                    className="text-slate-800  text-left font-light px-5 py-2 truncate w-full flex flex-col items-start justify-items-start "
                  >
                    
                    Wishlist
                    <p className="text-xs text-gray-400 text-left"> This is smol pepe</p>
                  </Link>
                  
                </div>
                
                <div className="py-3 text-center w-full flex flex-row px-10 items-center justify-items-center   hover:bg-gray-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H5V5zm0 4h10v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9zm3 2a1 1 0 0 0 2 0v-1a1 1 0 1 0-2 0v1z"
                      />
                      <path d="M9 13h2v3H9v-3z" />
                    </svg>
                  <Link
                    to="/"
                    className="text-slate-800  text-left font-light px-5 py-2 truncate w-full flex flex-col items-start justify-items-start "
                  >
                    Orders
                    <p className="text-xs text-gray-400 text-left"> This is smol pepe</p>
                  </Link>
                  
                </div>
                <div className="py-3 text-center w-full flex flex-row px-10 items-center justify-items-center   hover:bg-gray-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm2-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6z"
                      />
                      <path d="M9 13h2v3H9v-3zm0-8h2v6H9V5z" />
                    </svg>
                  <Link
                    to="/"
                    className="text-slate-800  text-left font-light px-5 py-2 truncate w-full flex flex-col items-start justify-items-start "
                  >
                   
                    Customers
                    <p className="text-xs text-gray-400 text-left"> This is smol pepe</p>
                  </Link>
                  
                </div>
                <div className="py-3 text-center w-full flex flex-row px-10 items-center justify-items-center   hover:bg-gray-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm2-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6z"
                      />
                      <path d="M9 13h2v3H9v-3zm0-8h2v6H9V5z" />
                    </svg>
                  <Link
                    to="/"
                    className="text-slate-800  text-left font-light px-5 py-2 truncate w-full flex flex-col items-start justify-items-start "
                  >
                   
                    Customers
                    <p className="text-xs text-gray-400 text-left"> This is smol pepe</p>
                  </Link>
                  
                </div>
                <div className="py-3 text-center w-full flex flex-row px-10 items-center justify-items-center   hover:bg-gray-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm2-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6z"
                      />
                      <path d="M9 13h2v3H9v-3zm0-8h2v6H9V5z" />
                    </svg>
                  <Link
                    to="/"
                    className="text-slate-800  text-left font-light px-5 py-2 truncate w-full flex flex-col items-start justify-items-start "
                  >
                   
                    Customers
                    <p className="text-xs text-gray-400 text-left"> This is smol pepe</p>
                  </Link>
                  
                </div>
                <div className="py-3 text-center w-full flex flex-row px-10 items-center justify-items-center   hover:bg-gray-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm2-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6z"
                      />
                      <path d="M9 13h2v3H9v-3zm0-8h2v6H9V5z" />
                    </svg>
                  <Link
                    to="/"
                    className="text-slate-800  text-left font-light px-5 py-2 truncate w-full flex flex-col items-start justify-items-start "
                  >
                   
                    Customers
                    <p className="text-xs text-gray-400 text-left"> This is smol pepe</p>
                  </Link>
                  
                </div>
              </div>
            </div>
        </div>

  </div>
  );
};

export default Sidebar;