import React from 'react';
import Categories from './Categories';
import Banner from './Banner';

const Combine = () => {
    return (
        <div className='mt-2'>
             <div className='max-w-7xl m-auto grid lg:grid-cols-4 grid-cols-3 lg:h-[500px] md:h-[450px] md:px-10 px-5 gap-2 duration-500 h-[300px]'>
                <Categories  />

                <div className= 'col-span-2 h-full '>
                    <Banner />
                </div>
                <div className='h-full  rounded-2xl overflow-hidden w-full'>
                    <img className='  object-cover h-full w-full' src="https://qx-elesa-demo1.myshopify.com/cdn/shop/files/offer-banner.jpg?v=1718768737&width=832" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Combine;