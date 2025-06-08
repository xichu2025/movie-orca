import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl text-white font-bold">
                Movie<span className="text-[#7D3FCD]">Orca</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your ultimate destination for discovering, exploring, and
              experiencing the world of cinema. From blockbuster hits to
              independent gems, we have got you covered.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/movie-list"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Discover Movies
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/top-rated"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  href="/upcoming"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Upcoming Releases
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Movie News
                </Link>
              </li>
              <li>
                <Link
                  href="/forums"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Community Forums
                </Link>
              </li> */}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  API Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/developers"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  For Developers
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/licenses"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Content Licenses
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright"
                  className="text-gray-400 hover:text-[#7D3FCD] transition-colors"
                >
                  Copyright Notice
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 Movie Orca. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-500 hover:text-[#7D3FCD] text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-500 hover:text-[#7D3FCD] text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-[#7D3FCD] text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-500 hover:text-[#7D3FCD] text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
