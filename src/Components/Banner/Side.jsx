import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Slide = ({ image, text, discountPercent, saleText }) => {
    return (
        <motion.div
            className='w-full bg-center bg-cover h-full relative '
            style={{
                backgroundImage: `url(${image})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <div className='absolute inset-0 top-[10%] md:top-[20%] '>
                <div className='px-5 text-center'>
                    <p className='md:text-lg text-base text-[#333333] duration-500'>
                        {saleText} <span className='text-black underline font-bold'>{discountPercent}</span>
                    </p>
                    <h1 className='md:text-3xl text-xl lg:text-5xl font-extrabold duration-500 text-[#333333] mb-4'>
                        {text}
                    </h1>
                    <div className='mt-6'>
                        <Link
                            to='/products'
                            className='inline-block duration-500 lg:px-6 lg:py-3 md:px-4 md:py-2 px-3 py-2 text-white bg-[#282828] rounded-lg lg:text-xl md:text-lg text-base font-bold transition hover:bg-[#ED4877] duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50'
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Slide;
