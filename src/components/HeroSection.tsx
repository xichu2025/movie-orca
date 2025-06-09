import React from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/img/banner.png";

const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] overflow-hidden"
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-8">
            <span className="text-[#7d3fcd]">Movie Orca</span>
            <span> - Dive into the Ocean of Cinema</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mb-12 max-w-2xl">
            Movie Orca is your ultimate destination for discovering, exploring,
            and experiencing the world of cinema. From blockbuster hits to
            independent gems, we have got you covered.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/movie-list"
              className="bg-[#7D3FCD] hover:bg-[#6A33B5] text-white font-medium py-3 px-8 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <i className="fa fa-compass"></i> Start Exploring
            </Link>
            <Link
              href="/movie-list"
              className="bg-transparent border-2 border-white hover:border-[#7D3FCD] hover:text-[#7D3FCD] text-white font-medium py-3 px-8 rounded-full flex items-center space-x-2 transition-all"
            >
              <i className="fa fa-play-circle"></i> Watch Free Movies
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
