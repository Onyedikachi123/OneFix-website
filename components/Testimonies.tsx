"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Teresa Johnson",
    imageUrl: "/testwoman.jpeg",
    rating: 5,
    testimonial:
      "Our kitchen sink clogged up on a Sunday afternoon. Luckily, OneFix offers 24/7 emergency services. The plumber arrived promptly, cleared the clog quickly, and the price was very reasonable. So happy we found them!",
  },
  {
    name: "Donald Jorg",
    imageUrl: "/testmonman.jpeg",
    rating: 5,
    testimonial:
      "OneFix is my go-to company for all my plumbing and heating needs. They are reliable, trustworthy, and always get the job done right. It's so convenient to have one company handle everything – it saves me time and hassle.",
  },
  {
    name: "Susan W.",
    imageUrl: "/testwoman.jpeg",
    rating: 5,
    testimonial:
      "Great service every time! The technicians are knowledgeable and respectful. Highly recommend for any urgent plumbing needs.",
  },
  {
    name: "Michael B.",
    imageUrl: "/testmonman.jpeg",
    rating: 5,
    testimonial:
      "Very professional and quick response. The prices are very fair, and the work is of high quality. I'm a satisfied customer!",
  },
];

const Testimonies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 2 + reviews.length) % reviews.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 2) % reviews.length);
  };

  return (
    <section className="bg-textlightGray relative py-12 px-16">
      <h2 className="text-5xl  font-bold mb-12 text-center animate__animated animate__zoomIn">
        Customer Testimonials
      </h2>
      <div className="px-16">
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-black  rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center items-center overflow-hidden space-x-16 px-4 ">
          {reviews.slice(activeIndex, activeIndex + 2).map((review, index) => (
            <div key={index} className="flex flex-col items-center w-1/2">
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={review.imageUrl}
                  alt={review.name}
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <p className="text-sm font-semibold">{review.name}</p>
              <div className="flex mt-1 mb-3">
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star key={i} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>
              <p className="text-center text-sm italic font-light">
                {review.testimonial}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonies;
