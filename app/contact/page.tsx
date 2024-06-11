import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";

import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <section className="relative w-full h-screen contacthero">
        <Image
          src="/img23.png"
          alt="Contact Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 ">
            Contact
          </h1>
        </div>
      </section>

      <section className="bg-white py-12">
        <h1 className="font-bold text-5xl text-center mt-8 mb-16">Contact Us</h1>
        <p className="font-normal text-center text-base px-24">Reach out to Onefix however you&apos;re most comfortable! Give us a call, send an email, or fill out the contact form below. We look forward to hearing from you.</p>
        <div className="py-5">
          <div className="max-w-xl mx-auto">
            {/* Grid for contact information now shares the same max-width as the form below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div className="flex items-center">
                <span className="mr-2 flex items-center">
                  <MapPin />
                </span>
                <p className="text-xs">
                  1333 16a Street NW, Edmonton, Alberta T6T 2M9, Canada
                </p>
              </div>
              <div className="flex items-center">
                <span className="mr-2 flex items-center">
                  <Mail />
                </span>
                <p className="text-xs">onefix@info.com</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2 flex items-center">
                  <Phone />
                </span>
                <p className="text-xs">5877120092</p>
              </div>
            </div>
          </div>
          <div className="max-w-xl w-full mx-auto bg-[#4B69E8] rounded-lg overflow-hidden mt-12 px-10">
            {/* Form retains its container settings */}
            <form className="space-y-4 p-6 rounded-lg text-white">
              <h2 className="text-2xl font-bold text-center">
                Request a plumbing service call today
              </h2>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 px-3 py-4 w-full border-2 rounded-md border-white bg-transparent placeholder-white text-xs"
                placeholder="Name"
              />
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                className="mt-1 px-3 py-4 w-full border-2 rounded-md border-white bg-transparent placeholder-white text-xs"
                placeholder="Phone Number"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 px-3 py-4 w-full border-2 rounded-md border-white bg-transparent placeholder-white text-xs"
                placeholder="Email"
              />
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 px-3 py-4 w-full border-2 rounded-md border-white bg-transparent placeholder-white text-xs"
                placeholder="Message"
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-bprimary text-white py-2 px-12 rounded-lg font-normal text-xs"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
