import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

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
          <nav className="flex-1 flex justify-center md:justify-end text-[#f2f1f0]/90 font-thin">
            <ul className="flex flex-wrap gap-6 md:gap-8 text-white">
              <li>
                <Link href="/" className="hover:text-[#cdab6e] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#cdab6e] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#cdab6e] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#cdab6e] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-4 px-16 pt-4 border-t border-[#555555] flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-4 mb-4 md:mb-0 order-2 md:order-1 text-[#f2f1f0] font-thin">
            <Link href="/privacy" className="text-sm text-[#afafaf] hover:text-white transition-colors">
              Privacy & Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#afafaf] hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex gap-3 order-1 md:order-2 mb-4 md:mb-0">
            <Link href="#" className="bg-white rounded-full p-2 text-black hover:bg-[#f5f5f5] transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="bg-white rounded-full p-2 text-black hover:bg-[#f5f5f5] transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="bg-white rounded-full p-2 text-black hover:bg-[#f5f5f5] transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="bg-white rounded-full p-2 text-black hover:bg-[#f5f5f5] transition-colors">
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}