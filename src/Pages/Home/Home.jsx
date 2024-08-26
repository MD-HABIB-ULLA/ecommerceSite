import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import Categories from '../../Components/Banner/Categories';

const Home = () => {
    return (
        <div>

            <div className='max-w-7xl m-auto grid grid-cols-4 '>
                <Categories />

                <div className= 'col-span-2 w-full '>
                    <Banner />
                </div>
                <div>
                    <img className='md:flex hidden ' src="https://qx-elesa-demo1.myshopify.com/cdn/shop/files/offer-banner.jpg?v=1718768737&width=832" alt="" />
                </div>
            </div>
            <h1>This is Home page</h1>


        </div>
    );
};

export default Home;