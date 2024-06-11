import React from 'react';
import Image from "next/image";


const ServicesSection: React.FC = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto text-center mb-12">
        <h4 className="text-5xl font-bold animate__animated animate__zoomIn">Our Services</h4>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-16 animate__animated animate__zoomIn">
        <div className="bg-bprimary text-textlightGray py-8 px-4 rounded-lg flex flex-col items-center justify-center">
        <Image
            src="/plumbing.png"
            alt="tapIcon"
            width={50}
            height={50}
            className="cursor-pointer mb-5"
          />
          <h5 className="text-3xl font-medium mb-2">Plumbing</h5>
          <p className="text-center text-sm font-normal">We fix leaks, clogs, toilets, faucets, disposals, and water heaters. Emergency services available 24/7</p>
        </div>
        <div className="bg-bprimary text-textlightGray py-8 px-4 rounded-lg flex flex-col items-center justify-center">
        <Image
            src="/heater.png"
            alt="heaterIcon"
            width={50}
            height={50}
            className="cursor-pointer mb-5"
          />
          <h5 className="text-3xl font-medium mb-2">Heating</h5>
          <p className="text-center text-sm font-normal">We service and install furnaces, boilers, heaters, and thermostats to keep you warm.</p>
        </div>
        <div className="bg-bprimary text-textlightGray py-8 px-4 rounded-md flex flex-col items-center justify-center">
        <Image
            src="/flame.png"
            alt="flameIcon"
            width={50}
            height={50}
            className="cursor-pointer mb-5"
          />
          <h5 className="text-3xl font-medium mb-2">Gas fitting</h5>
          <p className="text-center text-sm font-normal">Our licensed professionals handle gas line installations, repairs for appliances, and leak detection for your safety.</p>
        </div>
        <div className="bg-bprimary text-textlightGray py-8 px-4 rounded-md flex flex-col items-center justify-center">
        <Image
            src="/driver.png"
            alt="driverIcon"
            width={50}
            height={50}
            className="cursor-pointer mb-5 mt-6"
          />
          <h5 className="text-3xl font-medium mb-2">Restoration</h5>
          <p className="text-center text-sm font-normal">We restore your home after water damage, mold growth, or fire. We handle everything from water extraction to content cleaning and reconstruction.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;