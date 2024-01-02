import React, { useState } from "react";
import logo from "../assets/logo-S.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex justify-between items-center pt-[1rem] bg-black">
      <div className="bg-black flex items-center justify-baseline p-0 px-4">
        <img src={logo} alt="logo" loading="lazy" className="h-20" />
        <div className="absolute flex flex-row text-white text-3xl font-bold -ml-3 left-[100px] ">
          hashank Gulati
        </div>
      </div>

      {/* Menu button for smaller screens */}
      <div
        className="lg:hidden cursor-pointer absolute right-10 text-white "
        onClick={toggleMenu}
      >
        {
            <IoMenu size={30}/>
        }
      </div>

      {/* Dropdown for smaller screens */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 right-0 mt-14 mr-4 bg-black p-4 rounded-md z-10 lg-menu-container">
        <div className="flex flex-col space-y-4">
            <a
              className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75 py-2 px-4 rounded-md"
              href="#projects"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75 py-2 px-4 rounded-md"
              href="#projects"
              onClick={toggleMenu}
            >
              Resume
            </a>
            <a
              className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75 py-2 px-4 rounded-md"
              href="#projects"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75 py-2 px-4 rounded-md"
              href="#projects"
              onClick={toggleMenu}
            >
              Profile Card
            </a>
            <a
              className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75 py-2 px-4 rounded-md"
              href="#skills"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75 py-2 px-4 rounded-md"
              href="#contactme"
              onClick={toggleMenu}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}

      {/* Links for larger screens */}
      <div className=" space-x-10 px-16 hidden lg:block">
        <a
          className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75"
          href="#projects"
        >
          Home
        </a>
        <a
          className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75"
          href="#projects"
        >
          Resume
        </a>
        <a
          className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75"
          href="#projects"
        >
          Profile Card
        </a>
        <a
          className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="cursor-pointer text-2xl font-medium text-white hover:font-bold transition duration-75"
          href="#contactme"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
