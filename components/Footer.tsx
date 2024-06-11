import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bprimary text-lg-start text-white text-sm font-light pt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-20">
        <div className="flex flex-col animate__animated animate__fadeInLeft">
          <Image
            src="/logowhite.png"
            alt="logo"
            width={120}
            height={44}
            className="cursor-pointer mb-7"
          />
          <p className="text-sm">
            OneFix tackles all your home&apos;s essential needs – from leaky
            pipes and clogged drains to malfunctioning heaters and gas line
            issues. We also offer comprehensive restoration services to get your
            home back to top shape after any water damage.
          </p>
        </div>
        <div className="flex flex-col animate__animated animate__zoomIn">
          <h3 className="text-4xl font-bold mb-4">Quick links</h3>
          <ul>
            <li className="text-sm mb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm mb-2">
              <Link href="/about">About</Link>
            </li>
            <li className="text-sm mb-2">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-sm">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="text-sm">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col animate__animated animate__fadeInRight">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul>
            <li className="text-sm mb-2 flex items-center">
              <span className="mr-2">
                <Instagram />
              </span>
              @onefixplumbingandrestoration
            </li>
            <li className="text-sm mb-2 flex items-center">
              <span className="mr-2">
                <Facebook />
              </span>
              One fix plumbing
            </li>
            <li className="text-sm mb-2 flex items-center">
              <span className="mr-2">
                <Linkedin />
              </span>
              One fix plumbing
            </li>
          </ul>

          {/* <p className="text-sm mb-2"><Instagram />  @onefixplumbingandrestoration</p>
          <p className="text-sm mb-2"><span><Facebook /></span> One fix plumbing</p>
          <p className="text-sm"><span><Linkedin /></span> One fix plumbing</p> */}
        </div>
      </div>
      <div className="bg-footerSecondary px-28 mt-24 py-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-20">
          <div className="flex items-center">
            <span className="mr-2 flex items-center">
              <MapPin />
            </span>
            <p className="text-xs">1333 16a Street NW, Edmonton, Alberta T6T 2M9, Canada</p> 
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
      <div className="text-center p-3">
        <Link href="#" className="mr-1">
          COPYRIGHT ©2024
        </Link>
        ONE FIX
      </div>
    </footer>
  );
};

export default Footer;
