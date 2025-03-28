import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      toast.error('Please enter both username and password.');
      return;
    }
  
    // Perform login logic here
    // ...
  
    setUsername('');
    setPassword('');
  };

    return(
        <>
        <div className="w-full flex justify-center items-center h-full mt-20 mb-6">
        <ToastContainer />
        <form className="bg-white w-full py-32  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="w-full flex justify-center flex-row  items-center px-1 py-2  rounded-lg bg-[#efefef] ">
               <Link to="/login" className="text-slate-800 w-1/2 inline-block bg-white mx-2 text-center rounded-lg py-2  font-semibold">Login</Link>
               <Link  to="/signup" className="text-slate-400  w-1/2 text-center rounded-full py-2  font-light">Signup</Link>
            </div>
            <div className="mb-8 mt-8">
            <label className="block text-[#959595] text-sm font-semibold mb-2" htmlFor="username">
                Username
            </label>
            <input
                className=" appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
            />
            </div>
            <div className="mb-8">
            <label className="block text-slate-800 text-sm font-semibold mb-2" htmlFor="password">
                Password
            </label>
            <input
                className=" appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="flex items-center justify-between">
            <button
                className="bg-slate-800 w-full hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit" onClick={handleSubmit}
            >
                Sign In
            </button>
           
            </div>
            <Link className=" mt-8 inline-block align-baseline font-semibold text-sm text-slate-400 hover:text-slate-800" href="/">
                Forgot Password?
            </Link>
            <h5 className="text-md text-slate-600 font-light  text-center mt-8"> OR</h5>
            <div className=" mt-4 px-2">
            <Link
                className="bg-blue-600 w-full text-center  mb-4  text-white font-light     border-gray-200 hover:border-gray-400 border-[1px] py-2 px-4 rounded "
                type="button"
            >
               Continue With Facebook
            </Link>
            <Link
                className="bg-slate-50 w-full text-center  mb-4  text-slate-700 font-light     border-gray-200 hover:border-gray-400 border-[1px] py-2 px-4 rounded "
                type="button"
            >
               Continue With Google
            </Link>
            <Link
                className="bg-slate-50 w-full text-center   mb-4  text-slate-700 font-light     border-gray-200 hover:border-gray-400 border-[1px] py-2 px-4 rounded "
                type="button"
            >
               Continue With Apple
            </Link>
            </div>
        </form>
       
    </div>
        </>
    );

}
export default Login ;