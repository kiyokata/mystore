import Navbar from '../../partials/Navbar';
// import MainCarousel from '../components/MainCarousel';
// import Hero from '../components/Hero';
import NewCarousel from '../../components/NewCarousel';
import Spacer from '../../components/Spacer';
import LatstProduct from '../../components/Home/LatestProduct';
import ProductSlider from '../../components/ProductSlider';
import NewProducts from '../../components/Home/NewProducts';
import SectionWithImage from '../../components/Home/SectionWithImage';
import LatestProduct from '../../components/Home/LatestProduct';
import TrendingProduct from '../../components/Home/TrendingProduct';
import Brands from '../../components/Home/Brands'
const Home =() => {
    const products = [
        {
          id: 1,
          imageUrl: require('../../assets/products/paranoise1.png'),
          title: 'Product 1 ',
          price: '19.99',
          isNew: true,
        },
        {
          id: 2,
          imageUrl: require('../../assets/products/paranoise1.png'),
          title: 'Product 2',
          price: '24.99',
          isNew: false,
        },
        {
            id: 3,
            imageUrl: require('../../assets/products/paranoise3.png'),
            title: 'Product 2',
            price: '24.99',
            isNew: false,
          },
          {
            id: 4,
            imageUrl: require('../../assets/products/paranoise2.png'),
            title: 'Product 2',
            price: '24.99',
            isNew: false,
          },
        // Add more products
      ];
  return (
      <div className="flex flex-col items-center max-h-full mt-16 sm:mt-32 md:mt-12 lg:mt-6 ">
        <NewCarousel />   
        <Brands />
        <LatestProduct products={products} />
        <NewProducts />
        <TrendingProduct products={products} />
        <TrendingProduct products={products} />
        <SectionWithImage />
      </div>
    
)}
export default Home;


