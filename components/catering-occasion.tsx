import { ShoppingBasket, Building2, SmilePlus } from "lucide-react"

export default function Home() {
  return (
    <section className="bg-[#191a23] text-white py-36 px-4 border-t border-[#555555]">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-[#cdab6e] text-4xl md:text-5xl lg:text-6xl font-serif mb-2 leading-tight">
            Catering for every Occasion.
          </h1>
          <h2 className="text-[#cdab6e] text-4xl md:text-5xl lg:text-6xl font-serif">We&apos;ve Got You Covered!</h2>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {/* Catered Events */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <ShoppingBasket className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-[#cdab6e] text-2xl font-medium mb-4">Catered Events</h3>
            <p className="text-white">
              From conferences to corporate events, private parties to galas, when it matters most, we&apos;re the
              partner you can trust to get it right.
            </p>
          </div>

          {/* Workplace Dining */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Building2 className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-[#cdab6e] text-2xl font-medium mb-4">Workplace Dining</h3>
            <p className="text-white">
              Give your employees healthy, fresh, and diverse culinary offerings in your workplace with our customized
              food service programs.
            </p>
          </div>

          {/* Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <SmilePlus className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-[#cdab6e] text-2xl font-medium mb-4">Delivery</h3>
            <p className="text-white">
              Whether it&apos;s breakfast, lunch, or fruit platters, in the office, or at home, we&apos;re the best
              route to delicious, quality food.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

