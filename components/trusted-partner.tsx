import Image from "next/image"
//import Trustedpartner from "public/images/your_trusted_partner.mp4";


export default function TrustedPartner() {
  return (
    <section className="py-20 px-4 bg-[#191a23] text-[#cdab6e]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
              Your Trusted Partner for Memorable Catered Events and Celebrations
            </h2>

            <p className="mb-10 text-[#cdab6e]/80">
              Whether it's a corporate conference or a private gala, we ensure every detail is perfect. Count on us to
              deliver exceptional food and service that leaves a lasting impression.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Where every event becomes a masterpiece</h3>
                <p className="text-[#cdab6e]/80">
                  Every event is a work of art, crafted with precision, creativity, and exceptional service to leave a
                  lasting impression
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif mb-4">Seamless service, spectacular flavors</h3>
                <p className="text-[#cdab6e]/80">
                  Flawless hospitality and exquisite cuisine come together for an unforgettable experience
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="rounded-3xl overflow-hidden">
          <video
            src="/video/your_trusted_partner.mp4" // Pfad zum Video im public-Verzeichnis
            width={616} // Breite des Videos
            height={500} // Höhe des Videos
            autoPlay // Video automatisch abspielen
            muted // Video stumm schalten
            loop // Video in einer Endlosschleife abspielen
            className="rounded-3xl"
            style={{ objectFit: "contain" }}
          >
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </div>
    </section>
  )
}

