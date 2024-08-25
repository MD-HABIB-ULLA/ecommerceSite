import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Slide = ({ image, text, discountPercent, saleText }) => {
    return (
        <motion.div
            className='w-full bg-center bg-cover h-[400px] md:h-[38rem] relative '
            style={{
                backgroundImage: `url(${image})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <div className='absolute inset-0 top-[10%] md:top-[20%] '>
                <div className='px-5 text-center'>
                    <p className='text-lg text-[#333333]'>
                        {saleText} <span className='text-black underline font-bold'>{discountPercent}</span>
                    </p>
                    <h1 className='text-3xl md:text-5xl font-extrabold text-[#333333] mb-4'>
                        {text}
                    </h1>
                    <div className='mt-6'>
                        <Link
                            to='/products'
                            className='inline-block px-6 py-3 text-white bg-[#282828] text-xl font-bold transition hover:bg-[#ED4877] duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50'
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
