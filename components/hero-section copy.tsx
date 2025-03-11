import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import hero from "/public/images/hero-banner.jpeg"; // Pfad zum Bild
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <main className="min-h-screen">
       <div class="relative py-18 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div class="absolute inset-0 hidden lg:block">
            <img className="object-cover object-right-bottom w-full h-full" src="/images/hero-banner.jpeg" alt="" />
        </div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
                <h1 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">BEYOND CATERING & DECOR</h1>
                <p class="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">From conferences to corporate events, private parties to galas. when it  matters most, we're the partner you can trust to get it right.</p>
                <div class="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                    <a
                        href="#"
                        title=""
                        class="
                            inline-flex
                            items-center
                            justify-center
                            px-3
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-white
                            border border-transparent
                            rounded-md
                            sm:px-6
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                            hover:bg-gray-200
                        "
                        role="button"
                    >
                        Our Services
                    </a>

                    <div className="flex justify-center mt-12">
            <a
              href="#contact"
              className="border border-[#cdab6e] text-[#ffffff] px-8 py-3 rounded-md hover:bg-[#94794a] hover:text-black transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
                    {/* <a
                        href="#"
                        title=""
                        class="
                            inline-flex
                            items-center
                            justify-center
                            px-2
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-transparent
                            border border-transparent
                            rounded-md
                            sm:px-4
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700
                            hover:bg-gray-700
                        "
                        role="button"
                    >
                        Contact Us
                    </a> */}
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}

