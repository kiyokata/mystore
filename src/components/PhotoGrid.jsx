import React from 'react';

const PhotoGrid = () => {

  return (
    <div className="grid grid-cols-3  sm:grid-cols-6  md:grid-cols-3 lg:grid-cols-3 gap-1">
        <div className="hover:bg-gray-500  hover:opacity-25">
            <img src="https://dummyimage.com/600x500/000/fff.jpg" alt="xd" class="w-full" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-25">
            <img src="https://dummyimage.com/600x500/000/fff.jpg" alt="xd" class="w-full" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-25">
            <img src="https://dummyimage.com/600x500/000/fff.jpg" alt="xD" class="w-full" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-25">
            <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="xD" class="w-full" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-25">
            <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="xD" class="w-full" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-25">
            <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="xD" class="w-full" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-25">
            <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="xD" class="w-full" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-25">
            <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="xD" class="w-full" />
        </div>  
        <div className="hover:bg-gray-300 hover:opacity-25">
            <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="xD" class="w-full" />
        </div>
  
    </div>
  );
};

export default PhotoGrid;