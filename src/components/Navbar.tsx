import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menu from "@/assets/icon/menu.svg";
import aaa from "@/assets/icon/1.jpg";
import bbb from "@/assets/icon/2.jpg";
import ccc from "@/assets/icon/3.jpg";
import ddd from "@/assets/icon/4.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* <span className="text-2xl text-white font-bold">
            Movie<span className="text-[#7D3FCD]">Orca</span>
          </span> */}
          <Image
            src={ddd}
            alt="Movie Orca"
            width={90}
            className="rounded-sm"
          ></Image>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link
            href="/movie-list"
            className="text-white hover:text-[#7D3FCD] transition-colors"
          >
            Movies
          </Link>
          {/* <Link
            href="/discover"
            className="text-white hover:text-[#7D3FCD] transition-colors"
          >
            Discover
          </Link>
          <Link
            href="/reviews"
            className="text-white hover:text-[#7D3FCD] transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="/trailers"
            className="text-white hover:text-[#7D3FCD] transition-colors"
          >
            Trailers
          </Link>
          <Link
            href="/showtimes"
            className="text-white hover:text-[#7D3FCD] transition-colors"
          >
            Showtimes
          </Link>
          <Link
            href="/news"
            className="text-white hover:text-[#7D3FCD] transition-colors"
          >
            News
          </Link> */}
        </div>

        <div className="md:hidden flex items-center space-x-4">
          {/* <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search movies, actors, directors..."
              className="bg-gray-800/70 text-white rounded-full py-1.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#7D3FCD] w-48 lg:w-64 transition-all"
            />
            <i className="fa fa-search absolute left-3 top-2.5 text-gray-400"></i>
          </div>

          <Link
            href="/login"
            className="bg-[#7D3FCD] hover:bg-[#6A33B5] text-white py-1.5 px-4 rounded-full transition-all"
          >
            Sign In
          </Link> */}

          {/* Mobile Menu Button */}
          <button
            className=" text-white text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src={menu} alt="Menu" width={30}></Image>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-700">
          <div className="container mx-auto px-4 py-3">
            {/* <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search movies, actors, directors..."
                className="bg-gray-700 text-white rounded-full py-1.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#7D3FCD] w-full transition-all"
              />
              <i className="fa fa-search absolute left-3 top-2.5 text-gray-400"></i>
            </div> */}
            <div className="flex flex-col space-y-3 pb-3 font-medium">
              <Link
                href="/movie-list"
                className="text-white hover:text-[#7D3FCD] transition-colors"
              >
                Movies
              </Link>
              {/* <Link
                href="/discover"
                className="text-white hover:text-[#7D3FCD] transition-colors"
              >
                Discover
              </Link>
              <Link
                href="/reviews"
                className="text-white hover:text-[#7D3FCD] transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="/trailers"
                className="text-white hover:text-[#7D3FCD] transition-colors"
              >
                Trailers
              </Link>
              <Link
                href="/showtimes"
                className="text-white hover:text-[#7D3FCD] transition-colors"
              >
                Showtimes
              </Link>
              <Link
                href="/news"
                className="text-white hover:text-[#7D3FCD] transition-colors"
              >
                News
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
