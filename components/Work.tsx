import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/img1.png", alt: "Image 1" },
  { src: "/img2.png", alt: "Image 2" },
  { src: "/img3.png", alt: "Image 3" },
  { src: "/img4.png", alt: "Image 4" },
  { src: "/img5.png", alt: "Image 5" },
  { src: "/img6.png", alt: "Image 6" },
  { src: "/img7.png", alt: "Image 7" },
  { src: "/img8.png", alt: "Image 8" },
];

const Work: React.FC = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto text-center mb-12">
        <h4 className="text-5xl font-bold animate__animated animate__zoomIn">Our Work</h4>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16 animate__animated animate__zoomIn">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-48 md:h-64 lg:h-72">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="#">
          <button className="bg-bprimary text-white py-2 px-12 rounded-2xl font-normal text-sm hover:bg-[#FEC32C]">
            View more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Work;
