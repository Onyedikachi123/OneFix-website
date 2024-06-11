"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow px-16">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={44}
            className="cursor-pointer"
          />
        </Link>
        <button
          className="block lg:hidden px-3 py-2 border rounded text-gray-800 border-gray-600"
          onClick={toggleMenu}
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex lg:space-x-14 text-md">
            <li>
              <Link href="/">
                <span className="block mt-4 lg:inline-block lg:mt-0 text-[#010101] hover:text-gray-900">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="block mt-4 lg:inline-block lg:mt-0 text-[#010101] hover:text-gray-900">
                  About
                </span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/services">
                <span className="block mt-4 lg:inline-block lg:mt-0 text-[#010101] hover:text-gray-900 cursor-pointer">
                  Services
                </span>
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 z-50">
                {" "}
                {/* Increase z-index here */}
                <ul className="block text-sm">
                  <li>
                    <Link href="/services#plumbing">
                      <span className="block px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer">
                        Plumbing
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#heating">
                      <span className="block px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer">
                        Heating
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#gasfitting">
                      <span className="block px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer">
                        Gas Fitting
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#restoration">
                      <span className="block px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer">
                        Restoration
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/blog">
                <span className="block mt-4 lg:inline-block lg:mt-0 text-[#010101] hover:text-gray-900">
                  Blog
                </span>
              </Link>
            </li>
          </ul>
          <Link href="/contact">
            <span className="mt-4 lg:mt-0 lg:ml-14 bg-[#0A2699] text-white py-2 px-4 rounded-md cursor-pointer text-md">
              Contact
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
