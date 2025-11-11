'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target))
        setIsSearchExpanded(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) console.log('Search for:', searchQuery)
    setIsSearchExpanded(false)
    setSearchQuery('')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white text-gray-900' : 'bg-transparent text-white'
      }`}
      style={{
        borderBottom: 'none',
        boxShadow: isScrolled ? '0 0 8px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      {/* -------- FULL WRAPPER (ensures both sections sync) -------- */}
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled ? 'bg-white' : 'bg-transparent'
        }`}
      >
        {/* -------- TOP HEADER -------- */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? 'py-2' : 'py-4'
            }`}
          >
            {/* Left (Mobile Menu Icon) */}
            <div className="flex items-center">
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
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
            </div>

            {/* Center Logo */}
            <div className="flex justify-center flex-grow lg:flex-grow-0">
              <Link href="/" className="block">
                <div
                  className={`relative transition-transform duration-500 ${
                    isScrolled ? 'scale-90' : 'scale-100'
                  }`}
                >
                  <Image
                    src="/Just Becho New Logo.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-5 sm:space-x-6 justify-end">
              {/* Search */}
              <button
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Cart */}
              <Link
                href="/cart"
                className={`relative transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* -------- CATEGORY NAV (Desktop Only) -------- */}
        <div
          className={`hidden lg:block transition-all duration-500 ${
            isScrolled ? 'bg-white' : 'bg-transparent'
          }`}
          style={{
            borderTop: 'none',
            borderBottom: 'none',
            boxShadow: 'none',
          }}
        >
          <nav
            className={`max-w-[1600px] mx-auto flex justify-center space-x-8 py-3 text-sm font-medium transition-all duration-500 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {[
              'NEW ARRIVALS',
              'WOMEN',
              'MEN',
              'ACCESSORIES',
              'HOME DECOR',
              'FOOTWEAR',
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* -------- MOBILE MENU -------- */}
      {isMenuOpen && (
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isScrolled ? 'bg-white text-gray-800' : 'bg-black/90 text-white'
          }`}
        >
          <nav className="flex flex-col space-y-3 px-6 py-4 text-base font-medium">
            {[
              'NEW ARRIVALS',
              'WOMEN',
              'MEN',
              'ACCESSORIES',
              'HOME DECOR',
              'FOOTWEAR',
            ].map((item) => (
              <Link key={item} href="#" className="hover:text-primary">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* -------- SEARCH BAR (Dropdown) -------- */}
      {isSearchExpanded && (
        <div
          ref={searchRef}
          className="absolute top-full left-0 right-0 bg-white shadow-md py-3 px-4 flex items-center space-x-2"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md text-gray-700 outline-none"
          />
          <button
            onClick={handleSearchSubmit}
            className="px-4 py-2 bg-black text-white rounded-md text-sm"
          >
            Go
          </button>
        </div>
      )}
    </header>
  )
}
