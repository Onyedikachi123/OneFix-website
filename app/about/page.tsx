import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <main>
      <Navbar />
      <div className="relative w-full h-screen Abouthero">
        <Image
          src="/aboutImg.png"
          alt="About Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate__animated animate__zoomIn">
            About Us
          </h1>
        </div>
      </div>
      <div className="bg-textlightGray px-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8  py-12">
          <div className="flex flex-col justify-center animate__animated animate__zoomIn">
            <Image
              src="/img9.png"
              alt="about image"
              width={640}
              height={317}
              quality={100}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center animate__animated animate__fadeInRight">
            <p className="text-base mb-5">
              OneFix was founded by James Paddy with the vision of providing
              homeowners with a reliable and hassle-free solution for all their
              plumbing, heating, gas fitting, and restoration needs.
            </p>
            <p className="text-base">
              We understand that a comfortable and functional home is essential
              for your well-being, and we&apos;re committed to exceeding your
              expectations with exceptional customer service, high-quality
              workmanship, and comprehensive solutions.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-12 py-8 shadow rounded-xl bg-white animate__animated animate__zoomIn">
          <h2 className="font-medium text-3xl text-textprimary text-center">
            Our Mission
          </h2>
          <p className=" text-base pt-5">
            At OneFix, our mission is to deliver exceptional service and quality
            workmanship. We strive to build lasting relationships with our
            clients through trust, reliability, and outstanding customer
            service. Our dedicated team of certified professionals is committed
            to providing reliable, efficient, and high-quality solutions for all
            your needs.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-16 mt-10">
          <div className="flex flex-col justify-center animate__animated animate__fadeInLeft">
            <h2 className="text-5xl md:text-3xl lg:text-4xl font-bold mb-4">
              Why choose onefix:
            </h2>
            <ul className="list-disc list-outside md:text-lg lg:text-xl space-y-4 text-black pl-5">
              <li className="text-base pl-8">
                Licensed and insured professionals: Our team is highly trained
                and experienced to handle any plumbing or restoration challenge.
              </li>
              <li className="text-base pl-8">
                Guaranteed satisfaction: We stand behind our work and offer a
                100% satisfaction guarantee.
              </li>
              <li className="text-base pl-8">
                24/7 emergency services: We understand that plumbing emergencies
                don&apos;t happen during business hours. We&apos;re available to
                address urgent issues round-the- clock.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center animate__animated animate__fadeInRight">
            <div className="bg-white p-4 rounded-lg relative px-12 mb-7">
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
          <div className="col-span-full">
            <div className="flex justify-center mt-[-80px]">
              <Link
                href="/contact"
                className="inline-block border-2 border-[#0A2699] text-black py-2 px-4 rounded-2xl font-normal text-base animate__animated animate__zoomIn"
              >
                Request a plumber
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
