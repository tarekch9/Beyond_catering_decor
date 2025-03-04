import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import BrandTiktok from "@/components/brand-tiktok"
import ServicesSection from "@/components/services-section"
import WorkplaceDining from "@/components/workplace-dining"
import SpecialtiesGrid from "@/components/specialties-grid"
import TrustedPartner from "@/components/trusted-partner"
import CateringOccasion from "@/components/catering-occasion"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#191a23]">
      {/* Header */}
      <div className="bg-[#080600] text-white">
        {/* Top bar with contact info */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm md:text-base">
          <div>Beyond catering and decor. Catering with love</div>
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+4917636378888" className="hover:text-[#cdab6e] transition-colors">
              +49 176 36378888
            </a>
            <a href="mailto:beyond_catering@gmail.com" className="hover:text-[#cdab6e] transition-colors">
              beyond_catering@gmail.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/images/Logo-black.jpeg"
              alt="Beyond Catering & Decor"
              width={150}
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
      </div>

      {/* What We Stand For Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-black rounded-3xl p-16">
          <h2 className="text-[#cdab6e] text-5xl md:text-6xl font-serif text-center mb-10">What We Stand For</h2>

          <div className="text-[#cdab6e] text-center space-y-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl">
              We believe great food and service are the foundation of our successful long-term client partnerships.
              Providing creative hospitality solutions is born from our mantra to "care more."
            </p>

            <p className="text-lg md:text-xl">
              Sustainability is in our DNA., we practice what we preach. We will continually strive to be eco-conscious
              in everything we do.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#contact"
              className="border border-[#cdab6e] text-[#cdab6e] px-8 py-3 rounded-md hover:bg-[#cdab6e] hover:text-black transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Workplace Dining Section */}
      <WorkplaceDining />

      {/* Trusted Partner Section */}
      <TrustedPartner />

      {/* Specialties Grid */}
      <SpecialtiesGrid />

      {/* Catering Occasion */}
      <CateringOccasion />

      {/* Footer would go here */}
      <Footer />
    </main>
  )
}

