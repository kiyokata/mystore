
import React, {  useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
import ProfileDrawer from './ProfileDrawer';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const drawer = "drawer";
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const required = true;
  const dataDrawerBackdrop = false;
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
    const toggleDrawerMenu = () => {
    setDrawerMenuOpen(!isDrawerMenuOpen);
  };
  const toggleProfileDrawerMenu = () => {
    setDrawerMenuOpen(!isDrawerMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
  
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    };
   
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    // const [scrollY, setScrollY] = useState(0);
    
    // useEffect(() => {
    //   const handleScroll = () => {
    //     setScrollY(window.scrollY);
    //     console.log(window.scrollY)
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
  
    // const navbarClasses = scrollY > 0 ? 'shadow-lg' : '';
  return (
    <nav className={`${ isScrolled ? 'shadow-lg' : ''
  } fixed top-0 z-10 transition-all ease-in-out duration-100`}>
      <div className="">
        <div className="relative mx-auto">
          
          <nav className="flex justify-between bg-white text-gray-950 w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading" to="">
                MYSTORE
              {/* <img className="h-9" src="https://dummyimage.com/200x200/000000/fff" alt="logo" /> */}
              </Link>
        
              <ul className="hidden md:flex px-4 mx-auto font-light  space-x-12">
                <li><Link className=" text-slate-800 hover:text-[#959595]" >Home</Link></li>
                <li><Link className=" text-slate-800 hover:text-[#959595]" >About Us</Link></li>
          
                <li><Link className=" text-slate-800 hover:text-[#959595]" >Contact Us</Link></li>
              </ul>
              
              <div className="text-center">
              {/* <button data-drawer-target="{drawer}" data-drawer-show="{drawer}" data-drawer-backdrop="{true}"  className="block md:block  lg:block xl:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" >
                Show navigation
                </button> */}
                {/* <button data-drawer-target={drawer} data-drawer-show={drawer}  onClick={() => setIsOpen(true)} className="block md:hidden lg:hidden xl:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" >
                Show navigation
                </button> */}
              </div>
              {isOpen && <div className="backdrop z-10"></div>}
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
              {/* {isProfileDrawerOpen && <div className="backdrop z-10"></div>}
              <ProfileDrawer isProfileDrawerOpen={isProfileDrawerOpen} setIsProfileDrawerOpen={setIsProfileDrawerOpen} /> */}
            </div>
            {/* <button onClick={() => setIsProfileDrawerOpen(true)} className=" md:block lg:block xl:block flex text-slate-800 mr-5 items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800 hover:text-[#959595] " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button> */}
            <button onClick={toggleProfileMenu} className=" md:block lg:block xl:block flex text-slate-800 mr-5 items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800 hover:text-[#959595] " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button  onClick={() => setIsOpen(true)} className="navbar-burger self-center mr-12 block md:hidden lg:hidden xl:hidden" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-[#959595]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {isProfileMenuOpen && (
                <div
                  className="origin-top-right absolute right-5 sm:right-1 md:mt-16 sm:mt-5 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Logout
                  </Link>
                </div>
              )}
               {/* Mobile menu */}
                {isMobileMenuOpen && (
                  <div className="md:hidden absolute h-screen w-full">
                    
                    <div className=" bg-gray-100 transition-all ease-in duration-1000  h-screen  px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div
                          className="origin-top-right absolute right-5 sm:right-1 md:mt-16 sm:mt-5  "
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu"
                        >
                         <button onClick={toggleMobileMenu} className=" origin-top-right right-0 flex mr-1   " >
                            <svg xmlns="http://www.w3.org/2000/svg" className= "h-10 w-10 mt-5 hover:text-blue-500 text-gray-950" fill="none" viewBox="0 0 24 24"  stroke="currentColor">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                          </button>
                        </div>
                      <div className="flex  flex-col h-screen items-center  justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                          to="/"
                          className="text-gray-950 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                          Home
                        </Link>
                        <Link
                          to="/about"
                          className="text-gray-950 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                          About Us
                        </Link>
                        <Link
                          to="/contact"
                          className="text-gray-950 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
          </nav>
          
        </div>
      </div>
    </nav>

  )
}
export default Navbar;