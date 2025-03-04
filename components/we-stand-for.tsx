import Image from "next/image"
//import Trustedpartner from "public/images/your_trusted_partner.mp4";

export default function TrustedPartner() {
  return (
    <section className="pt-36 px-4">
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
  )
}

