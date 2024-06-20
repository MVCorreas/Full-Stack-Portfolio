"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#a8dadc] bg-opacity-90 h-20">

      <div className="container mx-auto flex justify-between h-full">
        <div className="flex items-center">
          <Image 
            src="/Logo.png" 
            alt="aboutImage"
            width={110} 
            height={110}
            className="rounded-full"
          />
          <Link
            href={"/"}
            className="text-2xl md:text-4xl text-[#1d3557] font-semibold flex items-center ml-2 md:ml-4"
            style={{ textDecoration: 'none' }} 
          >
            PORTFOLIO
          </Link>
        </div>
        <div className="mobile-menu block md:hidden mt-3">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-slate-600 hover:text-black hover:border-black"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-slate-600 hover:text-black hover:border-black"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} style={{ textDecoration: 'none' }}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;