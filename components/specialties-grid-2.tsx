import Image from "next/image"



export default function SpecialtiesGrid() {
  return (
    <section className="px-4 bg-[#191a23] text-[#cdab6e]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  className="bg-white bg-opacity-10 rounded-xl overflow-hidden border border-4 border-[#cdab6e]/20 hover:border-[#cdab6e]/50 transition-all">
                  <div className="h-96 overflow-hidden">
                    <Image
                      src="/images/candy-bar.jpeg"
                      alt= "Breakfast Buffet"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-3">Candy bars</h3>
                    <p className="text-sm text-[#cdab6e]/80">Our candy bars are a sweet delight, featuring an array of premium chocolates, gummies, and confections. Perfect for weddings, parties, and events, they add a fun and colorful touch, ensuring a memorable treat for guests of all ages.</p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center bg-black rounded-xl overflow-hidden ">
                  <div className="overflow-hidden">
                    <Image
                      src="/images/Logo-black.jpeg"
                      alt= "Breakfast Buffet"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="p-6">
                    <h3 className="text-xl font-serif mb-3">"Breakfast Buffet"</h3>
                    <p className="text-sm text-[#cdab6e]/80">"Our breakfast buffet features a diverse selection of fresh, high-quality dishes, from warm pastries to hearty hot meals. We cater to all tastes, ensuring a delicious and satisfying start to the day for every guest."</p>
                  </div> */}
                </div>
                <div
                  className="bg-white bg-opacity-10 rounded-xl overflow-hidden border border-4 border-[#cdab6e]/20 hover:border-[#cdab6e]/50 transition-all">
                  <div className="h-96 overflow-hidden">
                    <Image
                      src="/images/Charcuterie_boards_n.jpeg"
                      alt= "Breakfast Buffet"
                      width={400}
                      height={300}
                      objectFit= "contain"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-3">Charcuterie boards</h3>
                    <p className="text-sm text-[#cdab6e]/80">Our charcuterie boards are artfully arranged with a selection of premium meats, cheeses, fresh fruits, nuts, and gourmet accompaniments. Perfect for any gathering, they offer a delicious and elegant way to indulge in a variety of flavors and textures.</p>
                  </div>
                </div>
            </div>
            
          </div>
        </section>
  )
}

