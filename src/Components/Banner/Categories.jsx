import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div>

            <div className='hidden md:flex'>
                <div className='border-2 border-[#e6e6e6]   h-[600px] text-[#black]'>
                    <div className='font-bold p-5  bg-[#F7F7F7]'>
                        <h3 className='capitalize'>Shop by categories</h3>
                    </div>
                    <div className=' p-2 w-[300px] text-xl'>
                        <ul>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Mouse Mouse</Link>
                            </li>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Camera Tv screen</Link>
                            </li>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Computer Computer</Link>
                            </li>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Smart tv DSLR camera</Link>
                            </li>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Pendrive Pendrive</Link>
                            </li>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Headphone Headphone</Link>
                            </li>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Gameboy Gameboy</Link>
                            </li>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Printer Printer</Link>
                            </li>
                            <li className='flex items-center gap-1 border-b-[1px] px-2 my-5'>
                                <Link> Radio Radio</Link>
                            </li>
                        </ul>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;