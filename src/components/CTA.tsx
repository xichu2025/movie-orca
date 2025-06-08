import React from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "@/assets/img/banner.png";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#7D3FCD]/20 to-[#4B2882]/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={banner}
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-6">
            Are you ready to be embedded in the ocean of movies?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join over 10 million movie lovers who use Movie Orca to discover
            their next favorite film. Get early access to personalized
            recommendations, exclusive content and trailers without
            registration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/movie-list"
              className="bg-[#7D3FCD] hover:bg-[#6A33B5] text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Watch now
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#7D3FCD] mb-2">10M+</div>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#7D3FCD] mb-2">
                100K+
              </div>
              <p className="text-gray-400">Movies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#7D3FCD] mb-2">5M+</div>
              <p className="text-gray-400">Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#7D3FCD] mb-2">200+</div>
              <p className="text-gray-400">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
