"use client"

import { useRouter } from 'next/navigation';

import React from "react";

const Navbar = () => {
      const router = useRouter();
  
  return (
    <nav className=" bg-stone-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold cursor-pointer text-white hover:text-blue-300" onClick={() => router.push("/")}>Job Interest</div>
          <div className="hidden md:flex space-x-6">
            <div className="relative group">
                           
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
