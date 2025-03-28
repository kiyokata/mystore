import React, {useState} from "react";
// import {Link} from 'react-router-dom';

const AddressDrawer = ({  isAddressDrawerOpen, setIsAddressDrawerOpen }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
    
  return (
    <div 
        // className="p-6 fixed top-0 right-0 overflow-y-auto bg-white w-80 h-screen translate-x-full transition-transform duration-1000 "
        className={
          "p-6 fixed top-0  right-0 overflow-y-auto z-40 bg-white w-[100%] md:w-[50%] lg:w-[50%] h-screen transform ease-in-out " +
          (isAddressDrawerOpen
            ? " transition-transform opacity-100 duration-1000 translate-x-0  "
            : " transition-all opacity-0  duration-1000 translate-x-full  ")
      }
    >
       <h5 className="text-base font-semibold text-gray-950 uppercase dark:text-gray-400">Choose Your Address</h5>
            <button type="button"   onClick={() => {
          setIsAddressDrawerOpen(false);
        }}  className="text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center " >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
        <div className="py-4 overflow-y-auto">
            <form className="bg-white w-full py-32  rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-8 mt-8">
                <label className="block text-slate-800  text-left text-sm font-semibold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className=" appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value="username"

                    placeholder="Enter your full name"
                />
                </div>
                <div className="mb-8">
                    <label className="block text-slate-800 text-left     text-sm font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value="password"
                    />
                </div>
                <div className="mb-8">
                    <label className="block text-slate-800 text-left     text-sm font-semibold mb-2" htmlFor="countries">
                        Countries
                    </label>
                    <select className=" border rounded py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline w-full">
                        <option selected>
                            Select a country
                        </option>
                        <option >
                           Myanmar
                        </option>
                        <option >
                            Thailand
                        </option>
                        <option >
                            Sg
                        </option>

                    </select>
                   
                </div>
                <div className="mb-8">
                    <label className="block text-slate-800 text-left     text-sm font-semibold mb-2" htmlFor="addressdetail">
                        Address detail
                    </label>
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="detail"
                        type="text"
                        placeholder="Enter address detail"
                        value="detail"
                    />
                </div>
                <div className="flex items-center justify-between">
                <button
                    className="bg-gray-200 w-full hover:bg-gray-100 mx-3 transition-all duration-100 text-slate-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button" onClick={() => {
                        setIsAddressDrawerOpen(false);}}
                >
                   Cancel
                </button>
                <button
                    className="bg-slate-800 w-full hover:bg-slate-600 transition-all duration-100  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Confirm
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
export default AddressDrawer;