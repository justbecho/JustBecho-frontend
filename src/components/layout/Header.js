'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white text-gray-900 shadow-sm' : 'bg-transparent text-white'
      }`}
    >
      <div className="w-[95%] sm:w-[90%] mx-auto">
        <div className="flex items-center justify-between py-4 sm:py-5">
          {/* LEFT: Search + Sell Now - Desktop Only */}
          <div className="hidden md:flex flex-1 items-center space-x-4">
            {/* Search Bar */}
            <div className="relative flex items-center max-w-[200px] lg:max-w-[220px] w-full border-b-2 border-gray-400">
              <input
                type="text"
                placeholder="Search for products..."
                className={`flex-1 bg-transparent outline-none py-1.5 text-[14px] lg:text-[15px] w-full ${
                  isScrolled
                    ? 'text-gray-800 placeholder-gray-500'
                    : 'text-white placeholder-white/80'
                }`}
              />
              <button
                className={`px-2 py-1.5 transition flex-shrink-0 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Sell Now Button */}
            <Link
              href="/sell"
              className={`px-4 lg:px-5 py-1.5 rounded-full font-medium text-[14px] lg:text-[15px] transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Sell Now
            </Link>
          </div>

          {/* CENTER: Logo - Perfect Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/Just Becho Logo JB.png"
                alt="Just Becho"
                width={isScrolled ? 70 : 80}
                height={isScrolled ? 70 : 80}
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-16 w-auto' : 'h-18 w-auto'
                }`}
                priority
              />
            </Link>
          </div>

          {/* RIGHT: Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5 flex-1 justify-end">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Options */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-5 text-[14px] lg:text-[15px]">
              <Link href="/login" className="hover:text-primary whitespace-nowrap">
                Login / Signup
              </Link>

              <Link href="/wishlist" className="hover:text-primary">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-8.682a4.5 4.5 0 010-6.364z"
                  />
                </svg>
              </Link>

              <Link href="/cart" className="relative hover:text-primary">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full w-3 h-3 lg:w-4 lg:h-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar - Below Header */}
        <div className="md:hidden border-t border-gray-200/50 mt-2 pt-2 pb-1">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className={`flex-1 bg-white/20 backdrop-blur-sm border border-gray-300/50 rounded-full px-4 py-2 text-sm outline-none w-full ${
                isScrolled
                  ? 'text-gray-800 placeholder-gray-500 bg-white'
                  : 'text-white placeholder-white/80 bg-white/10'
              }`}
            />
            <button
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            isScrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-black/95 text-white'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 space-y-4 text-base font-medium">
            <Link href="/sell" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sell Now
            </Link>
            <Link href="/login" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Login / Signup
            </Link>
            <Link href="/wishlist" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Wishlist
            </Link>
            <Link href="/cart" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Cart
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}