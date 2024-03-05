"use client";

import { useState ,useEffect} from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const menu = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
//   {
//     title: "Category",
//     path: "/category",
//     submenu:true,
//   },
];


// const subMenuData = [
//     { id: 1, name: "LIP", doc_count: 11 },
//     { id: 2, name: "NAIL", doc_count: 8 },
//     { id: 3, name: "HAIR", doc_count: 64 },
//     { id: 4, name: "FACE", doc_count: 107 },
// ];


const MobileMenu = ({ onClose, onLinkClick }) => {
    return (
      <div className="md:hidden fixed inset-0 bg-black bg-opacity-80 z-50">
        <div className="flex justify-end p-4">
          <AiOutlineClose
            size={24}
            className="text-white cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col items-center">
          {menu.map((link) => (
            <Link href={link.path} key={link.title} className="text-white  border-b-2 border-gray-500 py-2 text-center hover:bg-gray-700 transition duration-300 w-full" onClick={() => {
                onClose();
                 
              }}>
           
              <div> {link.title} </div> 
            
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  const MenuItems = ({ session }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setMobileMenuOpen(window.innerWidth <= 600); // Adjust the size as needed
      };
  
      // Initial check
      handleResize();
  
      // Listen for window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty dependency array to run the effect only once
  
    return (
      <div className="md:flex items-center gap-8 font-medium text-black">
        <div className="hidden md:flex">
          {menu.map((link) => (
            <Link href={link.path} key={link.title} className="cursor-pointer px-5 py-3 mx-4 bg-gray-200 text-black hover:text-white hover:bg-black transition duration-300 rounded-md">
         
                {link.title}
            
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          {mobileMenuOpen ? (
            <AiOutlineClose
              size={24}
              className="cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <AiOutlineMenu
              size={24}
              className="cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
        {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      </div>
    );
  };
  
  export default MenuItems;