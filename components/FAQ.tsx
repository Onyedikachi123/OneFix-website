import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";

const faqs = [
  {
    title:
      "My Basement is flooded. Do I need a plumber or a restoration service?",
    content:
      "You may need both. Either way, we have you covered. We will dispatch a team member to investigate your situation and make a recommendation for water removal and flood cleanup, dry out and repair. If the basement flooding was caused by a plumbing failure like a burst pipe, we will find the root of the problem and offer solutions as quickly as possible.",
  },
  {
    title: "How Long Will it Take to Fix My Problem?",
    content: "While each problem is different, since we work with our network of plumbers to identify a certified plumber who is available and specialized in your issue, you’ll always get the fastest service around. We offer 24/7 emergency service for your convenience. Once we’re at your home or business we’ll complete the job quickly and correctly.",
  },
  {
    title: "How do I get a quote for my project?",
    content: "Getting a quote from Onefix Plumbing is easy. You can either call us directly at our business phone number or fill out the contact form on our website. We prefer to discuss your project over the phone to better understand your needs and schedule a time to visit the property if necessary. This allows us to provide you with the most accurate and tailored quote possible.",
  },
  {
    title:
      "Can you handle both small residential and large commercial projects?",
    content: "Absolutely. Onefix Plumbing has extensive experience and the necessary resources to manage projects of any scale, from minor residential repairs to major commercial renovations and demolitions. Our team is equipped to provide personalized solutions tailored to the unique needs of each project, ensuring the highest quality results.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center mt-8 mb-12">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-16">
        <div className="animate__animated animate__fadeInLeft">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center h-80 ">
          <div className="relative w-auto h-auto">
            <Image
              src="/faqImg.png"
              alt="Plumber"
              layout="responsive"
              width={800}
              height={700}
              objectFit="contain"
             className="mt-12 animate__animated animate__fadeInRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
