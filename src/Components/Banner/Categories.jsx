import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='h-full lg:block hidden'>
        <div className='hidden md:flex h-full'>
          <div className='border-2 border-[#e6e6e6] flex flex-col text-black w-full h-full  rounded-2xl overflow-hidden '>
            <div className='font-bold p-5 bg-[#e6e6e6] flex-1 flex items-center justify-start'>
              <h3 className='capitalize'>Shop by Categories</h3>
            </div>
            <div className='w-full text-sm'>
              <ul className='w-full h-full flex flex-col  divide-y-2'>
                <Link to={'/'} className='flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200'>
                  <p  >Mouse</p>
                </Link>
                <Link to={'/'} className='flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-200'>
                  <p>Camera</p>
                </Link>
                <li className='flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200'>
                  <p >Computer</p>
                </li>
                <li className='flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-200'>
                  <Link href='#'>Smart TV</Link>
                </li>
                <li className='flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200'>
                  <Link href='#'>Pendrive</Link>
                </li>
                <li className='flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-200'>
                  <Link href='#'>Headphone</Link>
                </li>
                <li className='flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200'>
                  <Link href='#'>Gameboy</Link>
                </li>
                <li className='flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-200'>
                  <Link href='#'>Printer</Link>
                </li>
                <li className='flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200'>
                  <Link href='#'>Radio</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Categories;