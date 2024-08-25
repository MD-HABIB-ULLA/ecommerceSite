import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import Categories from '../../Components/Banner/Categories';

const Home = () => {
    return (
        <div>

            <div className='flex manRope justify-center gap-5 items-center'>
                <Categories />

                <div className='w-full md:w-1/2 my-5'>
                    <Banner />
                </div>
                <div>
                    <img className='md:flex hidden h-[600px]' src="https://qx-elesa-demo1.myshopify.com/cdn/shop/files/offer-banner.jpg?v=1718768737&width=832" alt="" />
                </div>
            </div>
            <h1>This is Home page</h1>


        </div>
    );
};

export default Home;