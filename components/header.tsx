"use client";

import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import BrandTiktok from "@/components/brand-tiktok";
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
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
      {/* Contact Info Bar (Disappears on scroll down) */}
      <div
        className={`bg-black text-white md:text-base py-3 w-full fixed top-0 left-0 z-50 transition-all duration-300
        }`}
      >
        <div className="font-sans font-thin text-xs container mx-auto px-20 flex justify-between items-center">
          <div>Beyond catering and decor. Catering with love</div>
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+4917636378888" className="hover-line transition-colors">
              +49 176 36378888
            </a>
            <a href="mailto:Beyondcateringdecor.co.uk" className="hover-line transition-colors">
            @Beyondcateringdecor.co.uk
            </a>
          </div>
        </div>
      </div>

      

      {/* Main Header (Stays but fades slightly when scrolling) */}
      <header
        className={`fixed top-[20px] left-0 w-full bg-black text-white p-1 shadow-md z-40 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-40"
        }`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <hr className="mx-8 mt-4 border-t-1 border-gray-300 md:border-t-1 md:border-gray-500" />
        <div className="container mx-auto px-16 py-2 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/images/Logo-black.jpeg"
              alt="Beyond Catering & Decor"
              width={130}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center font-thin font-serif">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="hover:text-[#cdab6e] transition-colors ">
                  Home
                </a>
              </li>
              <li>
                <a href="#westandfor" className="hover:text-[#cdab6e] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#specialised" className="hover:text-[#cdab6e] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#cdab6e] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <a href="https://www.instagram.com/beyondcateringdecor/" target="_blank" className="text-white hover:text-[#cdab6e] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#cdab6e] transition-colors">
              <BrandTiktok size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#cdab6e] transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Push content down to prevent it from being covered */}
      <div className="pt-[90px]" />
    </>
  );
}
