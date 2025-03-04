import { Check, MessageSquare, SmilePlus } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-36 px-4 bg-[#191a23] text-[#cdab6e]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-16 max-w-5xl mx-auto leading-tight">
          Explore Our Exceptional Catering Services Tailored For Every Occasion
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <Check className="w-12 h-12" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-4">
              Delicious Offerings to Elevate Your Events and Gatherings
            </h3>
            <p className="mb-6 text-[#cdab6e]/80">From breakfast buffets to fine dining, we cater to all your needs.</p>
            <a href="#" className="text-[#cdab6e] hover:underline mt-auto">
              Your Trusted Partner
            </a>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <MessageSquare className="w-12 h-12" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-4">Indulge in Our Variety of Sweet and Savory Treats</h3>
            <p className="mb-6 text-[#cdab6e]/80">
              Satisfy your cravings with our delightful candy bars and fruit platters.
            </p>
            <a href="#" className="text-[#cdab6e] hover:underline mt-auto">
              Our Services
            </a>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <SmilePlus className="w-12 h-12" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-4">
              Experience the Art of Charcuterie with Our Exquisite Boards
            </h3>
            <p className="mb-6 text-[#cdab6e]/80">
              Our charcuterie boards are perfect for impressing guests at any event.
            </p>
            <a href="#" className="text-[#cdab6e] hover:underline mt-auto">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

