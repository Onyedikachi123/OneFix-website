import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Image 
        src="/hero-img.png" 
        alt="Hero Image" 
        layout="fill" 
        objectFit="cover" 
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate__animated animate__zoomIn">From minor repairs to major <span className='text-[#FEC32C]'>renovations</span></h1>
        <p className="text-white text-lg md:text-1xl animate__animated animate__zoomIn">Clogged drains? Leaky pipes? Onefix!</p>
        <Link href="/contact">
          <button className="mt-4 bg-[#0A2699] text-white py-2 px-8 rounded-2xl animate__animated animate__shakeX hover:bg-[#FEC32C]">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
