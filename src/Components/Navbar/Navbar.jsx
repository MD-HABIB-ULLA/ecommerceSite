import React, { useState } from 'react';
import { FaMapMarkerAlt, FaUsers, FaTruck, FaInfoCircle, FaPhone, FaClipboardList, FaSearch, FaBars } from 'react-icons/fa';
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import { BsBoxSeam } from "react-icons/bs";

const Navbar = () => {

    const [position, setposition] = useState(true)

    const toggleHandel = () => {
        set
    }


    return (
        <div className='manRope '>
            <div className=' flex justify-evenly  text-[#808080] border-b-2 py-3'>
                <div className='md:flex hidden gap-4 items-center'>
                    <h4 className='flex items-center gap-1'><FaMapMarkerAlt /> Find Stores</h4>
                    <h4 className='flex items-center gap-1'><FaUsers /> 100k Followers</h4>
                </div>
                <div className='flex items-center'>
                    <h4 className='flex items-center gap-1'><FaTruck /> Free delivery on orders over $100 discount.</h4>
                </div>
                <div className='md:flex hidden'>
                    <ul className='flex gap-4 items-center'>
                        <li className='flex items-center gap-1'><FaInfoCircle /> About us</li>
                        <li className='flex items-center gap-1'><FaPhone /> Contact us</li>
                        <li className='flex items-center gap-1'><FaClipboardList /> Order tracking</li>
                    </ul>
                </div>
            </div>


            {/* Second Navbar Starts */}

            <div className='flex justify-evenly items-center'>

                <div className='md:flex hidden items-center'>
                    <input type="text" className='p-3 border-gray-200 text-gray-900 outline-none border-2 ' placeholder='Find our seach' />
                    <button className='p-4 border-2 text-white flex justify-center items-center text-center bg-[#333333]  hover:bg-[#F14772] text-xl font-extrabold'><FaSearch /></button>
                </div>

                <div className='text-2xl font-bold'>
                    <span
                        className='font-bold'
                        style={{
                            background: 'linear-gradient(to right, #7957CF, #BE4E9A)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Zen
                    </span>
                    Mart
                </div>

                <div className='flex gap-5 items-center text-2xl'>
                    <NavLink className='hover:text-[#F14772]'><CiSearch /></NavLink>
                    {/* <NavLink className='hover:text-[#F14772]'><CiUser /></NavLink> */}
                    <NavLink className='hover:text-[#F14772] flex items-center gap-1'><CiHeart /><span className='text-xl'>(0)</span></NavLink>
                    <NavLink className='hover:text-[#F14772] flex items-center gap-1'><BsBoxSeam /> <span className='text-xl'>(0)</span></NavLink>

                </div>


 
            </div>

            {/* Second Navabr Ends */}



        </div>
    );
};

export default Navbar;
