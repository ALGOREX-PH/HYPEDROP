import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild className="lg:hidden mr-4">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-black border-r border-white/10">
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/collabs" className="text-gray-300 hover:text-white px-3 py-2">
                    COLLABS
                  </Link>
                  <Link href="/terms" className="text-gray-300 hover:text-white px-3 py-2">
                    TERMS & POLICIES
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2">
                    CONTACT US
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2">
                    ABOUT US
                  </Link>
                  <Link href="/trending" className="text-gray-300 hover:text-white px-3 py-2">
                    TRENDING
                  </Link>
                  <Link href="/collections" className="text-gray-300 hover:text-white px-3 py-2">
                    COLLECTIONS
                  </Link>
                  <Link href="/community" className="text-gray-300 hover:text-white px-3 py-2">
                    COMMUNITY
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="text-xl font-bold">
              <Logo />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link href="/collabs" className="text-gray-300 hover:text-white px-3 py-2">
                  COLLABS
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-white px-3 py-2">
                  TERMS & POLICIES
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2">
                  CONTACT US
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2">
                  ABOUT US
                </Link>
                <Link href="/trending" className="text-gray-300 hover:text-white px-3 py-2">
                  TRENDING
                </Link>
                <Link href="/collections" className="text-gray-300 hover:text-white px-3 py-2">
                  COLLECTIONS
                </Link>
                <Link href="/community" className="text-gray-300 hover:text-white px-3 py-2">
                  COMMUNITY
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/auth">
              <Button className="bg-violet-600 hover:bg-violet-700 hidden sm:inline-flex">
                Sign Up
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}