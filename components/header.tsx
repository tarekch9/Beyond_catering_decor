"use client";

import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import BrandTiktok from "@/components/brand-tiktok";
import { useState, useEffect } from "react";
import Modal2 from "@/components/modal/contact-modal copy";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isContactVisible, setIsContactVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsContactVisible(false); // Hide contact bar when scrolling down
        setIsVisible(false); // Also fade the navbar slightly
      } else {
        setIsContactVisible(true); // Show contact bar when scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Contact Info Bar (unverändert) */}
      <div className="bg-black text-white md:text-base py-3 w-full fixed top-0 left-0 z-50 transition-all duration-300">
        <div className="font-sans font-thin text-xs container mx-auto px-4 md:px-20 flex justify-between items-center">
          <div>Beyond catering and decor. Catering with love</div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+447903618868"
              className="hover-line transition-colors"
            >
              +44 7903 618868
            </a>
            <a
              href="mailto:info@beyondcateringdecor.co.uk"
              className="hover-line transition-colors"
            >
              info@beyondcateringdecor.co.uk
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-[40px] md:top-[20px] left-0 w-full bg-black text-white p-1 shadow-md z-40 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-40"
        }`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <hr className="mx-4 md:mx-8 mt-2 md:mt-4 border-t border-gray-300 md:border-gray-500" />

        <div className="container mx-auto px-4 md:px-16 py-2 flex flex-col md:flex-row justify-between items-center">
          {/* Logo und Social Icons (Mobile) */}
          <div className="w-full md:w-auto flex justify-between items-center mb-2 md:mb-0">
            {/* Logo */}
            <div>
              <Image
                src="/images/Logo-black.jpeg"
                alt="Beyond Catering & Decor"
                width={130}
                height={70}
                className="object-contain w-[100px] md:w-[130px]"
              />
            </div>

            {/* Social Media Icons - Nur Mobile */}
            <div className="md:hidden flex items-center space-x-4">
              <a
                href="https://www.instagram.com/beyondcateringdecor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#cdab6e] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#cdab6e] transition-colors"
              >
                <BrandTiktok size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#cdab6e] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="w-full md:w-auto my-2 md:my-0">
            <ul className="flex font-thin font-serif justify-center space-x-4 md:space-x-8 ">
              <li>
                <a
                  href="#"
                  className="hover:text-[#cdab6e] transition-colors text-sm md:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#westandfor"
                  className="hover:text-[#cdab6e] transition-colors text-sm md:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#specialised"
                  className="hover:text-[#cdab6e] transition-colors text-sm md:text-base"
                >
                  Our Services
                </a>
              </li>
              <li className="flex items-center">
                <a className="hover:text-[#cdab6e] transition-colors text-sm md:text-base">
                  <Modal2 />
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons - Nur Desktop */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <a
              href="https://www.instagram.com/beyondcateringdecor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#cdab6e] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#cdab6e] transition-colors"
            >
              <BrandTiktok size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#cdab6e] transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Push content down */}
      <div className="pt-[120px] md:pt-[90px]" />
    </>
  );
}
