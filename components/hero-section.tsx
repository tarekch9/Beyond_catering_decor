import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import hero from "/public/images/hero-banner.jpeg"; // Pfad zum Bild
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
       <div className="relative py-18 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div className="absolute inset-0 hidden lg:block">
            <img className="object-cover object-right-bottom w-full h-full" src="/images/hero-banner.jpeg" alt="" />
        </div>

        <div className="relative px-16 border-solid mx-auto sm:px-6 lg:px-20 max-w-8xl">
            <div className="rounded-md mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0 bg-[#8C6E1C] bg-opacity-80 p-8 border border-[#cdab6e]">
                <h1 className="text-3xl text-black sm:text-4xl xl:text-4xl xl:leading-tight text-sm font-serif">BEYOND CATERING & DECOR</h1>
                <p className="mt-2 font-sans font-extralight text-s leading-7 text-white lg:max-w-md xl:pr-0 lg:pr-16">From Conferences to Corporate events, private parties to galas. When it  matters most, we're the partner you can trust to get it right.</p>
                <div className="flex flex-wrap gap-4 py-4">
              <a
                href="#"
                className="text-sm font-light bg-[#94794a] border border-[#cdab6e] text-[#ffffff] px-6 py-3 rounded-md hover:text-black transition-colors duration-300"
              >
                Our Services
              </a>
              <a href="#" className="text-sm font-light border border-[#cdab6e] flex items-center gap-2 hover:bg-[#0a0a0a] transition-colors duration-300 rounded-md text-[#ffffff] px-6 py-3">
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            </div>
        </div>
    </div>
    </section>
    </main>
  )
}

