"use client";

import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import BrandTiktok from "@/components/brand-tiktok"
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
       
    <header
      className={`fixed top-0 left-0 w-full bg-black text-white p-4 shadow-md z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-40"
      }`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
<div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/images/Logo-black.jpeg"
              alt="Beyond Catering & Decor"
              width={160}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="hover:text-[#cdab6e] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#cdab6e] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#cdab6e] transition-colors">
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
            <a href="#" className="text-white hover:text-[#cdab6e] transition-colors">
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
  );
}
