import React from 'react';
import {Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-slate-800 hover:text-[#959595] text-lg font-light mb-4">About Us</h3>
            <p className="text-slate-800 font-light">Discover unique, stylish, and comfortable fashion for every season. We’re passionate about making you look and feel your best.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-slate-800 hover:text-[#959595] text-lg font-light mb-4">Links</h3>
            <ul className="text-slate-800">
              <li className="mb-2"><Link to="/" className="hover:text-[#959595] font-light">Home</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-[#959595] font-light">About</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-[#959595] font-light">Services</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-[#959595] font-light">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-slate-800 hover:text-[#959595] text-lg font-light mb-4">Contact Us</h3>
            <p className="text-slate-800 font-light">475 Pope St</p>
            <p className="text-slate-800 font-light">myatkaungkhant21@gmail.com</p>
            <p className="text-slate-800 font-light">+1 628 263 4980</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-slate-800 hover:text-[#959595] text-lg font-light mb-4">Follow Us</h3>
            <div className="flex items-center">
              <Link to="/" className="text-gray-400 hover:text-slate-800 mr-4"><i className="fab fa-facebook-f"></i></Link>
              <Link to="/" className="text-gray-400 hover:text-slate-800 mr-4"><i className="fab fa-twitter"></i></Link>
              <Link to="/" className="text-gray-400 hover:text-slate-800 mr-4"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" bottom-0 py-4 h-full py-10 bg-gray-100 text-center">
        <p className="text-gray-400">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;