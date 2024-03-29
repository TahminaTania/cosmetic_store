
import Link from "next/link";
import MenuItems from "./Menu";
import Wrapper from "./Wraper";



import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";

import React from 'react'


function Header() {
  return (
    <header className="w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300">
      <Wrapper className="h-[60px] flex justify-between items-center">
        <div>
          <Link href="/">
            <img src="assests/logo.png" className="w-[40px] md:w-[60px]" />
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:order-2">
          {/* ///icon */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          {/* icon */}

          {/* Icon start */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {3 > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  9
                </div>
              )}
            </div>
          </Link>
          {/* Icon end */}
        </div>
        {/* Move MenuItems to the right on mobile view */}
        <div className="flex px-5 py-3 mx-4 md:mx-0 ">
          <MenuItems />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;


