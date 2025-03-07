import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import hero from "/public/images/hero-banner.jpeg"; // Pfad zum Bild
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative h-screen w-full h-[2000px]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="Elegant catering display with champagne and appetizers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10  flex h-full flex-col items-start justify-end p-8 md:p-16 lg:p-24">
          <div className="max-w-2xl bg-[#8C6E1C] opacity-75 rounded-3xl max-w-5xl p-16">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              BEYOND CATERING & DECOR
            </h1>
            <p className="mt-4 text-lg text-white md:text-xl lg:text-2xl">
              From conferences to corporate events, private parties to galas, when it matters most, we're the partner
              you can trust to get it right.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-[#cdab6e] text-black hover:bg-[#8c6e1c] hover:text-white">Our Services</Button>
              <Button variant="outline" className="border-[#cdab6e] text-white hover:bg-[#cdab6e] hover:text-black">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

