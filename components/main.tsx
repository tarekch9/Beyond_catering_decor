import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import hero from "/public/images/hero-banner.jpeg"; // Pfad zum Bild
import Modal from "@/components/modal/contact-modal";
import Button from "@/components/modal/contact-modal";
import { MessageSquare, SmilePlus } from "lucide-react";
import myImage from "/public/images/board.jpeg"; // Pfad zum Bild
import ModalCopy from "@/components/modal/privacypolicy-modal";
import ModalCopy2 from "@/components/modal/termsconditions-modal";
import Modal2 from "@/components/modal/contact-modal copy";

import SpecialtiesGrid1 from "@/components/specialties-grid-1";
import SpecialtiesGrid2 from "@/components/specialties-grid-2";
import SpecialtiesGrid3 from "@/components/specialties-grid-3";

import { ShoppingBasket, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen mt-16">
      <section id="home" aria-label="Home Section">
      <div className="relative min-h-screen md:pb-80 md:pt-80">
  <div className="absolute inset-0 overflow-hidden">
    <img
      className="object-cover w-full h-full"
      style={{
        objectPosition: "center center",
      }}
      src="/images/hero-banner.jpeg"
      alt="Hero Banner"
      loading="lazy"
    />
  </div>
  <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:px-8 md:py-20 lg:px-12">
    <div className="rounded-md mx-auto text-center w-full max-w-md lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0 bg-[#8C6E1C] bg-opacity-80 p-4 lg:p-4 border border-[#cdab6e]">
      <h1 className="text-2xl text-[#2b2b2a] sm:text-3xl xl:text-4xl xl:leading-tight font-serif">
        BEYOND CATERING & DECOR
      </h1>
      <p className="mt-2 font-sans font-extralight text-sm leading-6 sm:leading-7 text-white">
        From Conferences to Corporate events, private parties to galas.
        When it matters most, we're the partner you can trust to get it
        right.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 py-3 justify-center lg:justify-start">
        <a href="#">
          <Modal />
        </a>
        <a
          href="#specialised"
          className="text-sm font-light bg-[#94794a] border border-[#cdab6e] text-white px-6 py-3 rounded-md hover:bg-[#cdab6e] hover:text-black transition-colors duration-300 text-center"
        >
          Our Services
        </a>
      </div>
    </div>
  </div>
</div>
      </section>
      <section id="westandfor" className="scroll-mt-36 mt-16 px-4 pb-20">
        <div className="max-w-5xl mx-auto bg-black rounded-3xl p-14">
          <h2 className="text-[#cdab6e] text-4xl font-serif text-center mb-10">
            What We Stand For
          </h2>

          <div className="text-[#cdab6e] text-center space-y-8 max-w-3xl mx-auto">
            <p className="text-base md:text-base">
              We believe great food and service are the foundation of our
              successful long-term client partnerships. Providing creative
              hospitality solutions is born from our mantra to "care more."
            </p>

            <p className="text-base md:text-base">
              Sustainability is in our DNA., we practice what we preach. We will
              continually strive to be eco-conscious in everything we do.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            {/* <a
              href="#contact"
              className="border border-[#cdab6e] text-[#ffffff] px-8 py-3 rounded-md hover:bg-[#94794a] hover:text-black transition-colors duration-300"
            >
              Contact Us
            </a> */}
            <Button />
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#191a23] text-[#cdab6e] border-t border-[#555555] ">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-10 leading-tight text-center">
            Explore Our Exceptional Catering Services Tailored For Every
            Occasion
          </h2>
          <div className="grid md:grid-cols-3 gap-14 mt-18">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-white">
                <Check className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-serif mb-4">
                Delicious Offerings to Elevate Your Events and Gatherings
              </h3>
              <p className="mb-6 text-[#f2f1f0]/90 font-extralight">
                From breakfast buffets to fine dining, we cater to all your
                needs.
              </p>
              <a
                href="#trusted_partner"
                className="text-[#cdab6e] text-sm hover:underline mt-auto"
              >
                Your Trusted Partner
              </a>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-white">
                <MessageSquare className="w-12 h-12" />
              </div>
              <h3 className="text-xl md:text-xl font-serif mb-4">
                Indulge in Our Variety of Sweet and Savory Treats
              </h3>
              <p className="mb-6 text-[#f2f1f0]/90 font-extralight">
                Satisfy your cravings with our delightful candy bars and fruit
                platters.
              </p>
              <a
                href="#specialised"
                className="text-[#cdab6e] hover:underline mt-auto text-sm"
              >
                Our Services
              </a>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-white">
                <SmilePlus className="w-12 h-12" />
              </div>
              <h3 className="text-xl md:text-xl font-serif mb-4">
                Experience the Art of Charcuterie with Our Exquisite Boards
              </h3>
              <p className="mb-6 text-[#f2f1f0]/90 font-extralight">
                Our charcuterie boards are perfect for impressing guests at any
                event.
              </p>
              <a className="text-[#cdab6e] hover:underline mt-auto text-sm">
                <Modal2 />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#191a23]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="rounded-2xl overflow-hidden border border-[#cdab6e] border-3">
              <Image
                src={myImage}
                alt="Charcuterie board with various meats, cheeses, fruits and crackers"
                layout="fixed"
                className="rounded-2xl"
                style={{ width: "700px", height: "600px", objectFit: "cover" }}
                //className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
            {/* Right side - Content */}
            <div className="text-[#cdab6e]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                Elevate Your Workplace Dining Experience Today
              </h2>

              <p className="mb-6 text-[#f2f1f0]/90 font-extralight">
                Transform your workplace with our tailored food service programs
                that prioritize health and variety. Delight your employees with
                fresh, delicious meals that cater to diverse tastes and dietary
                needs.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 flex-shrink-0" />
                  <span>
                    Customized menus to suit every employee's preferences.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 flex-shrink-0" />
                  <span>
                    Healthy, fresh options delivered right to your workplace.
                  </span>
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
                  <Button />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="trusted_partner"
        className="py-16 pb-20 px-4 bg-[#191a23] text-[#cdab6e]"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-tight">
                Your Trusted Partner for Memorable Catered Events and
                Celebrations
              </h2>

              <p className="mb-6 text-[#f2f1f0]/90 font-thin">
                Whether it's a corporate conference or a private gala, we ensure
                every detail is perfect. Count on us to deliver exceptional food
                and service that leaves a lasting impression.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif mb-4">
                    Where every event becomes a masterpiece
                  </h3>
                  <p className="text-[#f2f1f0]/90 font-thin">
                    Every event is a work of art, crafted with precision,
                    creativity, and exceptional service to leave a lasting
                    impression
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-4">
                    Seamless service, spectacular flavors
                  </h3>
                  <p className="text-[#f2f1f0]/90 font-thin">
                    Flawless hospitality and exquisite cuisine come together for
                    an unforgettable experience
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="rounded-2xl overflow-hidden border border-[#cdab6e] border-3">
              <video
                src="/video/0320.mp4" // Pfad zum Video im public-Verzeichnis
                autoPlay // Video automatisch abspielen
                muted // Video stumm schalten
                loop // Video in einer Endlosschleife abspielen
                className="rounded-2xl"
                style={{ width: "700px", height: "600px", objectFit: "cover" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <SpecialtiesGrid1 />

      <SpecialtiesGrid2 />

      <SpecialtiesGrid3 />

      <section className="bg-[#191a23] text-white py-16 px-4 border-t border-[#555555]">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-[#cdab6e] text-4xl md:text-5xl lg:text-6xl font-serif mb-2 leading-tight">
              Catering for every Occasion.
            </h1>
            <h2 className="text-[#cdab6e] text-4xl md:text-5xl lg:text-6xl font-serif">
              We&apos;ve Got You Covered!
            </h2>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {/* Catered Events */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <ShoppingBasket className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-[#cdab6e] text-2xl font-medium mb-4">
                Catered Events
              </h3>
              <p className="mb-6 text-[#f2f1f0] font-thin">
                From conferences to corporate events, private parties to galas,
                when it matters most, we&apos;re the partner you can trust to
                get it right.
              </p>
            </div>

            {/* Workplace Dining */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Building2 className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-[#cdab6e] text-2xl font-medium mb-4">
                Workplace Dining
              </h3>
              <p className="mb-6 text-[#f2f1f0] font-thin">
                Give your employees healthy, fresh, and diverse culinary
                offerings in your workplace with our customized food service
                programs.
              </p>
            </div>

            {/* Delivery */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <SmilePlus className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-[#cdab6e] text-2xl font-medium mb-4">
                Delivery
              </h3>
              <p className="mb-6 text-[#f2f1f0] font-thin">
                Whether it&apos;s breakfast, lunch, or fruit platters, in the
                office, or at home, we&apos;re the best route to delicious,
                quality food.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
