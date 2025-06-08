import React from "react";
import Image from "next/image";
import specialty1 from "@/assets/icon/specialty1.png";
import specialty2 from "@/assets/icon/specialty2.png";
import specialty3 from "@/assets/icon/specialty3.png";
import specialty4 from "@/assets/icon/specialty4.png";
import specialty5 from "@/assets/icon/specialty5.png";
import specialty6 from "@/assets/icon/specialty6.png";

const feature = [
  {
    icon: specialty1,
    title: "Extensive Movie Database",
    description:
      "Access comprehensive information on over 100,000 movies, including ratings, cast, crew, plot summaries, and release dates.",
  },
  {
    icon: specialty2,
    title: "Critically Acclaimed Reviews",
    description:
      "Read in-depth reviews from professional critics and authentic user opinions to make informed viewing decisions.",
  },
  {
    icon: specialty3,
    title: "Release Alerts",
    description:
      "Never miss a release with personalized alerts for upcoming movies based on your favorite genres and actors.",
  },
  {
    icon: specialty4,
    title: "Personalized Watchlists",
    description:
      "Create and manage your own watchlists to keep track of movies you want to see or have already watched.",
  },
  {
    icon: specialty5,
    title: "Community Discussions",
    description:
      "Engage with fellow movie lovers in discussions, forums, and polls about the latest films and industry news.",
  },
  {
    icon: specialty6,
    title: "Showtimes Near You",
    description:
      "Find movie showtimes at theaters near you with real-time updates and ticket booking options.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-4">
            What is <span className="text-[#7D3FCD]">Movie Orca</span>?
          </h2>
          <p className="text-gray-400 text-xl w-[90%] mx-auto">
            MovieOrca is the ultimate destination for movie enthusiasts seeking
            a seamless and cost free cinematic experience. Say goodbye to
            tedious registration processes and hidden fees at MovieOrca, you can
            dive straight into a vast library of films without any barriers.
            With an extensive collection that spans genres from heart pounding
            action to thought-provoking dramas, there’s something for every
            taste. Whether you’re in the mood for the latest blockbusters or
            timeless classics, all it takes is a click to start watching
            instantly. This user friendly platform redefines convenience,
            offering endless entertainment at no cost and with no strings
            attached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature */}
          {feature.map((item, index) => (
            <div
              key={item.title}
              className="bg-gray-800/50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#7D3FCD]/10 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-[#7D3FCD]/20 rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="rounded-full"
                  ></Image>
                </div>
                <h3 className="text-xl font-semibold ml-4">{item.title}</h3>
              </div>

              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
