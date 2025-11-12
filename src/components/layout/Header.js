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
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between py-2.5">
          {/* LEFT: Search + Sell Now */}
          <div className="hidden md:flex flex-1 items-center space-x-5">
            {/* Search Bar */}
            <div className="relative flex items-center max-w-[220px] w-full border-b border-gray-400">
              <input
                type="text"
                placeholder="Search for products..."
                className={`flex-1 bg-transparent outline-none py-1.5 text-[15px] ${
                  isScrolled
                    ? 'text-gray-800 placeholder-gray-500'
                    : 'text-white placeholder-white/80'
                }`}
              />
              <button
                className={`px-2 transition ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                <svg
                  className="w-5 h-5"
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
              className={`px-5 py-1.5 rounded-full font-medium text-[15px] transition-all duration-300 ${
                isScrolled
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Sell Now
            </Link>
          </div>

          {/* CENTER: Logo */}
          <div className="flex justify-center flex-1">
            <Link href="/">
              <Image
                src="/Just Becho Logo JB.png"
                alt="Just Becho"
                width={75}
                height={75}
                className={`transition-transform duration-500 ${
                  isScrolled ? 'scale-90' : 'scale-100'
                }`}
              />
            </Link>
          </div>

          {/* RIGHT: Icons */}
          <div className="flex items-center space-x-5 flex-1 justify-end">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-7 h-7"
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
            <div className="hidden md:flex items-center space-x-5 text-[15px]">
              <Link href="/login" className="hover:text-primary">
                Login / Signup
              </Link>

              <Link href="/wishlist" className="hover:text-primary">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 
                    016.364 0L12 7.636l1.318-1.318a4.5 
                    4.5 0 116.364 6.364L12 21.364l-7.682-8.682a4.5 
                    4.5 0 010-6.364z"
                  />
                </svg>
              </Link>

              <Link href="/cart" className="relative hover:text-primary">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 
                    13l-2.293 2.293c-.63.63-.184 
                    1.707.707 1.707H17m0 0a2 2 0 
                    100 4 2 2 0 000-4zm-8 2a2 2 0 
                    11-4 0 2 2 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            isScrolled ? 'bg-white text-gray-800' : 'bg-black/90 text-white'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 space-y-3 text-base">
            <Link href="/sell" className="hover:text-primary">
              Sell Now
            </Link>
            <Link href="/login" className="hover:text-primary">
              Login / Signup
            </Link>
            <Link href="/wishlist" className="hover:text-primary">
              Wishlist
            </Link>
            <Link href="/cart" className="hover:text-primary">
              Cart
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
