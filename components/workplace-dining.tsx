import Image from "next/image"
import myImage from "/public/images/board.jpeg"; // Pfad zum Bild
import { ArrowRight, Check } from "lucide-react"

export default function WorkplaceDining() {
  return (
    <section className="py-20 px-4 bg-[#191a23]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="rounded-2xl overflow-hidden border border-[#cdab6e] border-3">
            <Image
              src={myImage}
              alt="Charcuterie board with various meats, cheeses, fruits and crackers"
              width={700}
              height={500}
              layout="fixed"
              className="rounded-2xl"
              //className="w-full h-auto object-cover rounded-3xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-[#cdab6e]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
              Elevate Your Workplace Dining Experience Today
            </h2>

            <p className="mb-6 text-[#f2f1f0]/90 font-extralight">
              Transform your workplace with our tailored food service programs that prioritize health and variety.
              Delight your employees with fresh, delicious meals that cater to diverse tastes and dietary needs.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="mt-1 flex-shrink-0" />
                <span>Customized menus to suit every employee's preferences.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 flex-shrink-0" />
                <span>Healthy, fresh options delivered right to your workplace.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 flex-shrink-0" />
                <span>Boost morale with diverse culinary offerings.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-1">
              <a
                href="#"
                className="border border-[#cdab6e] text-[#cdab6e] px-6 py-3 rounded-md hover:bg-[#94794a] hover:text-black transition-colors duration-300"
              >
                Our Services
              </a>
              <a href="#" className="flex items-center gap-2 text-[#cdab6e] px-6 py-3 hover:underline">
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

