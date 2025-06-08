import React from "react";

const faqs = [
  {
    question: "How to use MovieOrca",
    answer: `It is simple and convenient for all users. You can start using it simply by visiting the MovieOrca website on any device, whether it's a smartphone, tablet, laptop or desktop computer. After visiting the website, users can browse various types of films, search for specific films or explore the latest released films. MovieOrca is designed to be simple and intuitive, allowing viewers to quickly access and enjoy their favorite movies and TV shows without any complex Settings.`,
  },
  {
    question: "MovieOrca Delivers Vast Collection of Movies and TV",
    answer: `MovieOrca creates an unprecedented treasure trove of film and television resources for movie fans around the world. As a comprehensive platform integrating diverse content such as movies, TV series and documentaries, it has become the preferred viewing location for thousands of viewers with its ultra-full category coverage, high-definition picture quality experience and convenient access mode.`,
  },
  {
    question: "MovieOrca Delivers Superior Streaming Quality",
    answer: `MovieOrca adheres to the belief of "quality first" and has built a digital bridge connecting global audiences with high-definition films and TV series. As a streaming media platform that emphasizes ultimate picture quality, smooth performance and technological innovation, it breaks through the experience bottleneck of traditional online playback, making every frame a visual feast and every click a seamless immersive journey.`,
  },
  {
    question: "MovieOrca requires no registration and is free",
    answer: `MovieOrca redefines the rules of online movie viewing with a disruptive attitude - no need to register an account, no need to pay for a subscription, no need for complicated operations. Just open and watch, truly achieving "zero-cost enjoyment of global film and television resources". Here, there are no cumbersome procedures to bind, no hidden consumption traps, only pure movie-watching freedom and the unlimited release of a vast amount of content.`,
  },
];

const FAQSection = () => (
  <section className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">About MovieOrca</h2>
    <div className="space-y-8">
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQSection;
