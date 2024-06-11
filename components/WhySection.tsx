import React from "react";
import Image from "next/image";

const WhySection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 w-full overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-16">
        <div className="flex flex-col justify-center animate__animated animate__fadeInLeft">
          <h2 className="text-5xl md:text-3xl lg:text-4xl font-bold mb-4">
            Why choose onefix:
          </h2>
          <ul className="list-disc list-outside md:text-lg lg:text-xl space-y-4 text-black pl-5">
            <li className="text-base pl-8">
              Licensed and insured professionals: Our team is highly trained and
              experienced to handle any plumbing or restoration challenge.
            </li>
            <li className="text-base pl-8">
              Guaranteed satisfaction: We stand behind our work and offer a 100%
              satisfaction guarantee.
            </li>
            <li className="text-base pl-8">
              24/7 emergency services: We understand that plumbing emergencies
              don&apos;t happen during business hours. We&apos;re available to
              address urgent issues round-the- clock.
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center animate__animated animate__fadeInRight">
          <div className="bg-white p-4 rounded-lg relative px-12">
            <div className="relative w-full h-96">
              <Image
                src="/onefixIcon.png"
                alt="Onefix Icon"
                layout="fill"
                objectFit="contain"
                className="absolute inset-0 w-full h-full z-0"
              />
              <Image
                src="/plumber.png"
                alt="Plumber"
                layout="fill"
                objectFit="contain"
                className="absolute inset-0 w-full h-full z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
