import React from "react";
import Image from "next/image";
import banner from "@/assets/img/banner.png";

const infos = [
  `Whether you are immersed in niche masterpieces alone or sharing popular TV series with your family, MovieOrca redefines the digital viewing era with "massive content + ultimate experience" as its fulcrum. Join now and start your endless film and television journey. Let every moment of leisure become a window to explore the world.`,
  `Whether it's enjoying the cosmic wonders of science fiction films or immersing oneself in the delicate light and shadow of art films, every screening here is a respect for vision, hearing and time. Choose MovieOrca and let "seeing more clearly" be the starting point for rediscovering the charm of film and television.`,
  `MovieOrca reinterprets the essence of online viewing with purity and openness - film and television should belong to everyone, without being bound by accounts, fees or complex rules.`,
  `Whether you want to quickly watch a hit movie to relax or explore a niche documentary to broaden your horizons, this is a "private cinema" where you don't need to make a reservation or pay. Click to view, free and boundless - this is what digital entertainment should be like.`,
];

const InfoSection = () => (
  <section className="bg-gradient-to-r from-[#7D3FCD]/20 to-[#4B2882]/20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <Image
        src={banner}
        alt="Background texture"
        fill
        className="object-cover"
      />
    </div>
    <div className="py-20 px-4 max-w-5xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Introduction to MovieOrca
      </h2>
      {infos.map((info, idx) => (
        <p key={idx} className="mt-6 text-gray-300">
          {info}
        </p>
      ))}
    </div>
  </section>
);

export default InfoSection;
