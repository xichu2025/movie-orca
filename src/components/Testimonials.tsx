import React from "react";
import Image from "next/image";
import Amelia from "@/assets/img/Amelia.jpeg";
import Emily from "@/assets/img/Emily.jpeg";
import Joseph from "@/assets/img/Joseph.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: Amelia,
      role: "Film Enthusiast",
      rating: 5,
      content:
        "Movie Orca has completely transformed how I discover new movies. The recommendation system is incredibly accurate, and I love the detailed reviews. It's like having a personal film critic at my fingertips!",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: Emily,
      role: "Regular Moviegoer",
      rating: 5,
      content:
        "I've tried many movie apps, but none compare to Movie Orca. The interface is clean, the information is comprehensive, and I especially appreciate the showtimes feature. It's my go-to app for everything movie-related.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: Joseph,
      role: "Film Student",
      rating: 4,
      content:
        "As a film student, I need in-depth analysis and access to a wide range of films. Movie Orca delivers both. The database is extensive, and the community discussions have helped me gain new perspectives on classic and contemporary films.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-4">
            What Our <span className="text-[#7D3FCD]">Users Say</span>
          </h2>
          <h3 className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of movie enthusiasts who trust Movie Orca for their
            cinematic journey.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800/50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#7D3FCD]/10"
            >
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {Array(testimonial.rating).map((_, i) => (
                  <i key={i} className="fa fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-300 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
