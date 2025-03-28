import Image from "next/image";
import ModalCopy2 from "@/components/modal/privacypolicy-modal";
import ModalCopy from "@/components/modal/termsconditions-modal";
import ModalCopy3 from "@/components/modal/imprint";
import ModalCopy4 from "@/components/modal/refund-cancellation";
import ModalCopy5 from "./modal/food-hygiene&safety-compliance";

export default function Home() {
  return (
    <div className="bg-[#080600] mt-6 pt-2 border-t border-[#555555]">
      <footer className="container mx-auto px-2 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between px-20">
          <div className="mb-4 md:mb-0">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/Logo-black.jpeg"
                alt="Beyond Catering & Decor"
                width={190}
                height={70}
                className="object-contain"
              />
            </div>
          </div>
          <nav className="flex-1 flex flex-col items-end text-[#f2f1f0] font-thin">
            <div className="flex gap-4 md:gap-6 mb-2">
              {" "}
              {/* Erste Zeile */}
              <ModalCopy3 />
              <ModalCopy2 />
              <ModalCopy />
            </div>
            <div className="flex gap-4 md:gap-6">
              {" "}
              {/* Zweite Zeile */}
              <ModalCopy4 />
              <ModalCopy5 />
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
