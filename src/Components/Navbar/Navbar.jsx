import React, { useState } from "react";
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
  FaSearch,
  FaHeadphonesAlt,
  FaBars,
} from "react-icons/fa";
import { CiHeadphones, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
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
        <div className="max-w-7xl m-auto md:px-10 px-5 py-[8px]">
          <div className="grid lg:grid-cols-3 grid-cols-2 w-full ">
            {/* first section  */}
            <div className="lg:block hidden">
              <div className="flex h-12 items-center ">
                <input
                  type="text"
                  className="h-full px-3 border-gray-200 rounded-l-lg text-gray-900 outline-none border-y border-l "
                  placeholder="Find our seach"
                />
                <button className="h-full px-4 rounded-r-lg text-white flex justify-center items-center text-center bg-[#333333]  hover:bg-[#F14772] text-xl duration-500">
                  <FaMagnifyingGlass />
                </button>
              </div>
            </div>

            {/* second section  */}
            <div className="flex lg:justify-center md:justify-start items-center">
              <Link to={"/"} className="text-3xl text-[#333333]">
                <span
                  style={{
                    background: "linear-gradient(to right, #7957CF, #BE4E9A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "900",
                  }}
                >
                  Zen
                </span>
                Mart
              </Link>
            </div>
            {/* third section  */}
            <div className="flex justify-end text-[#333333] ">
              <div className="flex gap-5 items-center md:text-2xl text-xl">
                <div className="drawer">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={isOpen}
                    onChange={toggleDrawer}
                  />
                  <div className="drawer-content">
                    {/* Page content here */}

                    <label
                      htmlFor="my-drawer"
                      className=" bg-transparent shadow-none flex items-center justify-center border-none hover:bg-transparent outline-none  drawer-button "
                    >
                      <div>
                        <div className="hover:text-[#F14772] duration-500 md:text-2xl text-xl lg:hidden block">
                          <CiSearch />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className={`drawer-side ${isOpen ? "drawer-open" : ""}`}>
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                      onClick={toggleDrawer}
                    ></label>
                    <div className=" bg-base-200 text-base-content min-w-full h-24 p-4">
                      {/* Sidebar content here */}
                      <div className="max-w-7xl m-auto px-10 flex flex-col  justify-end h-full ">
                        <div className=" relative border-b border-[#F14772]">
                          <input
                            type="text"
                            className="w-full text-base py-1 outline-none bg-transparent "
                            placeholder="Find our search"
                          />
                          <CiSearch className="text-[#F14772] absolute   right-0 top-2" />
                          <span
                            onClick={toggleDrawer}
                            className="text-[#F14772] absolute   right-2 -top-7 cursor-pointer"
                          >
                            x
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <NavLink className="hover:text-[#F14772] flex items-center  gap-1 duration-500">
                  <CiHeart />
                  <span className="text-xl">(0)</span>
                </NavLink>
                <NavLink className="hover:text-[#F14772] flex items-center gap-1 duration-500">
                  <BsBoxSeam /> <span className="text-xl">(0)</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third section of navbar  */}
      <div className="bg-gradient-to-r from-[#435EF9] to-[#F14772] lg:block hidden">
        <div className="max-w-7xl m-auto md:px-10 px-5 py-2 text-white text-xl mb-4 grid grid-cols-4">
          <div className="text-white flex items-center gap-2 ">
            <FaHeadphonesAlt /> <p className="font-bold">+88012345678</p>
          </div>
          <div className=" flex justify-center items-center  col-span-2 divide-x-2 text-sm">
            <p className="text-center px-4 cursor-pointer"> Bluetooth</p>
            <p className="text-center px-4 cursor-pointer"> Earphones</p>
            <p className="text-center px-4 cursor-pointer">Laptop</p>
            <p className="text-center px-4 cursor-pointer">Controller</p>
            <p className="text-center px-4 cursor-pointer">Smartphone</p>
          </div>
          <div className="flex justify-end">
            <div className="text-right px-3 py-3 = bg-black text-base  rounded-lg ">
              <p className="font-bold">Spacial Offers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl md:px-5 px-5 lg:hidden block py-3">
        <div className="  rounded-lg border-[1px] border-gray-400/15 shadow-sm px-3 py-3 ">
            <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 ">
              <FaBars />
              <p>Shop By Categories</p>
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div>
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
