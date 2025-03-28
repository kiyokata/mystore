import React from 'react';
import logo1 from '../../assets/logos/logo-adidas.webp';
import logo2 from '../../assets/logos/logo-balenciaga.png';
import logo3 from '../../assets/logos/logo-gucci.jpeg';
import logo4 from '../../assets/logos/logo-lv.png';
import logo5 from '../../assets/logos/logo-nike.png';
import logo6 from '../../assets/logos/logo-polo.png';
import logo7 from '../../assets/logos/logo-prada.png';
import logo8 from '../../assets/logos/logo-ck.png';
import {Link} from 'react-router-dom';


const logos = [
    { src: logo1, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 3' },
    { src: logo5, alt: 'Logo 3' },
    { src: logo6, alt: 'Logo 3' },
    { src: logo7, alt: 'Logo 3' },
    { src: logo8, alt: 'Logo 3' },
    // Add more logos as needed
  ];
  

const Brands = () => {

  return (
    <div className=" " >
        <div className="flex  justify-center flex-col w-full ">
            <div className="container p-6  h-full scroll-smooth max-w-full ">
                <h1 className="text-center font-semibold tracking-wide  text-xl  text-slate-800 pb-5 mb-5 mt-5 pl-3 sm:pl-3 md:pl-0 lg:pl-0 xl:pl-0" >#Brands</h1>
                <div className="grid grid-cols-4">      
                    {logos.map((logo,index) =>(
                        <div className="flex items-center justify-center">
                            <Link key={index} className="rounded-full max-h-24  w-50 bg-white">
                                <img key={index} src={logo.src} alt={logo.alt} className=" object-cover bg-white  hover:opacity-25 max-w-full max-h-28"/>               
                            </Link>
                        </div>
                        
                        
                    ))}
                        {/* <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50"/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                        <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="xd" className="hover:bg-gray-500  rounded-full hover:opacity-25 w-50 "/>
                    */}
                </div>
            </div>
        </div>
    </div>
   
  
   
  );
};

export default Brands;