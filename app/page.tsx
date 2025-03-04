import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import BrandTiktok from "@/components/brand-tiktok"
import Header from "@/components/header"
import ServicesSection from "@/components/services-section"
import WeStandFor from "@/components/we-stand-for"
import WorkplaceDining from "@/components/workplace-dining"
import SpecialtiesGrid1 from "@/components/specialties-grid-1"
import SpecialtiesGrid2 from "@/components/specialties-grid-2"
import SpecialtiesGrid3 from "@/components/specialties-grid-3"
import TrustedPartner from "@/components/trusted-partner"
import CateringOccasion from "@/components/catering-occasion"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#191a23]">
      
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


      {/* Header */}
      <Header />

      {/* What We Stand For Section */}
      <WeStandFor />

      {/* Services Section */}
      <ServicesSection />

      {/* Workplace Dining Section */}
      <WorkplaceDining />

      {/* Trusted Partner Section */}
      <TrustedPartner />

      {/* Specialties Grid */}
      <SpecialtiesGrid1 />

      <SpecialtiesGrid2 />

      <SpecialtiesGrid3 />

      {/* Catering Occasion */}
      <CateringOccasion />

      {/* Footer would go here */}
      <Footer />
    </main>
  )
}

