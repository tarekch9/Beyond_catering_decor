import Image from "next/image"
import myImage from "/public/images/board.jpeg"; // Pfad zum Bild
import { ArrowRight, Check } from "lucide-react"
import Button from "@/components/page";


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

            <div className="flex flex-wrap gap-3">
              <a
                href="#specialised"
                className="text-[#cdab6e] px-4 py-2 rounded-md hover:underline"
              >
                Our Services
              </a>
              <a className="flex items-center text-[#cdab6e]">
              <Button/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

