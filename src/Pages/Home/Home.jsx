import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <h1>This is Home page</h1>
            <Footer />
            <h1>This is Tonmoy </h1>
            
        </div>
    );
};

export default Home;