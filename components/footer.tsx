import Link from "next/link"
import { Logo } from "@/components/logo"
import { Instagram, Twitter, Disc as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="col-span-2 sm:col-span-1 space-y-4">
          <Logo />
          <p className="text-gray-400 text-sm">
            The ultimate destination for exclusive streetwear drops and limited editions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><Link href="/new-arrivals" className="text-gray-400 hover:text-white text-sm">New Arrivals</Link></li>
            <li><Link href="/upcoming-drops" className="text-gray-400 hover:text-white text-sm">Upcoming Drops</Link></li>
            <li><Link href="/vip-access" className="text-gray-400 hover:text-white text-sm">VIP Access</Link></li>
            <li><Link href="/size-guide" className="text-gray-400 hover:text-white text-sm">Size Guide</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-2">
          <h3 className="font-bold mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</Link></li>
            <li><Link href="/shipping" className="text-gray-400 hover:text-white text-sm">Shipping</Link></li>
            <li><Link href="/returns" className="text-gray-400 hover:text-white text-sm">Returns</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4">
            <Link href="https://instagram.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://discord.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Discord className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}