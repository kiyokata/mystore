import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
export default function Drawer({  isOpen, setIsOpen }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
    
  return (
    <div 
        // className="p-6 fixed top-0 right-0 overflow-y-auto bg-white w-80 h-screen translate-x-full transition-transform duration-1000 "
        className={
          "p-6 fixed top-0  right-0 overflow-y-auto z-40 bg-white w-80 h-screen transform ease-in-out " +
          (isOpen
            ? " transition-transform opacity-100 duration-1000 translate-x-0  "
            : " transition-all opacity-0  duration-1000 translate-x-full  ")
      }
    >
       <h5 className="text-base font-semibold text-gray-950 uppercase dark:text-gray-400">Menu</h5>
            <button type="button"   onClick={() => {
          setIsOpen(false);
        }}  className="text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center " >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
        <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
                <li>
                    <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-950 hover:bg-gray-100 ">
                    <svg aria-hidden="true" className="w-6 h-6 text-slate-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-950" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span className="ml-3 text-slate-800 font-light">Home</span>
                    </Link>
                </li>
                <li>
                    <button type="button" onClick={toggleDropdown} className="flex items-center w-full p-2 text-base text-slate-800 transition duration-75 rounded-lg group hover:bg-gray-100  " >
                        <svg aria-hidden="true" className="flex-shrink-0 dark:text-gray-400 w-6 h-6 text-slate-800 transition duration-75 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 text-left font-light whitespace-nowrap">Category</span>
                        <svg className="w-6 h-6 text-slate-800 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    {setDropdownOpen &&
                      <ul 
                      className={`${ isDropdownOpen ? ' translate-y-1 opacity-100 transition-transform duration-100' : 'hidden opacity-0 transition-transform  '
                            } py-2 space-y-2 transform ease-in-out`}>
                      <li>
                          <Link href="#" className="flex items-center w-full p-2 font-light text-[#959595] transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ">Shoes</Link>
                      </li>
                      <li>
                          <Link href="#" className="flex items-center w-full p-2 font-light text-[#959595] transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ">Smth</Link>
                      </li>
                      <li>
                          <Link href="#" className="flex items-center w-full p-2 font-light text-[#959595] transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ">Smth</Link>
                      </li>
                  </ul>
                    }
                  
                </li>
                {/* <li>
                    <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-950 hover:bg-gray-100 ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-950" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap"></span>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full  dark:text-gray-300">Pro</span>
                    </Link>
                </li> */}
                {/* <li>
                    <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-950 hover:bg-gray-100 ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-950" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                    </Link>
                </li> */}
                <li>
                    <Link href="#" className="flex items-center p-2 text-gray-400 rounded-lg dark:text-gray-950 hover:bg-gray-100 ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#959595] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-950" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap font-light">Profile</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-950 hover:bg-gray-100 ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-950" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap font-light">Sign In</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-950 hover:bg-gray-100 ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-950" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap font-light">Sign Up</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  );
}
