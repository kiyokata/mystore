import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import firstbanner from '../assets/banners/banner4.jpeg'
import secondbanner from '../assets/banners/banner9.webp'
import thirdbanner from '../assets/banners/banner5.webp'

const NewCarousel = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const totalSlides = 3; // Total number of carousel slides

  const handlePrevSlide = () => {
    setSelectedSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setSelectedSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  return (
    <div className="relative  mt-10 max-sm:mt-5 ">
      <Carousel
        selectedItem={selectedSlide}
        onChange={setSelectedSlide}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={500}
        stopOnHover
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? 'absolute' : 'hidden'
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
              </svg>
            </div>
          );
        }}
        renderArrowNext={(clickHandler,hasNext) => {return( 
          <div
          className={`${
              hasNext ? 'absolute' : 'hidden'
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer `}
            onClick={clickHandler}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
          </div>
        );
      }}
      >
        <div className="w-full  flex justify-center h-auto bg-[#e8e8e8]" >
          <img   className="w-full  object-contain max-sm:object-cover max-sm:h-screen" style={{height:"400px"}}  src={firstbanner} alt="Carousel 1"  />
        </div>
        <div  className="w-full   bg-[#e8e8e8] " >
          <img  className="w-full  object-contain max-sm:object-cover max-sm:h-screen" style={{height:"400px"}}src={secondbanner}   alt="Carousel 2" />
        </div>
        <div className="w-full  bg-[#e8e8e8]  "  >
          <img  className="w-full  object-contain max-sm:object-cover max-sm:h-screen" style={{height:"400px"}}    src={thirdbanner} alt="Carousel 3" />
        </div>
      </Carousel>
      {/* <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full focus:outline-none"
        onClick={handlePrevSlide}
      >
        <BsChevronLeft size={30} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full focus:outline-none"
        onClick={handleNextSlide}
      >
        <BsChevronRight size={30} />
      </button> */}
    </div>
  );
};

export default NewCarousel;