import React from 'react'
import {Link} from 'react-router-dom'
import Sidebar from '../../components/Profile/Sidebar'

const  Profile = () => {

    return(<>
       <div  className=" bg-white flex w-full max-h-full mt-10 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20  ">
        <Sidebar />
        <div className="w-full bg-gray-100  flex  flex-col h-screen  ">
          {/* Main content */}
          <div className="mx-2 md:ml-10 lg:ml-10 xl:ml-10 w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className=" w-full mt-10 mx-auto bg-white shadow-md rounded-lg p-4"> 
                <div className="w-full flex flex-row items-start justify-start mb-4">
                  <div className="w-2/3 flex flex-row items-center justify-start">
                    <div className="w-20 h-auto rounded-full overflow-hidden mr-4">
                      <img
                        className=" object-cover md:object-scale-down  "
                        src="https://dummyimage.com/300x300/000/fff"
                        alt="Profile"
                      />
                    </div>
                    <div className="w-full"> 
                      <h2 className="text-xl text-slate-800 font-light w-full truncate">John Doe</h2>
                      <p className="text-gray-600 text-sm">Software Engineer</p>
                    </div>
                  </div>      
                  <div className="w-1/3 flex-grow flex flex-row justify-center items-center">
                    
                    <div className="">
                        <button className="bg-gray-200 hover:bg-slate-300 text-slate-800 font-light text-sm flex items-center justify-center  px-4 py-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                          <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                        </svg>   
                        Edit
                      </button>
                    </div>   
                    
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start w-full">
                  <div className="py-2">
                    <p className="text-slate-900 py-2 text-right px-4 text-md font-semibold">Email: </p>
                    <p className="text-slate-900  py-2 text-md text-right px-4 font-semibold">Birthday: </p>
                  </div>
                  <div>
                  <p className="text-slate-700  py-2 text-md truncate font-light">john.doe@email.com</p>
                  <p className="text-slate-700  py-2 text-md truncate font-light">10/10/10</p>
                  </div>          
                </div>
            </div>    
          </div>
         
        </div>
    </div>
    
    </>);
}

export default Profile;