import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import BrandTiktok from "@/components/brand-tiktok"
import Header from "@/components/header"
import Explore_catering from "@/components/explore_catering"
import WeStandFor from "@/components/we-stand-for"
import WorkplaceDining from "@/components/workplace-dining"
import SpecialtiesGrid1 from "@/components/specialties-grid-1"
import SpecialtiesGrid2 from "@/components/specialties-grid-2"
import SpecialtiesGrid3 from "@/components/specialties-grid-3"
import TrustedPartner from "@/components/trusted-partner"
import CateringOccasion from "@/components/catering-occasion"
import Hero from '@/components/hero-section'
import Footer from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#191a23]">
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* What We Stand For Section */}
      <WeStandFor />

      {/* Services Section */}
      <Explore_catering />

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

