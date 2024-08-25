import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaTruck, FaInfoCircle, FaPhone, FaClipboardList } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className=' flex justify-evenly manRope text-[#808080] border-b-2 py-3'>
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

            

            


        </div>
    );
};

export default Navbar;
