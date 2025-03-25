import Image from "next/image";
import breakfast from "/images/breakfastbasket.jpeg"; // Pfad zum Bild

const specialties = [
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
];

export default function SpecialtiesGrid() {
  return (
    <section className="py-10 mb-20 px-4 bg-[#191a23] text-[#cdab6e]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] bg-opacity-10 rounded-xl overflow-hidden border border-4 border-[#cdab6e]/20 hover:border-[#cdab6e]/50 transition-all"
            >
              <div className="h-96 overflow-hidden">
                <Image
                  src={specialty.image || "/placeholder.jpeg"}
                  alt={specialty.title}
                  width={800} // gewünschte Breite
                  height={600} // Höhe proportional zum Bild
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3">{specialty.title}</h3>
                <p className="text-sm text-[#cdab6e]/80">
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
