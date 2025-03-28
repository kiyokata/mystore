import React,{useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Breadcrumb from '../../components/Breadcrumb'
import SizeTableDrawer from '../../components/ProductDetail/SizeTableDrawer';
import ProductInformation from '../../components/ProductDetail/ProductInformation';
import RecentlyViewed from '../../components/ProductDetail/RecentlyViewed';
import SaleTable from '../../components/ProductDetail/SaleTable';

const ProductDetailsPage = () => {
  // Mock product details data
  const [isOpen, setIsOpen] = useState(false);
  const product = {
    id: 1,
    name: 'Example Product',
    price: 1000000,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ',
    // Add more product properties as needed
  };

  const productImages = [
    { id: 1, src: 'https://dummyimage.com/600x500/000/fff.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://dummyimage.com/600x500/000/fff.jpg', alt: 'Image 2' },
    { id: 3, src: 'https://dummyimage.com/600x500/000/fff.jpg', alt: 'Image 3' },
    { id: 3, src: 'https://dummyimage.com/600x500/000/fff.jpg', alt: 'Image 3' },
    { id: 3, src: 'https://dummyimage.com/600x500/000/fff.jpg', alt: 'Image 3' },

    // Add more images as needed
  ];
  useEffect(() => {
   
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  
  }, [])
  return (
    <div  className=" bg-white flex flex-col items-left max-h-full md:px-20 lg:px-30 xl:px-30 mt-16 sm:mt-30 md:mt-30 lg:mt-30 xl:mt-30  ">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        <ProductInformation />
        <RecentlyViewed />
        <SaleTable />
      </div>  
    </div>
    
    
  );
};

export default ProductDetailsPage;