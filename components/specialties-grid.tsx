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
  {
    title: "Candy Bar",
    image: "/images/candy-bar.jpeg",
    description:
      "Our candy bars are a sweet delight, featuring an array of premium chocolates, gummies, and confections. Perfect for weddings, parties, and events, they add a fun and colorful touch, ensuring a memorable treat for guests of all ages.",
  },
  {
    title: "Charcuterie Boards",
    image: "/images/charcuterie_boards.jpeg",
    description:
      "Our charcuterie boards are artfully arranged with a selection of premium meats, cheeses, fresh fruits, nuts, and gourmet accompaniments. Perfect for any gathering, they offer a delicious and elegant way to indulge in a variety of flavors and textures.",
  },
  {
    title: "Fine Dining",
    image: "/images/fine_dining.jpeg",
    description:
      "Our fine dining service brings an exceptional culinary experience to your event, featuring expertly crafted dishes made from the finest ingredients. From elegant presentations to exquisite flavors, we ensure every course is a memorable delight, providing your guests with a sophisticated and unforgettable dining experience.",
  },
  {
    title: "Fruit Platter",
    image: "/images/fruitsplatters_bowls.jpeg",
    description:
      "Our fruit platters are beautifully arranged with fresh, seasonal fruits, offering a vibrant and refreshing treat. Perfect for any occasion, they provide a healthy and delicious option that adds color and elegance to your event.",
  },
  {
    title: "Salads",
    image: "/images/salads.jpeg",
    description:
      "Our salads are made with the freshest, crisp ingredients, offering a healthy and vibrant addition to any event. From classic favorites to creative, seasonal combinations, each salad is thoughtfully crafted to provide a delicious and refreshing experience for your guests.",
  },
]

export default function SpecialtiesGrid() {
  return (
    <section className="py-20 px-4 bg-[#191a23] text-[#cdab6e]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">We Are Specialised In:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 rounded-xl overflow-hidden border border-[#cdab6e]/20 hover:border-[#cdab6e]/50 transition-all">
              <div className="h-48 overflow-hidden">
                <Image
                  src={specialty.image || "/placeholder.jpeg"}
                  alt={specialty.title}
                  width={400}
                  height={300}
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

