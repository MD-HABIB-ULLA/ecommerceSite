import React from "react";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaTruck,
  FaInfoCircle,
  FaPhone,
  FaClipboardList,
  FaGlasses,
  FaUser,
  FaHeart,
  FaInstagram,
} from "react-icons/fa";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      {/* first section of navbar  */}
      <div className=" border-[1.5px] border-gray-400/15 text-[#808080]">
        <div className="max-w-7xl m-auto md:px-10 px-5 py-3  ">
          <div className="flex center justify-between text-center items-center">
            {/* first section */}

            <div className=" hide hidden">
              <div className="flex lg:gap-7 md:gap-2 text-sm lg:text-base">
                <div className="flex items-center gap-1 hover:text-[#F14774] cursor-pointer duration-500">
                  <FaMapMarkerAlt /> <h4> Find Stores</h4>
                </div>
                <div className="flex items-center gap-1 hover:text-[#F14774] cursor-pointer duration-500">
                  <FaInstagram /> <h4> 100k Followers </h4>
                </div>
              </div>
            </div>

            {/* second section */}
            <div className="flex lg:gap-7 md:gap-2 md:text-sm lg:text-base text-xs">
              <div className="flex items-center gap-1 hover:text-[#F14774] cursor-pointer duration-500">
                <div className="flex items-center gap-1 justify-center">
                  <FaTruck />
                  <h4>Free delivery on orders over $100 discount.</h4>
                </div>
              </div>
            </div>

            {/* third section */}
            <div className=" hide hidden">
              <ul className="flex lg:gap-7 md:gap-2 text-sm lg:text-base">
                <li className="">
                  <div className="flex items-center gap-1 hover:text-[#F14774] cursor-pointer duration-500">
                    <FaInfoCircle /> <h4>About us</h4>
                  </div>
                </li>
                <li className="flex items-center gap-1">
                  <div className="flex items-center gap-1 hover:text-[#F14774] cursor-pointer duration-500">
                    <FaPhone /> <h4>Contact</h4>
                  </div>
                </li>
                <li className="flex items-center gap-1">
                  <div className="flex items-center gap-1 hover:text-[#F14774] cursor-pointer duration-500">
                    <FaClipboardList /> <h4> Order tracking</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* second  section of navbar  */}
      <div className="">
        {" "}
        <div className="max-w-7xl m-auto md:px-10 px-5"></div>
      </div>
      {/* Third section of navbar  */}
      <div className="">
        {" "}
        <div className="max-w-7xl m-auto md:px-10 px-5"></div>
      </div>
    </div>
    // <div className='manRope '>
    

    //     {/* Second Navbar Starts */}

    //     <div className='flex justify-evenly items-center'>

    //         <div className='md:flex hidden items-center'>
    //             <input type="text" className='p-3 border-gray-200 text-gray-900 outline-none border-2 ' placeholder='Find our seach' />
    //             <button className='p-4 border-2 text-white flex justify-center items-center text-center bg-[#333333]  hover:bg-[#F14772] text-xl'><CiSearch /></button>
    //         </div>

    //         <div className='text-2xl font-bold'>
    //             <span
    //                 className='font-bold'
    //                 style={{
    //                     background: 'linear-gradient(to right, #7957CF, #BE4E9A)',
    //                     WebkitBackgroundClip: 'text',
    //                     WebkitTextFillColor: 'transparent',
    //                 }}
    //             >
    //                 Zen
    //             </span>
    //             Mart
    //         </div>

    //         <div className='flex gap-5 items-center text-2xl'>
    //             <NavLink className='hover:text-[#F14772]'><CiSearch /></NavLink>
    //             {/* <NavLink className='hover:text-[#F14772]'><CiUser /></NavLink> */}
    //             <NavLink className='hover:text-[#F14772] flex items-center gap-1'><CiHeart /><span className='text-xl'>(0)</span></NavLink>
    //             <NavLink className='hover:text-[#F14772] flex items-center gap-1'><BsBoxSeam /> <span className='text-xl'>(0)</span></NavLink>

    //         </div>

    //     </div>

    //     {/* Second Navabr Ends */}

    // </div>
  );
};

export default Navbar;
