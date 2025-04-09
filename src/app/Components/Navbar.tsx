import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" bg-white/10 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold">Job Interest</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
                Jobs
              </button>

              {/* Drop Down */}
              <ul
                className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-opacity duration-200 z-50"
              >
                <Link
                  href="/job-1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Developer
                </Link>
                <Link
                  href="/job-2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Designer
                </Link>
                <Link
                  href="/job-3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Marketing
                </Link>
                <Link
                  href="/job-4"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sales
                </Link>
                <Link
                  href="/job-5"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Support
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
