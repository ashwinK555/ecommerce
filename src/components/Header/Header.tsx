import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import './style.css'
const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [hamOpen, setHamOpen] = useState(false);
    const handleSearchBar = () => {
        setOpen(!open);
    }
    const handleHamOpen = () => {
        setHamOpen(!hamOpen);
    }

    return (
        <>
        <div className=" sticky top-0 flex justify-around flex-row items-center ">
            <div className=" flex justify-center items-center h-[50px] ">
                <h5 className="">LOgoHere</h5>
            </div>

            <div className=" hidden sm:flex flex flex-row justify-center items-center gap-7">
                <div> <NavLink to='/'>Home</NavLink> </div>
                <div><NavLink to='/men'>Men</NavLink></div>
                <div><NavLink to='/women'>Women</NavLink></div>

                <div className="  dropdown-menu flex justify-center items-center ">
                    <div className=" flex items-center">Collection <IoIosArrowDown /></div>
                    <div className="dropdown-content flex justify-around items-center gap-4  rounded ">
                        <div className="underline">
                            <div> menu1</div>
                            <div> menu2</div>
                            <div> menu3</div>
                        </div>

                        <div className="underline">
                            <div> menu6</div>
                            <div> menu7</div>
                            <div> menu8</div>
                        </div>

                        <div className="underline">
                            <div> menu6</div>
                            <div> menu7</div>
                            <div> menu8</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-5">
                <div className="text-xl flex justify-center items-center gap-2">
                    <div className="w-full "><input type="text" placeholder="search" className={`z-30 absolute top-12 right-5  sm:flex transition-all flex-1 rounded ease-in-out duration-1000 outline-none p-2 text-[15px] border-1 border-gray  ${open ? '  opacity-100 ' : ' hidden opacity-0'} `} /></div>
                    <div onClick={handleSearchBar}><FaSearch /></div>
                </div>
                <div className="text-xl font-bold"><CiShoppingCart />  </div>
                <div className="text-xl font-bold"><VscAccount /> </div>
            </div>

            <div className=" sm:hidden">
                <div> {hamOpen ? (<RxCross1 onClick={handleHamOpen} />) : (<GiHamburgerMenu onClick={handleHamOpen} />)} </div>
           </div>


          <div className={` absolute transition-all transform ease-in-out duration-1000 z-40 top-10 w-full h-screen   absolute bg-black text-white  ${hamOpen? 'opacity-100 translate-y-0 ' : ' opacity-0 -translate-y-400'}`}>hello</div> 
  


        </div>
        
</>
    )
}

export default Header