import React from 'react';
import backgroundImage from '../../assets/dummy-bgimage.jpeg'; // Replace with the actual path to your image

const SectionWithImage = () => {
  return (
    <div className="relative min-h-screen scroll-smooth w-full bg-cover bg-center bg-no-repeat flex items-end sm:items-center md:items-end lg:items-end xl:items-end    md:pb-20 sm:pb-20 " style={{ objectFit:`cover`, backgroundImage: `url(${backgroundImage})` }}>
    <div className="relative z-[5]  container mx-auto px-4 pb-20">
      <div className="max-w-full mx-auto text-center">
        <h1 className="text-4xl font-serif md:text-5xl lg:text-8xl sm:text-8xl text-slate-950 font-bold mb-8">
         #Shoe Of The Day
        </h1>
        <p className="text-slate-950  text-lg md:text-xl lg:text-2xl mb-8">
         Buy this for <span className="font-extrabold lg:text-4xl text-transparent bg-clip-text bg-gradient-to-bl from-[#474141] to-[#030202]">10% OFF</span>
        </p>
        <button className="bg-slate-950 text-white font-bold py-3 px-6 rounded-lg">
            SHOP NOW
        </button>
      </div>
    </div>
    <div className="absolute inset-0 bg-[#F7ECED] opacity-50"></div>
  </div>
  );
};

export default SectionWithImage;