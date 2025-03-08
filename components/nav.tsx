"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              HYPEDROP
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link href="/drops" className="text-gray-300 hover:text-white px-3 py-2">
                  NEW DROPS
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
          <Button className="bg-violet-600 hover:bg-violet-700">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  )
}