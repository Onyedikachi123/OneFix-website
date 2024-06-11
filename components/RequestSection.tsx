import React from 'react'
import Link from "next/link";

const RequestSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-32 request-section">
    <div className="container mx-auto flex flex-col md:flex-row items-start px-4 md:px-0">
      <div className="w-full md:w-1/3 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
        <h2 className="text-5xl md:text-5xl font-bold mb-4 text-textprimary">
          Plumbing issues?
        </h2>
        <p className="text-2xl md:text-2xl font-medium mb-4 text-textprimary">
          Let us help you!
        </p>
      </div>
      <div className="w-full md:w-2/3 animate__animated animate__fadeInRight">
        <p className="text-base mb-4 text-[#4A4949]">
          Don&apos;t let a dripping faucet, clogged drain, or running
          toilet turn into a major headache. OneFix tackles all your
          common plumbing issues quickly and efficiently.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 border-2 border-[#0A2699] text-black py-2 px-4 rounded-full font-normal text-base"
        >
          Request a plumber
        </Link>
      </div>
    </div>
  </section>
  )
}

export default RequestSection