import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
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

const Service = () => {
  return (
    <main>
      <Navbar />
      <div className="relative w-full h-screen Abouthero">
        <Image
          src="/img10.png"
          alt="Service Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate__animated animate__zoomIn">
            Service
          </h1>
        </div>
      </div>

      <div className="bg-textlightGray py-12 font-base animate__animated animate__lightSpeedInLeft">
        <div className="px-28">
          <p className="mb-5">
            At ONEFIX, we take care of all your home&apos;s essential needs.
            Don&apos;t let plumbing leaks, heating malfunctions, or unexpected
            restoration needs disrupt your life.
          </p>
          <p className="mb-5">
            OneFix offers a comprehensive range of services to keep your home
            comfortable, functioning flawlessly, and restored to its best
            condition. Our team of licensed and insured professionals is here to
            tackle any challenge, big or small. Explore our services below and
            let OneFix take care of everything.
          </p>
          <p className="pb-12">Here&apos;s how OneFix can help with you:</p>
        </div>

        <div className="py-12 px-4 sm:px-8 md:px-16 bg-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate__animated animate__zoomIn">
            Plumbing
          </h1>
          <p className="text-sm md:text-base mb-5 animate__animated animate__lightSpeedInLeft">
            Is your sink overflowing? Toilet refusing to cooperate? No problem!
            OneFix tackles all your plumbing woes, big or small. We have a team
            of licensed and experienced plumbers ready to diagnose and fix any
            leak, clog, or malfunctioning fixture. We use advanced techniques
            and high-quality materials to ensure long-lasting repairs and keep
            your water flowing smoothly.
          </p>
          <p className="text-sm md:text-base mb-12 animate__animated animate__lightSpeedInLeft">
            Here&apos;s how OneFix can help with your plumbing needs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <Image
                src="/img11.png"
                alt="Plumbing Service 1"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg animate__animated animate__zoomIn"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/img12.png"
                alt="Plumbing Service 2"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg animate__animated animate__zoomIn"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/img13.png"
                alt="Plumbing Service 3"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg animate__animated animate__zoomIn"
              />
            </div>
          </div>

          <ul className="my-12 list-disc list-outside animate__animated animate__fadeInLeft">
            <h3 className="pb-8">WE OFFER</h3>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">Leak Detection and Repair:</span>{" "}
              We identify and fix leaks, both big and small, to prevent water
              damage and wasted resources.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">Drain Cleaning:</span> Clogged
              drains are a nuisance. We use advanced techniques to clear clogged
              drains, from slow kitchen sinks to backed-up toilets.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Toilet Repair and Replacement:
              </span>
              Is your toilet running constantly, refusing to flush, or leaking?
              We can diagnose the problem and provide repairs or complete toilet
              replacements.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Faucet and Fixture Installation:
              </span>
              Want to upgrade your bathroom or kitchen with new faucets and
              fixtures? OneFix can handle the installation efficiently and
              ensure everything functions properly.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">Garbage Disposal Services:</span>A
              jammed garbage disposal can disrupt your kitchen routine. We can
              diagnose and fix disposal issues or recommend replacements if
              needed.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Water Heater Repair and Replacement:
              </span>
              No hot water? Our technicians can diagnose and repair water heater
              problems or recommend a new energy-efficient model for
              replacement.
            </li>
          </ul>
          <div className="text-center">
            <Link href="/contact">
              <button className="mt-4 bg-[#0A2699] text-white py-2 px-4 rounded-lg animate__animated animate__zoomIn">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="py-12 px-4 sm:px-8 md:px-16 bg-white mt-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Heating
          </h1>
          <p className="text-sm md:text-base mb-5">
            Keeping your home warm and comfortable during chilly seasons is
            essential. OneFix ensures your heating system runs efficiently
            throughout winter. Our qualified technicians can service and repair
            your furnace or boiler, install a new heating system if needed, and
            even help you optimize your thermostat settings for maximum comfort
            and energy savings.
          </p>
          <p className="text-sm md:text-base mb-12">
            Here&apos;s how OneFix can keep your home warm:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <Image
                src="/img14.png"
                alt="Plumbing Service 4"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/img15.png"
                alt="Plumbing Service 5"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/img16.png"
                alt="Plumbing Service 6"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <ul className="my-12 list-disc list-outside">
            <h3 className="pb-8">WE OFFER</h3>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Furnace Repair and Maintenance:
              </span>
              Ensure your furnace keeps you warm throughout the winter with
              routine maintenance and repairs from our qualified technicians.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Boiler Repair and Maintenance:
              </span>{" "}
              Similar to furnaces, we service and repair boilers to keep your
              home warm and comfortable during cold seasons.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">Heater Installation:</span>
              Looking for a new heating system? Onefix can help you choose the
              right heater for your needs and handle the installation process.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Thermostat Installation and Repair:
              </span>
              Having trouble controlling your home&apos;s temperature? We can
              install new thermostats or repair existing ones for optimal
              comfort.
            </li>
          </ul>
          <div className="text-center">
            <Link href="/contact">
              <button className="mt-4 bg-[#0A2699] text-white py-2 px-4 rounded-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="py-12 px-4 sm:px-8 md:px-16 bg-white mt-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Gas Fitting
          </h1>
          <p className="text-sm md:text-base mb-5">
            Natural gas appliances provide convenience, but safety is paramount.
            OneFix employs licensed gas fitters who can safely install new gas
            lines, repair existing ones, and service your gas appliances. We
            also offer gas leak detection to ensure the safety of your home and
            family.
          </p>
          <p className="text-sm md:text-base mb-12">
            Onefix ensures your gas appliances function safely and efficiently:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <Image
                src="/img17.png"
                alt="Plumbing Service 7"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/img18.png"
                alt="Plumbing Service 8"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/img19.png"
                alt="Plumbing Service 9"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <ul className="my-12 list-disc list-outside">
            <h3 className="pb-8">WE OFFER</h3>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Gas Line Installation and Repair:
              </span>{" "}
              Our licensed gas fitters can safely install new gas lines for
              appliances or repair existing ones to ensure proper functioning.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Gas Appliance Installation and Repair:
              </span>{" "}
              Need help installing or repairing a gas stove, oven, water heater,
              or fireplace? Our team is qualified to handle various gas
              appliance services.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">
                Gas Leak Detection and Repair:
              </span>
              Gas leaks pose a serious safety hazard. We can detect and repair
              gas leaks promptly to ensure the safety of your home and family.
            </li>
          </ul>
          <div className="text-center">
            <Link href="/contact">
              <button className="mt-4 bg-[#0A2699] text-white py-2 px-4 rounded-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="py-12 px-4 sm:px-8 md:px-16 bg-white mt-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Restoration
          </h1>
          <p className="text-sm md:text-base mb-5">
            Water damage, mold growth, or fire damage can be devastating
            experiences. OneFix offers comprehensive restoration services to get
            your home back to its pre-damage condition. Our team can handle
            everything from water extraction and drying to mold remediation and
            smoke odor removal. We work with you and your insurance company to
            ensure a smooth and efficient restoration process.
          </p>
          <p className="text-sm md:text-base mb-12">
            OneFix helps you restore your home after unexpected events:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <Image
                src="/img20.png"
                alt="Plumbing Service 10"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/img21.png"
                alt="Plumbing Service 11"
                width={640}
                height={317}
                quality={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <ul className="my-12 list-disc list-outside">
            <h3 className="pb-8">WE OFFER</h3>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">Water Damage Restoration:</span>
              Water damage can be devastating. OneFix provides comprehensive
              water damage restoration services, including water extraction,
              drying, mold remediation, and deodorization, to get your home back
              to its pre-damage condition.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">Mold Remediation:</span>
              Mold growth can pose health risks. Our professionals safely remove
              mold and address the root cause of the problem to prevent
              recurrence.
            </li>
            <li className="text-base pl-8 pb-3">
              <span className="font-semibold">Fire Damage Restoration:</span>
              Fire damage can be a traumatic experience. OneFix offers fire
              damage restoration services to clean up soot and smoke damage,
              remove debris, and help you rebuild your home.
            </li>
          </ul>
          <div className="text-center">
            <Link href="/contact">
              <button className="mt-4 bg-[#0A2699] text-white py-2 px-4 rounded-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto text-center mb-12">
          <h4 className="text-5xl font-bold">Our Work</h4>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16">
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
      </div>
      <Footer />
    </main>
  );
};

export default Service;
