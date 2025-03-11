import Image from "next/image"
import breakfast from '/images/breakfastbasket.jpeg'; // Pfad zum Bild

const specialties = [
  {
    title: "Breakfast Buffet",
    image: "/images/breakfast.jpeg",
    description:
      "Our breakfast buffet features a diverse selection of fresh, high-quality dishes, from warm pastries to hearty hot meals. We cater to all tastes, ensuring a delicious and satisfying start to the day for every guest.",
  },
  {
    title: "Breakfast Basket",
    image: "/images/breakfastbasket.jpeg",
    description:
      "Our breakfast boards & baskets are beautifully curated with fresh, high-quality ingredients, perfect for any occasion. Featuring artisanal bread, pastries, cheeses, fruits, and more, they offer a delightful and convenient way to enjoy a gourmet breakfast.",
  },
  {
    title: "Canapés",
    image: "/images/canapes.jpeg",
    description:
      "Our canapés are elegant, bite-sized delights, perfect for any event. Crafted with fresh, high-quality ingredients, they offer a mix of flavors and textures, from classic to creative, ensuring a sophisticated and delicious experience for your guests.",
  },

]

export default function SpecialtiesGrid() {
  return (
    <section className="py-20 px-4 bg-[#191a23] text-[#cdab6e] border-t border-[#555555]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">We Are Specialised In:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-xl overflow-hidden border border-4 border-[#cdab6e]/20 hover:border-[#cdab6e]/50 transition-all">
              <div className="h-96 overflow-hidden">
                <Image
                  src={specialty.image || "/placeholder.jpeg"}
                  alt={specialty.title}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3">{specialty.title}</h3>
                <p className="text-sm text-[#cdab6e]/80">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

